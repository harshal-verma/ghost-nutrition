const accountDetails = document.querySelector("#account-modal");
auth.onAuthStateChanged(user => {
    if(user){
        console.log("user logged in as: ", user.email);
        const html = `
            <div>Logged in as ${user.email}</div>
        `
        accountDetails.innerHTML = html;
        db.collection('guides').get().then(snapshot => {
        });
    }else{
        console.log("user is logged out")
    }
})

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        const modal = document.querySelector("#signup-modal");
        modal.close();
        signupForm.reset();
    })
})

const logout = document.querySelector("#logout");
logout.addEventListener("click" ,(e) => {
    e.preventDefault();
    auth.signOut().then(() => {
    });
})

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        const modal = document.querySelector("#modal-login");
        loginForm.reset();
    })
})
