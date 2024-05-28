// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    checkForName(formText);
    
    let url = '';
    let requestOptions = {};
    // Check if the URL is valid
    if (isValidUrl(formText)) {
        url = formText;
    } else {
        console.log('Invalid URL');
    }
    // If the URL is valid, send it to the server using the serverURL constant above        
    getData().then(res => {
        const formdata = new FormData();
        formdata.append("key", res);
        formdata.append("url", url);
        formdata.append("lang", "en");  // 2-letter code, like en es fr ...

        const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };
        callAPI(requestOptions).then(res => console.log(res));
    });
}

// Function to gather data from API call
async function callAPI (options) {
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', options);

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Function to check validity of URL
function isValidUrl (text) {
    try {
        const url = new URL(text);
        return (url.protocol === 'http:' || url.protocol === 'https:')
    } catch (error) {
        return false;
    }
}

// Function to send data to the server
async function getData () {
    const response = await fetch('/key');
    
    try {
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.log(error);
    }
}

// Export the handleSubmit function
export { handleSubmit };
export { callAPI };
export { getData };
export { isValidUrl };
