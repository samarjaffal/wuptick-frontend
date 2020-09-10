import React from 'react';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { GetProjectQuery } from '../../requests/project/getProjectQuery';
import PropTypes from 'prop-types';

export const Project = ({ id }) => {
    return (
        <LoggedLayout>
            <GetProjectQuery projectId={id}>
                {({ data }) => {
                    return <div>Project #{id} </div>;
                }}
            </GetProjectQuery>
        </LoggedLayout>
    );
};

Project.propTypes = {
    id: PropTypes.string,
};
