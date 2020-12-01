import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo-responsive.png';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { Avatar } from '../../components/Avatar/index';
import { Input } from '../../components/Forms/Input/index';
import { Colors } from '../../assets/css/colors';
import {
    FlexSpaceBetween,
    Button,
} from '../../components/SharedComponents/styles';
import { Title } from './styles';

export const SetupProfile = () => {
    return (
        <LoggedLayout showNavbar={false}>
            <Helmet>
                <title>Setup your profile - Wuptick</title>
            </Helmet>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <img src={Logo} alt="Wuptick Logo" width="104" />
                </div>

                <div>
                    <Title style={{ margin: 0 }}>Setup your profile</Title>
                    <div className="FormContainer" style={{ marginTop: '3em' }}>
                        <form action="">
                            <div style={{ width: '50%', margin: 'auto' }}>
                                {/*   <div style={{ marginBottom: '0.5em' }}>
                                    <Avatar hide={false} size={120} />
                                    <div>
                                        <a href="#">Add picture</a>
                                    </div>
                                </div> */}
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    width="100%"
                                    bg={Colors.backgroud}
                                />
                                <Input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    width="100%"
                                    bg={Colors.backgroud}
                                />
                                <FlexSpaceBetween>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        width="48%"
                                        bg={Colors.backgroud}
                                    />
                                    <Input
                                        type="text"
                                        name="birthday"
                                        placeholder="Birthday"
                                        width="48%"
                                        bg={Colors.backgroud}
                                    />
                                </FlexSpaceBetween>
                                <div style={{ marginTop: '1em' }}>
                                    <Button
                                        width="100%"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        Save and continue 🚀
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoggedLayout>
    );
};

SetupProfile.propTypes = {};
