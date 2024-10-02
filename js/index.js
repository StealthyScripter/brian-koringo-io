//get the body element
const body = document.body;
 
//get todays date
let today = new Date();

//get the current year
let thisYear = today.getFullYear();

//get the footer using query selector
const footer = document.querySelector('#copyright')

// create an element
const copyright = document.createElement('p');

//append the code
copyright.innerHTML = `
&copy; ${thisYear} Wendot. All rights reserved
`;

footer.appendChild(copyright);

//my skills
let mySkills = ["Javascript", "python", "c++", "C", "react", "angular" , "Tensor Flow", "Next.js"]

const Skills = document.getElementById('Skills')
const skillsList = Skills.querySelector('ul');

mySkills.forEach(skillName => {
    const skill = document.createElement('li');
    skill.innerText = skillName;
    skillsList.appendChild(skill);
});

const messageForm = document.forms['leave-message'];

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log('Name: ', userName);
    console.log('Email: ', userEmail);
    console.log('Message: ', userMessage);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    // Create new message element
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>: 
        <span>${userMessage}</span>
    `;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    
    // Add event listener to remove the message
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();

        // Hide messages section if the list is empty
        if (messageList.children.length === 0) {
            messageSection.style.display = 'none';
        }
});

// Append the remove button to the message
newMessage.appendChild(removeButton);

// Append the new message to the message list
messageList.appendChild(newMessage);

// Make the message section visible
messageSection.style.display = 'block';

// Clear the form fields
messageForm.reset();
});

// Hide the messages section initially if there are no messages
const messageSection = document.querySelector('#messages');
if (messageSection.querySelector('ul').children.length === 0) {
messageSection.style.display = 'none';
}

// Fetch GitHub Repositories
fetch('https://api.github.com/users/StealthyScripter/repos')
    .then(response => response.json())  // Convert response to JSON
    .then(repositories => {
        console.log(repositories);  // Log the repositories to see the data structure

        // Select the projects section and project list
        const projectSection = document.querySelector('#Projects');
        const projectList = projectSection.querySelector('ul');

        // Iterate over repositories and create a list item for each project
        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerText = repo.name;  // Set the inner text to the repository name
            projectList.appendChild(project);  // Append the project to the list
        });
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);

        // Handle errors by displaying a message in the projects section
        const projectSection = document.querySelector('#Projects');
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Error fetching projects. Please try again later.';
        projectSection.appendChild(errorMessage);
    });
