//get data
// db.collection('products').get().then(snapshot => {
//     console.log(snapshot.docs)
// ;});
const setupGuides = (data) => {
    if(data.length){
    // setupGuides(snapshot.docs)
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        // console.log(guide);
        const li = `
           <li>
              <div>${guide}</div>
              <div>${guide.content}</div>
           </li>
        `;
        html += li;
    });
    guideList.innerHTML = html;
  }else{
    guideList.innerHTML = '<h5>Login to view guides</h5>'
  }
}
const accountDetails = document.querySelector("#account-modal");
//listen for auth status changes 
auth.onAuthStateChanged(user => {
    // console.log(user);
    if(user){
        console.log("user logged in as: ", user.email);
        const html = `
            <div>Logged in as ${user.email}</div>
        `
        accountDetails.innerHTML = html;
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
        });
    }else{
        console.log("user is logged out")
        setupUI();
        setupGuides([]);
    }
})

//sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

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
    });
})

//login in method
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        //close the login modal and reset the form
        const modal = document.querySelector("#modal-login");
        loginForm.reset();
    })
})

//log ou