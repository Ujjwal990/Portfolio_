console.log("Is this js file working? yes or no");


let mybox1 = document.querySelector(".combined");
let mybox2 = document.querySelector(".skills");
let mybox3 = document.querySelector(".hobbies");


document.querySelector(".homeicon").addEventListener("click", function(){
    mybox1.style.display = 'flex';
    mybox2.style.display = 'none';
    mybox3.style.display = 'none';
    // console.log("1");
})

document.querySelector(".skillsicon").addEventListener("click", function(){
    mybox1.style.display = 'none';
    mybox2.style.display = 'flex';
    mybox3.style.display = 'none';
    // console.log("2");

})

document.querySelector(".hobbiesicon").addEventListener("click", function(){
    mybox1.style.display = 'none';
    mybox2.style.display = 'none';
    mybox3.style.display = 'inline';
    // console.log("3");

})

// console.log(mybox1.style.);
// console.log(mybox2);
// console.log(mybox3);
// mybox2.style.display = 'none';



