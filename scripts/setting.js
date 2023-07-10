'use strict'

const pageSizeInput = document.getElementById("input-page-size");
const categoryInput = document.getElementById("input-category");
const btn = document.getElementById("btn-submit");

if(userActive){
    pageSizeInput.value = userActive.pageSize;
    categoryInput.value = userActive.category;
    
    btn.addEventListener('click',function(){
        
        const isValidate = validate();
        if(isValidate){
            
            userActive.pageSize = Number.parseInt(pageSizeInput.value);
            userActive.category = categoryInput.value;
            saveToStogare("userActive",userActive);

            const index = userArr.findIndex((item)=>item.username === userActive.username);
            userArr[index] = userActive;
            saveToStogare("userArr",userArr);
            alert("Cập nhật thành công");
            window.location.assign('../pages/news.html');
        }
    })

    function validate(){
        let validate = true;
        if(Number.parseInt(pageSizeInput.value) ===0 || pageSizeInput.value===''){
            alert("Bạn hãy điền News per page");
            validate = false;
        }
        if(categoryInput.value===''){
            alert("Bạn hãy điền News Category");
            validate = false;
        }
        return validate;
    }

}else{
    alert("Bạn hãy đăng nhập");
    window.location.assign("../pages/login.html");
}
