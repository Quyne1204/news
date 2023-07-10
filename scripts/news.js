'use strict'

if(userActive){
    const newContainer = document.getElementById('news-container');
    const btnPrev = document.getElementById('btn-prev');
    const pageNum = document.getElementById('page-num');
    const btnNext = document.getElementById('btn-next');

    let totalResults = 0;

    getDataNews("us",1);    

    async function getDataNews(country,page){
        try{
            // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&page=${page}&apiKey=3be8b4994eb442d3beda90d9dcece7c4`);
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&page=${page}&apiKey=17ac8f18709141258511d7f50c02a5da`);

            const data = await res.json();
            console.log(data);
            if(data.status==="error" && data.code === "rateLimited"){
                alert("link API bi loi");
            }
            
            if(data.status==="error" && data.code === "corsNotAllowed"){
                alert("link API bi loi");
            }
            
            displayNews(data);

        }catch(err){
            alert("Error: " + err.massage);
        }
    }

    function checkPrev(){
        if(pageNum.textContent == 1){
            btnPrev.style.display = "none";
        }else{
            btnPrev.style.display = "block";
        }
    }

    function checkNext(){
        if(pageNum.textContent == (totalResults/5).toFixed() ){
            btnNext.style.display = "none";
        }else{
            btnNext.style.display = "block";
        };

        
    }
    //Prev page
    btnPrev.addEventListener('click',function(){
        getDataNews("us", --pageNum.textContent);
        console.log(userActive.category);
    });
    //Next page
    btnNext.addEventListener('click',function(){
        getDataNews("us", ++pageNum.textContent);
    });

    function displayNews(data){
        totalResults = data.totalResults;

        checkPrev();
        checkNext();

        let html="";
        data.articles.forEach(function (article){
            html +=`
            <div class="card flex-row flex-wrap">
                <div class="card mb-3" style="">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src=${article.urlToImage ? article.urlToImage : "noimage.jpg" } alt="img" class="card-img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}</p>
                                <a href=${article.url} class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        newContainer.innerHTML = html;
    }

}else{
    alert("Bạn hãy đăng nhập");
    window.location.assign("../pages/login.html");
}