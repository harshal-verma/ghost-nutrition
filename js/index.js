const guidesList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const cancelBtn = document.querySelectorAll(".fa-times-circle");
const modalCard = document.querySelectorAll(".modal");

// const setupUI = (user) => {
//     if(user){
//         //toggle UI elements
//         loggedInLinks.forEach(item => item.style.display = 'block');
//         loggedOutLinks.forEach(item => item.style.display = 'none');
//     }else{
//         //toggle UI elements
//         loggedInLinks.forEach(item => item.style.display = 'none');
//         loggedOutLinks.forEach(item => item.style.display = 'block');
//     }
// }

function cancelModal(){
    document.querySelector(".fa-times-circle").style.display = 'none';
    console.log("dkvdkd")
}