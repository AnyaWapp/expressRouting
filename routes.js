import fetch from 'node-fetch';

export const hello = () => {
    return "Hello World";
};

export const APINames = async () => {
    const api = 'https://www.usemodernfullstack.dev/api/v1/users';
    let returnedData;

    try {
        const response = await fetch(api);
        returnedData = await response.json();
    } catch (error) {
        return "Error fetching data";
    }

    return returnedData.map(user => `ID: ${user.id}, Username: ${user.name}`).join(`<br>`);
}