'use strict'

const firstname = document.getElementById('input-firstname');
const lastname = document.getElementById('input-lastname');
const username = document.getElementById('input-username');
const password = document.getElementById('input-password');
const cf_password = document.getElementById('input-password-confirm');

const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click',function(){
    const user = {
        firstname:firstname.value,
        lastname:lastname.value,
        username:username.value,
        password:password.value,
    }

    // check validate
    const isValidate = validate(user);
    if(isValidate){
        users.push(user);
        saveToStogare("userArr",users);
        alert("Chúc mừng bạn đã đăng ký thành công!");
        window.location.assign("../pages/login.html");
    }

    
});


//validate
function validate(user){
    let validate = true;

    if(user.firstname.trim().length === 0){
        validate = false;
        alert("Hãy nhập First Name");
    }
    if(user.lastname.trim().length === 0){
        validate = false;
        alert("Hãy nhập Last Name");
    }
    if(user.username.trim().length === 0){
        validate = false;
        alert("Hãy nhập User Name");
    }
    if(user.password.trim().length === 0){
        validate = false;
        alert("Hãy nhập Password");
    }else{
        if(user.password.length<=8){   
            validate = false;     
            alert("Password phải có nhiều hơn 8 ký tự");
        }else{
            validate = true;
        }
    }
    if(cf_password.value === ''){
        validate = false;
        alert("Hãy nhập lại Password");
    }else{
        if(cf_password.value != user.password){   
            validate = false;     
            alert("Nhập lại đúng password ở trên");
        }else{
            validate = true;
        }
    }
    for(let i=0;i<userArr.length;i++){
        if(userArr[i].username === user.username){
            validate = false;
            alert("User Name đã tồn tại");
        }
    }
    return validate;
}
