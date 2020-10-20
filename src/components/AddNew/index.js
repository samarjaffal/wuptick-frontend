import React, { useState, useRef, useEffect } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Colors } from '../../assets/css/colors';
import { Container, Text, Icon, Input } from './styles';
export const AddNew = ({ text, icon = true, doFunction = null, setValue }) => {
    const [isEditing, setEditing] = useState(false);
    const inputEl = useInputValue('');
    const inputRef = useRef(null);

    const toggleEditing = () => {
        setEditing(true);
    };

    const handleKeys = (event) => {
        if (event.keyCode === 27) {
            escFunction();
        }

        if (event.keyCode === 13) {
            console.log('item added');
            setValue(inputRef.current.value);
            inputRef.current.value = '';
            if (doFunction) {
                doFunction();
            }
            setEditing(false);
        }
    };

    const escFunction = () => {
        setEditing(false);
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
        document.addEventListener('keydown', handleKeys, false);
        return () => {
            document.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing]);

    return (
        <Container onClick={() => toggleEditing()} isEditing={isEditing}>
            {!isEditing ? (
                <div>
                    {icon && (
                        <Icon icon="plus" color={Colors.gray} fontSize={10} />
                    )}{' '}
                    {'  '} <Text>{text}</Text>
                </div>
            ) : (
                <Input
                    type="text"
                    ref={inputRef}
                    placeholder="Write something..."
                />
            )}
        </Container>
    );
};
