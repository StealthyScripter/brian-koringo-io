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
})