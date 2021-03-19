import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { Me } from '../../Me/index';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import Logo from '../../../assets/images/logo.png';
import {
    Anchor,
    LogoImg,
    OptionsContainer,
    SidebarHeader as SidebarStyled,
    LogoContainer,
    Col,
    HamburguerMenu,
} from './styles';

export const SidebarHeader = ({ setCollapsed }) => {
    return (
        <SidebarStyled>
            <Col>
                <LogoContainer>
                    <Anchor to="/">
                        <LogoImg src={Logo} alt="Wuptick Logo" />
                    </Anchor>
                </LogoContainer>
            </Col>
            <Col>
                <OptionsContainer>
                    <Me loader={SkeletonAvatar} loaderProps={{ qty: 1 }}>
                        {({ avatar }) => (
                            <Avatar size={25} src={avatar} margin="0 1em" />
                        )}
                    </Me>
                    <HamburguerMenu
                        icon="bars"
                        onClick={() => setCollapsed(true)}
                    />
                </OptionsContainer>
            </Col>
        </SidebarStyled>
    );
};

SidebarHeader.propTypes = {};
