import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo-responsive.png';
import { navigate } from '@reach/router';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { Input } from '../../components/Forms/Input/index';
import { useForm } from 'react-hook-form';
import { useUser } from '../../hooks/useUser';
import { EditUserMutation } from '../../requests/User/EditUserMutation';
import { Colors } from '../../assets/css/colors';
import {
    FlexSpaceBetween,
    Button,
} from '../../components/SharedComponents/styles';
import { Title } from './styles';

export const SetupProfile = () => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useUser();

    useEffect(() => {
        if (currentUser.user_attempts > 1) {
            navigate('/');
        }
    }, [currentUser]);

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
                    <EditUserMutation>
                        {({ doEditUser, loading }) => {
                            const onFormSubmited = (formData) => {
                                const input = { ...formData };
                                doEditUser(input);
                            };

                            return (
                                <div
                                    className="FormContainer"
                                    style={{ marginTop: '3em' }}
                                >
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div
                                            style={{
                                                width: '50%',
                                                margin: 'auto',
                                            }}
                                        >
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                width="100%"
                                                refInput={register()}
                                                bg={Colors.backgroud}
                                            />
                                            <Input
                                                type="text"
                                                name="last_name"
                                                placeholder="Last Name"
                                                width="100%"
                                                refInput={register()}
                                                bg={Colors.backgroud}
                                            />
                                            <FlexSpaceBetween>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    width="48%"
                                                    refInput={register()}
                                                    defaultValue={
                                                        currentUser.email
                                                    }
                                                    bg={Colors.backgroud}
                                                />
                                                <Input
                                                    type="text"
                                                    name="birthday"
                                                    placeholder="Birthday (yyyy-mm-dd)"
                                                    width="48%"
                                                    bg={Colors.backgroud}
                                                    refInput={register()}
                                                />
                                            </FlexSpaceBetween>
                                            <div style={{ marginTop: '1em' }}>
                                                <Button
                                                    width="100%"
                                                    fontWeight="bold"
                                                    fontSize="16px"
                                                    disabled={loading}
                                                    onClick={handleSubmit(
                                                        onFormSubmited
                                                    )}
                                                >
                                                    {loading
                                                        ? 'Loading...'
                                                        : ' Save and continue 🚀'}
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            );
                        }}
                    </EditUserMutation>
                </div>
            </div>
        </LoggedLayout>
    );
};

SetupProfile.propTypes = {};
