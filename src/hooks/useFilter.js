import { useState, useRef, useCallback } from 'react';

export const useFilter = () => {
    const [items, setItems] = useState([]);
    const [params, setParams] = useState([]);
    let inputRef = useRef(null);

    const escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const findMatch = (inputValue, item) => {
        const escapedValue = escapeRegexCharacters(inputValue);
        const regex = new RegExp('^' + escapedValue, 'i');
        let result = params.some((param) => regex.test(item[param]));
        return result;
    };

    const getSuggestions = useCallback((defaultValue) => {
        let value = inputRef.current.value;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let newItems =
            inputLength === 0
                ? defaultValue
                : defaultValue.filter((item) => findMatch(inputValue, item));

        setItems(newItems);
    });

    return {
        items,
        setItems,
        getSuggestions,
        inputRef,
        setParams,
    };
};
