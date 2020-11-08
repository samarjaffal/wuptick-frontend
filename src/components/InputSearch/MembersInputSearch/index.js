import React, { useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import Autosuggest from 'react-autosuggest';

export const MembersInputSearch = ({ doInvitation }) => {
    const { currentProject, teamSelected } = useUser();
    const [suggestions, setSuggestions] = useState([]);
    const [member, setMember] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        let membersList = teamSelected.members;

        return inputLength === 0
            ? []
            : membersList.filter(
                  (member) =>
                      member.name.toLowerCase().slice(0, inputLength) ===
                      inputValue
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
            console.log(doInvitation, 'doInvitation');
            if (doInvitation) {
                doInvitation(input);
            }
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
        if (memberExist) return;

        let memberObject = {
            user: { ...suggestion },
            role: {},
        };

        let newProjectMembers = [
            ...currentProject.members,
            { ...memberObject },
        ];

        currentProject.members = newProjectMembers;
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

    const getSuggestionValue = (suggestion) => suggestion.name;
    const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

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
