import { useState, useCallback } from 'react';

export const useDragDrop = (_columns, _items) => {
    const [columns, setColumns] = useState(_columns);
    const [items, setItems] = useState(_items);
    const [placeholderProps, setPlaceholderProps] = useState({});
    const queryAttr = 'data-rbd-drag-handle-draggable-id';

    const onDragEnd = useCallback((result) => {
        const { destination, source } = result;

        if (!destination) return;
        setItems((items) =>
            reorder(items, result.source.index, result.destination.index)
        );
        setPlaceholderProps({});
    });

    const getDraggedDom = (draggableId) => {
        const domQuery = `[${queryAttr}='${draggableId}']`;
        const draggedDOM = document.querySelector(domQuery);
        return draggedDOM;
    };

    const handleDragUpdate = (event) => {
        if (!event.destination) {
            return;
        }

        const draggableId = event.draggableId;
        const destinationIndex = event.destination.index;

        const draggedDOM = getDraggedDom(draggableId);

        if (!draggedDOM) {
            return;
        }

        const { clientHeight, clientWidth } = draggedDOM;

        const clientY =
            parseFloat(
                window.getComputedStyle(draggedDOM.parentNode).paddingTop
            ) +
            [...draggedDOM.parentNode.children]
                .slice(0, destinationIndex)
                .reduce((total, curr) => {
                    const style =
                        curr.currentStyle || window.getComputedStyle(curr);
                    const marginBottom = parseFloat(style.marginBottom);
                    return total + curr.clientHeight + marginBottom;
                }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(
                window.getComputedStyle(draggedDOM.parentNode).paddingLeft
            ),
        });
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    return {
        onDragEnd,
        items,
        columns,
        placeholderProps,
        setPlaceholderProps,
        handleDragUpdate,
    };
};
