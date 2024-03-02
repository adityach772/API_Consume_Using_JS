document.getElementById('fetch-button').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts') // Use JSONPlaceholder API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayData(data) {
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = ''; // Clear previous content

    // Create and append elements to display data
    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title; // Displaying 'title' property from JSONPlaceholder API
        ul.appendChild(li);
    });
    responseContainer.appendChild(ul);
}
