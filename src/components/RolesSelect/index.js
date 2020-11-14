import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { OutsideClick } from '../OutsideClick/index';
import { Label } from '../Label/index';
import { Colors } from '../../assets/css/colors';
const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const RolesSelect = forwardRef(
    ({ role, doUpdate, projectId, userId, openDropCallBack, setRef }, ref) => {
        const [openDropDown, setOpenDropDown] = useState(false);
        const [currentOption, setCurrentOption] = useState({});
        const selectRef = useRef(null);

        useImperativeHandle(selectRef, () => {
            return {
                setOption: (value) => setOption(value),
            };
        });

        const handleDropDown = (value = null) => {
            value = value == null ? true : value;
            setOpenDropDown(value);
            openDropCallBack(value);
            if (value) {
                setRef(selectRef);
            }
        };

        const setOption = (value) => {
            const roleTemp = { ...value };
            roleTemp.name = setFirstLetterUpperCase(roleTemp.name);
            setCurrentOption(roleTemp);
            doUpdate(projectId, userId, value._id.toLowerCase());
        };

        useEffect(() => {
            if (role) {
                const roleTemp = { ...role };
                if (Object.keys(role).length > 0) {
                    roleTemp.name = setFirstLetterUpperCase(roleTemp.name);
                    setCurrentOption(roleTemp);
                } else {
                    setCurrentOption({ name: 'Member' });
                }
            }
        }, [role]);

        return (
            <div ref={selectRef}>
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <Label
                        name={currentOption.name}
                        color={Colors.primary}
                        showCaret={true}
                        width="max-content"
                        onClicked={handleDropDown}
                        pointer={true}
                    ></Label>
                </OutsideClick>
            </div>
        );
    }
);

RolesSelect.propTypes = {
    role: PropTypes.object,
    doUpdate: PropTypes.func,
    projectId: PropTypes.string,
    userId: PropTypes.string,
    openDropCallBack: PropTypes.func,
    setRef: PropTypes.func,
};
