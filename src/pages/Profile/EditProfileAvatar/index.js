import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../components/Avatar/index';
import {
    Anchor,
    AvatarContainer,
    UploadIcon,
    UploadButton,
    AvatarWrapper,
    ProfilePic,
    SaveAvatarButton,
    SaveAvatarSpan,
    SaveAvatarContainer,
    CancelAvatarButton,
} from './styles';

export const EditProfileAvatar = ({ user }) => {
    const [image, setImage] = useState(user.avatar);
    const [originalImage] = useState(user.avatar);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const fileUpload = useRef(null);

    const previewImage = () => {
        let input = fileUpload.current;
        let previewImage = '';
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                previewImage = e.target.result;
                setImage(previewImage);
                setShowSaveButton(true);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    const setPreviousImage = () => {
        setImage(originalImage);
        setShowSaveButton(false);
    };

    return (
        <AvatarContainer>
            <AvatarWrapper>
                <Avatar hide={false} size={120} src={image} user={user} />
                <UploadButton onClick={() => fileUpload.current.click()}>
                    <UploadIcon icon="chevron-circle-up" aria-hidden="true" />
                </UploadButton>
                <input
                    className="file-upload"
                    type="file"
                    accept="image/*"
                    ref={fileUpload}
                    onChange={() => previewImage()}
                />
            </AvatarWrapper>

            {showSaveButton && (
                <SaveAvatarContainer>
                    {/*  <Anchor href="#">Change picture</Anchor> */}
                    <SaveAvatarSpan>
                        Do you like your new avatar?{' '}
                        <SaveAvatarButton>
                            Let&apos; save it 🚀.
                        </SaveAvatarButton>
                        <CancelAvatarButton onClick={() => setPreviousImage()}>
                            Or revert the changes
                        </CancelAvatarButton>
                    </SaveAvatarSpan>
                </SaveAvatarContainer>
            )}
        </AvatarContainer>
    );
};

EditProfileAvatar.propTypes = {
    user: PropTypes.object,
};
