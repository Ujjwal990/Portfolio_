
let mybox1 = document.querySelector(".combined");
let mybox2 = document.querySelector(".skills");
let mybox3 = document.querySelector(".hobbies");

 
document.querySelector(".homeicon").addEventListener("click", function(){
    mybox1.style.display = 'flex';
    mybox2.style.display = 'none';
    mybox3.style.display = 'none';
})

document.querySelector(".skillsicon").addEventListener("click", function(){
    mybox1.style.display = 'none';
    mybox2.style.display = 'flex';
    mybox3.style.display = 'none';
})

document.querySelector(".hobbiesicon").addEventListener("click", function(){
    mybox1.style.display = 'none';
    mybox2.style.display = 'none';
    mybox3.style.display = 'inline';
})

