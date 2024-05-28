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
    getData();
    // Check if the URL is valid
 
        // If the URL is valid, send it to the server using the serverURL constant above
      
}

// Function to send data to the server
async function getData () {
    const response = await fetch('/key');
    
    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Export the handleSubmit function
export { handleSubmit };
export { getData };

