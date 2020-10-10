import { useState, useCallback } from 'react';

export const useDragDrop = (_columns, _items) => {
    const [columns, setColumns] = useState(_columns);
    const [items, setItems] = useState(_items);

    const onDragEnd = useCallback((result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const column = columns[source.index];
        const newItems = Array.from(items);

        const newItem = items.find((item) => item._id == draggableId);

        newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, newItem);

        setItems(newItems);
    });

    return {
        onDragEnd,
        items,
        columns,
    };
};
