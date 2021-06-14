const guidesList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
    if(user){
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

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