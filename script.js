var loginbutton = document.querySelector('.loginbtn');
var signupbutton = document.querySelector('.sighupbtn');


loginbutton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./login.html";
});

signupbutton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./signup.html";
});

var myCart = document.querySelector('.myCart');

myCart.addEventListener('click', (e) => {
    if (!sessionStorage.getItem('currentUserObj')) {
        alert('Login to your Account First');
    }
    else {
        window.location.href = "/cart.html"
    }
})

var myProfile = document.querySelector('.profile');

myProfile.addEventListener('click', (e) => {
    if (!sessionStorage.getItem('currentUserObj')) {
        alert('Login to your Account First');
    }
    else {
        window.location.href = "/profile.html"
    }
})
  
