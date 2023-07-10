'use strict'
const showLogin = document.getElementById('login-modal');
const showLogout = document.getElementById('main-content');

display();

function display(){
    if(userActive){
        showLogin.style.display = "none";
        showLogout.style.display = "block";
        document.getElementById('welcome-message').innerHTML = `Wellcome ${userActive.firstName}`;
    }else{
        showLogin.style.display = "block";
        showLogout.style.display = "none";
    }
}

document.getElementById('btn-logout').addEventListener('click',function(){
    const isLogout = confirm("Bạn chắc chắn muốn đăng xuất?");
    if(isLogout){
        userActive = null;
        saveToStogare("userActive",userActive);
        display();
    }
})