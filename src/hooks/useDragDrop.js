import { useState, useCallback } from 'react';
import { ColumnHeader } from '../components/Task/TaskList/styles';

export const useDragDrop = (_columns, key, _onDragEndCallBack = null) => {
    const [columns, setColumns] = useState(_columns);
    const [items, setItems] = useState([]);
    const [onDragEndCallBack] = useState(_onDragEndCallBack);
    const [placeholderProps, setPlaceholderProps] = useState({});
    const queryAttr = 'data-rbd-drag-handle-draggable-id';

    const onDragEnd = useCallback((result) => {
        const { destination, source } = result;

        if (!destination) return;

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
            const arrayIds = orderedItems.map((item) => item._id);
            if (onDragEndCallBack) onDragEndCallBack(arrayIds);
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

        const clientY =
            parseFloat(
                window.getComputedStyle(draggedDOM.parentNode).paddingTop
            ) +
            updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
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
        items,
        setItems,
        placeholderProps,
        setPlaceholderProps,
        handleDragUpdate,
    };
};
