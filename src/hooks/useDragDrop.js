import idx from 'idx';
import { useState, useEffect, useCallback } from 'react';

export const useDragDrop = (
    _columns,
    key,
    manyColumns = true,
    _onDragEndCallBack = null
) => {
    const [columns, setColumns] = useState(_columns);
    const [onDragEndCallBack] = useState(_onDragEndCallBack);
    const [placeholderProps, setPlaceholderProps] = useState({});
    const queryAttr = 'data-rbd-drag-handle-draggable-id';

    useEffect(() => {
        setColumns(_columns);
    }, [_columns]);

    const onDragEnd = useCallback((result) => {
        const { destination, source, type } = result;

        if (!destination) return;

        if (
            destination.droppableId == source.droppableId &&
            destination.index == source.index
        )
            return;

        if (type == 'column') {
            const newColumns = [...columns];
            const [removed] = newColumns.splice(source.index, 1);
            newColumns.splice(destination.index, 0, removed);
            setColumns(newColumns);
            if (onDragEndCallBack) onDragEndCallBack(newColumns);
            setPlaceholderProps({});
            return;
        }

        const startColumn = columns.find(
            (column) => column._id == source.droppableId
        );
        const finishColumn = columns.find(
            (column) => column._id == destination.droppableId
        );

        if (startColumn == finishColumn) {
            let items = startColumn[key];

            const orderedItems = reorder(
                items,
                result.source.index,
                result.destination.index
            );

            const newColumn = {
                ...startColumn,
                [key]: orderedItems,
            };

            const index = columns.findIndex(
                (column) => column._id === source.droppableId
            );

            const newColumns = [...columns];
            newColumns[index] = newColumn;

            setColumns(newColumns);

            if (manyColumns) {
                if (onDragEndCallBack) onDragEndCallBack(newColumns);
            } else {
                if (onDragEndCallBack) onDragEndCallBack(orderedItems);
            }

            setPlaceholderProps({});
            return;
        }

        //moving from one list(column) to another

        const startItemsOrdered = Array.from(startColumn[key]);
        const [removed] = startItemsOrdered.splice(source.index, 1);

        const newStartColumn = {
            ...startColumn,
            [key]: startItemsOrdered,
        };

        const finishItemsOrdered = Array.from(finishColumn[key]);
        finishItemsOrdered.splice(destination.index, 0, removed);

        const newFinishColumn = {
            ...finishColumn,
            [key]: finishItemsOrdered,
        };

        const startIndex = columns.findIndex(
            (column) => column._id === newStartColumn._id
        );

        const finishIndex = columns.findIndex(
            (column) => column._id === newFinishColumn._id
        );

        const newColumns = [...columns];
        newColumns[startIndex] = newStartColumn;
        newColumns[finishIndex] = newFinishColumn;

        setColumns(newColumns);

        if (onDragEndCallBack) onDragEndCallBack(newColumns);
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

        const sourceIndex = event.source.index;
        const childrenArray = [...draggedDOM.parentNode.children];

        const movedItem = childrenArray[sourceIndex];
        childrenArray.splice(sourceIndex, 1);

        const updatedArray = [
            ...childrenArray.slice(0, destinationIndex),
            movedItem,
            ...childrenArray.slice(destinationIndex + 1),
        ];

        const { clientHeight, clientWidth } = draggedDOM;

        if (event.type == 'task') {
            const clientY =
                parseFloat(
                    window.getComputedStyle(draggedDOM.parentNode).paddingTop
                ) +
                updatedArray
                    .slice(0, destinationIndex)
                    .reduce((total, curr) => {
                        const style = window.getComputedStyle(curr);
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
        }
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    return {
        onDragEnd,
        columns,
        placeholderProps,
        setPlaceholderProps,
        handleDragUpdate,
    };
};
