import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MinimalButton } from '../../../MinimalButton/index';
import { Colors } from '../../../../assets/css/colors';

export const ChangeListButton = ({ lists: _lists, task }) => {
    const [lists, setLists] = useState([]);
    const [currentList, setCurrentList] = useState({});

    const getCurrentList = () => {
        let currentList = _lists.find((list) =>
            list.tasks.some((_task) => _task._id == task._id)
        );
        setCurrentList(currentList);
    };

    useEffect(() => {
        setLists(_lists);
        getCurrentList();
    }, [_lists]);

    return (
        <div className="ChangeListButton">
            <MinimalButton color={Colors.primary} name={currentList.name}>
                {() => <FontAwesomeIcon icon="tasks" color={Colors.primary} />}
            </MinimalButton>
        </div>
    );
};

ChangeListButton.propTypes = {
    lists: PropTypes.array,
    task: PropTypes.object,
};
