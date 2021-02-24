import React from 'react';
import { MinimalButton } from '../../../MinimalButton/index';
/* import { TaskCheck } from '../../../Task/TaskCheck/index'; */
import { PlainTaskCheck } from '../../../PlainTaskCheck/index';
import { HandleTaskStatusMutation } from '../../../../requests/Task/HandleTaskStatusMutation';
import { Colors } from '../../../../assets/css/colors';
import PropTypes from 'prop-types';

export const HeaderTaskCheck = ({ task }) => {
    return (
        <HandleTaskStatusMutation>
            {({ doHandleStatus }) => (
                <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <PlainTaskCheck
                            task={task}
                            isParentHover={isParentHover}
                            saveStatus={doHandleStatus}
                        />
                    )}
                </MinimalButton>
            )}
        </HandleTaskStatusMutation>
    );
};

HeaderTaskCheck.propTypes = {};
