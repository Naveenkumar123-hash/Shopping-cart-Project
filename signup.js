var spsignUpbtn = document.querySelector('.spSignbtn');

var usersObj;

if (localStorage.getItem('usersObj')) {
    var data = localStorage.getItem('usersObj');
    usersObj = JSON.parse(data);
}
else {
    usersObj = [];
}

spsignUpbtn.addEventListener('click', (e) => {
    e.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    if (usersObj.length > 0) {
        for (var i = 0; i < usersObj.length; i++) {
            if (usersObj[i].email === email) {
                alert('Email id already exists');
                return;
            }
        }
    }
    if (password != cpassword) {
        alert("Passwords do not match");
        return;
    }
    var user = {
        id: usersObj.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    usersObj.push(user);
    // console.log(usersObj);
    localStorage.setItem('usersObj', JSON.stringify(usersObj));
    var myForm = document.getElementById("myForm");
    myForm.reset();
    window.location.href = "/login.html";
})


var myCart = document.querySelector('.myCart');

myCart.addEventListener('click', (e) => {
    if (!sessionStorage.getItem('currentUserObj')) {
        alert('Login First');
    }
    else {
        window.location.href = "/cart.html"
    }
})

var myProfile = document.querySelector('.profile');

myProfile.addEventListener('click', (e) => {
    if (!sessionStorage.getItem('currentUserObj')) {
        alert('Login First');
    }
    else {
        window.location.href = "/profile.html"
    }
})