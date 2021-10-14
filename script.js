let position = document.querySelector(".position");
let body = document.querySelector(".bodydiv")
let modal = document.querySelector(".modal");
let button = document.querySelector(".back");
let close = document.querySelector(".modalclose");
let show = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let show3 = document.querySelector(".show3");
let span = document.querySelector(".span").value; 
let spam = document.querySelector(".spam").value; 
let alert = document.querySelector(".confirm-alert");
let got = document.querySelector(".got"); 
let change = document.querySelector(".btn2"); 

function showModal(){
    if(modal.style.visibility === "visible"){
        modal.style.visibility = "hidden";
        position.style.opacity = "10";
        body.style.opacity = "10";
    }else{
        modal.style.visibility = "visible",
        position.style.opacity = ".3"
        body.style.opacity = ".3"
    }
}

button.addEventListener("click", showModal);
close.addEventListener("click", showModal);

function showAlert(){
    if(alert.style.display === "block"){
        alert.style.display = "none";
        modal.style.visibility = "visible";
        position.style.opacity = "10";
        body.style.opacity = "10";
        
    }else{
        alert.style.display = "block",
        modal.style.visibility = "hidden",
        position.style.opacity = ".3",
        body.style.opacity = ".3"
    }
}

show.addEventListener("click", showAlert);
show2.addEventListener("click", verifyInput);
show3.addEventListener("click", verifyInput);

function verifyInput(){
    if(span >= 25 || span <= 75 || alert.style.display === "block"){
        alert.style.display = "none";
        modal.style.visibility = "visible";
        position.style.opacity = "10";
        body.style.opacity = "10";
        
    }else{
        alert.style.display = "block",
        modal.style.visibility = "hidden",
        position.style.opacity = ".3",
        body.style.opacity = ".3",
        console.log("Above or Equal to 25")
    }
}

function verifyInput(){
    if(span <= 75 && alert.style.display === "block"){
        alert.style.display = "none";
        modal.style.visibility = "visible";
        position.style.opacity = "10";
        body.style.opacity = "10";
        
    }else{
        alert.style.display = "block",
        modal.style.visibility = "hidden",
        position.style.opacity = ".3",
        body.style.opacity = ".3",
        console.log("Above or Equal to 25")
    }
}

function removeAlert(){
    if(alert.style.display === "block"){
        alert.style.display = "none";
        position.style.opacity = "10";
        body.style.opacity = "10";
        change.textContent = "Bookmarked";
        change.style.color = "hsl(176, 50%, 47%)"
    }else{
        alert.style.display = "block"
    }
}

got.addEventListener("click", removeAlert)


let hamOpen = document.querySelector(".hamOpen");
let hamClose = document.querySelector(".close");
let nav = document.querySelector(".drop");

function displayHam(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        hamClose.style.display = "none";
        hamOpen.style.display ="block"
    }else{
        nav.style.display = "block",
        hamClose.style.display = "block",
        hamOpen.style.display ="none"
    }
}

hamOpen.addEventListener("click", displayHam);
hamClose.addEventListener("click", displayHam)