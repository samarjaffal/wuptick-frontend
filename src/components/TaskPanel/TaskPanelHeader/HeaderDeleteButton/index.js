import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { useTask } from '../../../../hooks/useTask';
import { Colors } from '../../../../assets/css/colors';
import { Icon } from './styles';

export const HeaderDeleteButton = ({ panelRef }) => {
    const { openDeleteModal, setElemType, setBeforeDeleteTask } = useTask();

    const closePanel = () => {
        panelRef.current.closeModal();
    };

    const deleteTask = useCallback(() => {
        setElemType('task');
        openDeleteModal();
        setBeforeDeleteTask(() => closePanel);
    }, []);

    return (
        <div className="delete-task-button" onClick={() => deleteTask()}>
            <MinimalButton
                color={Colors.red}
                size={35}
                bg={Colors.whitePrimary}
            >
                {(isParentHover) => (
                    <Icon
                        icon={['far', 'trash-alt']}
                        color={isParentHover ? Colors.red : Colors.red}
                    />
                )}
            </MinimalButton>
        </div>
    );
};

HeaderDeleteButton.propTypes = {
    panelRef: PropTypes.any,
};
