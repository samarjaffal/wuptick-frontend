const generateProfileUrl = (name, lastName, id) => {
    const profile = `${name}-${lastName}-${id}`;
    const url = `profile/${profile}`;
    return url;
};
