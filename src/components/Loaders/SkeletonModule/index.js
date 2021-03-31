import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
    HeaderContainer,
    TabsContainer,
    TasksContainer,
    Task,
    TaskOptions,
    OptionContainer,
    ListContainer,
    SkeletonStyled,
    TitleContainer,
} from './styles';

export const SkeletonModule = () => {
    const TABS_COUNT = 4;

    const TaskItem = ({ width }) => {
        return (
            <Task>
                <SkeletonStyled w={width} />
                <TaskOptions>
                    <OptionContainer>
                        <Skeleton width={25} height={25} circle={true} />
                    </OptionContainer>
                    <OptionContainer>
                        <Skeleton width={50} />
                    </OptionContainer>
                </TaskOptions>
            </Task>
        );
    };

    return (
        <div className="Container" style={{ width: '100%' }}>
            <HeaderContainer>
                <TitleContainer>
                    <SkeletonStyled w={400} />
                </TitleContainer>
                <SkeletonStyled w={150} />
            </HeaderContainer>

            <TabsContainer>
                {Array(TABS_COUNT)
                    .fill()
                    .map((tab, index) => (
                        <div key={index} style={{ marginRight: '1em' }}>
                            <Skeleton width={80} />
                        </div>
                    ))}
            </TabsContainer>

            <TasksContainer>
                <ListContainer>
                    <div style={{ marginBottom: '1em' }}>
                        <SkeletonStyled w={450} />
                    </div>
                    <div className="tasks">
                        <TaskItem width={150} />
                        <TaskItem width={350} />
                        <TaskItem width={250} />
                    </div>
                </ListContainer>
                <ListContainer>
                    <div style={{ marginBottom: '1em' }}>
                        <SkeletonStyled w={250} />
                    </div>
                    <div className="tasks">
                        <TaskItem width={450} />
                        <TaskItem width={250} />
                        <TaskItem width={500} />
                        <TaskItem width={350} />
                        <TaskItem width={250} />
                    </div>
                </ListContainer>
            </TasksContainer>
        </div>
    );
};

SkeletonModule.propTypes = {};
