import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { useUser } from '../../../hooks/useUser';
import { Avatar } from '../../Avatar/index';
import { MemberListElement } from '../../MemberListElement/index';
import { FlexSpaceBetween } from './styles';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export const MembersInputSearch = ({ doInvitation, setMembers }) => {
    const { currentProject, teamSelected, getMembersFromTeams } = useUser();
    const [suggestions, setSuggestions] = useState([]);
    const [member, setMember] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const escapedValue = escapeRegexCharacters(inputValue);
        const regex = new RegExp('^' + escapedValue, 'i');
        /* let membersList = teamSelected.members; */
        let membersList = getMembersFromTeams();

        return inputLength === 0
            ? []
            : membersList.filter(
                  (member) =>
                      regex.test(member.name) ||
                      regex.test(member.last_name) ||
                      regex.test(member.email)
              );
    };

    const onKeyDownHandler = (event) => {
        const { keyCode } = event;
        if (keyCode === 13 && suggestions.length <= 0) {
            if (member === null || member === '') return;
            if (!validateEmail(member)) return;
            let input = {
                email: member,
                projectId: currentProject._id,
                teamId: teamSelected._id,
            };

            if (doInvitation) {
                doInvitation(input);
            }
            setMember('');
        }
    };

    const onSuggestionsFetchRequested = async ({ value }) => {
        if (!value) {
            setSuggestions([]);
            return;
        }
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionSelected = async (_event, { suggestion }) => {
        console.log(suggestion, 'onSuggestionSelected');
        const memberExist = currentProject.members.some(
            (member) => member.user._id == suggestion._id
        );
        if (memberExist) {
            setMember('');
            return;
        }

        let memberObject = {
            user: { ...suggestion },
            role: {},
        };

        let newProjectMembers = [...currentProject.members, memberObject];

        currentProject.members = newProjectMembers;

        setMembers(newProjectMembers);

        let input = {
            email: suggestion.email,
            projectId: currentProject._id,
            teamId: teamSelected._id,
        };
        if (doInvitation) {
            doInvitation(input);
        }
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const MemberElement = ({ suggestion }) => (
        <FlexSpaceBetween>
            <MemberListElement member={suggestion} />
        </FlexSpaceBetween>
    );

    const getSuggestionValue = (suggestion) =>
        `${suggestion.name} ${suggestion.last_name}`;
    const renderSuggestion = (suggestion) => (
        <MemberElement suggestion={suggestion} />
    );

    return (
        <Autosuggest
            inputProps={{
                placeholder: 'Email address or name',
                autoComplete: 'off',
                name: 'member-search',
                id: 'member-search',
                value: member,
                onChange: (_event, { newValue }) => {
                    setMember(newValue);
                },
                onKeyDown: onKeyDownHandler,
            }}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionSelected={onSuggestionSelected}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
        />
    );
};

MembersInputSearch.propTypes = {
    doInvitation: PropTypes.func,
    setMembers: PropTypes.func,
};
