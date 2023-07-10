'use strict'

const username = document.getElementById('input-username');
const password = document.getElementById('input-password');

document.getElementById('btn-submit').addEventListener('click',function(){
    const isValidate = validate();
    if(isValidate){
        console.log("dasd")
        const user = userArr.find(
            (item) => item.username===username.value && item.password===password.value
        )
        if(user){
            alert("Đăng nhập thàng công!");
            saveToStogare("userActive",user);
            window.location.assign("../index.html");
        }else{
            alert("Đăng nhập thất bại do username hoặc password sai!");
        }
    }
    
})

function validate(){
    let isValidate = true;
    if(username.value===''){
        isValidate = false;
        alert("Bạn hãy nhập Username!");
    }
    if(password.value===''){
        isValidate = false;
        alert("Bạn hãy nhập Password!");
    }

    return isValidate;
}