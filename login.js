var lploginbtn = document.querySelector('.lpLoginbtn');

var usersObj;
var currentUserObj;




if (localStorage.getItem('usersObj')) {
    var data = localStorage.getItem('usersObj');
    usersObj = JSON.parse(data);
}
else {
    usersObj = [];
}

let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

lploginbtn.addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById('email').value;

    var password = document.getElementById('password').value;

    if(usersObj.length === 0 ){
        alert('First signUp');
        return;
    }
    if (usersObj.length > 0) {
        for (var i = 0; i < usersObj.length; i++) {
            
            if(usersObj[i].email === email && usersObj[i].password != password){
                alert('Plese enter valid credintials');
                return;
            }
            if (usersObj[i].email === email && usersObj[i].password === password) {
                currentUserObj = usersObj[i];
                currentUserObj.token = generateString(16);
                sessionStorage.setItem('currentUserObj', JSON.stringify(currentUserObj));
                window.location.href = "/shop.html";
            }
        }
           
    }
});


var myCart = document.querySelector('.myCart');

myCart.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login to your Account First');
    }
    else{
        window.location.href = "/cart.html"
    }
})

var myProfile = document.querySelector('.profile');

myProfile.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login to your Account First');
    }
    else{
        window.location.href = "/profile.html"
    }
})