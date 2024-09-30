//get the body element
const body = document.body;
 
//get todays date
let today = new Date();

//get the current year
let thisYear = today.getFullYear();

//get the footer using query selector
const footer = document.querySelector('footer')

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

for (let i = 0; i < mySkills.length; i++) {
    const skill = document.createElement('li');


    skill.innerText = mySkills[i];

    skillsList.appendChild(skill)
}

