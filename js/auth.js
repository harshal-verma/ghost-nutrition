//sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email , password);

    //sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        const modal = document.querySelector("#signup-modal");
        modal.close();
        signupForm.reset();
    })
})

//log out method 
const logout = document.querySelector("#logout");
logout.addEventListener("click" ,(e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user has signed out !!!");
    });
})

//login in method
const login = document.querySelector("")