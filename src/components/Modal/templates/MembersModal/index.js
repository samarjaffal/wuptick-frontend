import React from 'react';
import { Avatar } from '../../../Avatar/index';
import { Label } from '../../../Label/index';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';
import { Subtitle, MemberName, MemberEmail } from './styles';

export const MemberModal = ({ modalRef }) => {
    const { currentProject } = useUser();
    return (
        <Modal
            ref={modalRef}
            title={`${currentProject ? `${currentProject.name}:` : ''} Members`}
        >
            <Subtitle>Current members of the project</Subtitle>
            {Array(3)
                .fill()
                .map((member, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.5em',
                            }}
                        >
                            <Avatar size={30} />
                            <div
                                className="user-info"
                                style={{ marginLeft: '0.5em' }}
                            >
                                <MemberName>Samar Jaffal</MemberName>
                                <MemberEmail>
                                    samarjaffalh@gmail.com
                                </MemberEmail>
                            </div>
                        </div>

                        <div>
                            <Label
                                name="Member"
                                color={Colors.primary}
                                showCaret={true}
                                width="max-content"
                            />
                        </div>
                    </div>
                ))}
            <hr />
            <div className="invite-container">
                <Subtitle>Invite members to your project</Subtitle>
                <Input placeholder="Email address or name" bg={Colors.white} />
                <div className="invited-members" style={{ marginTop: '0.5em' }}>
                    {Array(1)
                        .fill()
                        .map((member, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.5em',
                                    }}
                                >
                                    <Avatar size={30} />
                                    <div
                                        className="user-info"
                                        style={{ marginLeft: '0.5em' }}
                                    >
                                        <MemberName>Peter Will</MemberName>
                                        <MemberEmail>
                                            peterwill@gmail.com
                                        </MemberEmail>
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        name="Waiting for confirmation"
                                        color={Colors.yellow}
                                        showCaret={true}
                                        width="max-content"
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </Modal>
    );
};
