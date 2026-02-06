const matchQuery = window.matchMedia("(prefers-color-scheme:dark)") 
const toggleBtn = document.querySelector("#toggleTheme");

function Theme(){
    if(matchQuery.matches){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

//it is for the button theme change
toggleBtn.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
    }else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme","dark");
    }
})


if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}else{
    Theme();
}


matchQuery.addEventListener("change",function(){  //it changes dynamically according to the OS theme change
    if(!localStorage.getItem("theme")){
        Theme();
    }else{
        document.body.classList.add(localStorage.getItem("theme"));
    }
    
})