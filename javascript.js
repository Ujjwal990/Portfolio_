
let home = document.querySelector(".combined");
let skills = document.querySelector(".skills");
let hobbies = document.querySelector(".hobbies");


document.querySelector(".homeicon").addEventListener("click", function(){
    home.style.display = 'flex';
    skills.style.display = 'none';
    hobbies.style.display = 'none';
})

document.querySelector(".skillsicon").addEventListener("click", function(){
    home.style.display = 'none';
    skills.style.display = 'flex';
    hobbies.style.display = 'none';
})

document.querySelector(".hobbiesicon").addEventListener("click", function(){
    home.style.display = 'none';
    skills.style.display = 'none';
    hobbies.style.display = 'inline';
})

