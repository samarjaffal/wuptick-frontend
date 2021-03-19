import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../assets/images/logo.png';
import { SidebarAvatar } from '../SidebarAvatar/index';
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
                    <SidebarAvatar />
                    <HamburguerMenu
                        icon="bars"
                        onClick={() => setCollapsed(true)}
                    />
                </OptionsContainer>
            </Col>
        </SidebarStyled>
    );
};

SidebarHeader.propTypes = {
    setCollapsed: PropTypes.bool,
};
