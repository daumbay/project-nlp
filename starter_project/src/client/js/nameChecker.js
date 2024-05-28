// Function to check validity of URL
function isValidUrl (text) {
    try {
        const url = new URL(text);
        return (url.protocol === 'http:' || url.protocol === 'https:')
    } catch (error) {
        return false;
    }
}

export { isValidUrl };
