import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInputValue } from '../../hooks/useInputValue';
import { Colors } from '../../assets/css/colors';
import { Container, Text, Icon, Input } from './styles';
export const AddNew = ({
    text,
    icon = true,
    doFunction = null,
    setValue,
    ...rest
}) => {
    const [isEditing, setEditing] = useState(false);
    const [isFocused, SetFocus] = useState(false);
    const inputRef = useRef(null);

    const toggleEditing = () => {
        setEditing(true);
    };

    const handleKeys = (event) => {
        if (event.keyCode === 27) {
            escFunction();
        }

        if (event.keyCode === 13) {
            if (isFocused) {
                setValue(inputRef.current.value);
                inputRef.current.value = '';
                if (doFunction) {
                    doFunction();
                }
                setEditing(false);
            }
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
        SetFocus(inputRef.current !== document.activeElement);
        return () => {
            document.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing]);

    return (
        <Container
            onClick={() => toggleEditing()}
            isEditing={isEditing}
            {...rest}
        >
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

AddNew.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.bool,
    doFunction: PropTypes.func,
    setValue: PropTypes.func,
    rest: PropTypes.object,
};
