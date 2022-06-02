
let link1 = document.querySelector('#link1'),
    link2 = document.querySelector('#link2'),
    link3 = document.querySelector('#link3'),
    link4 = document.querySelector('#link4');
let text1 =document.querySelector('#text1'),
    text2 =document.querySelector('#text2'),
    text3 =document.querySelector('#text3'),
    text4 =document.querySelector('#text4');


link1.addEventListener('click', function(event){
    
        event.preventDefault();
        text1.style.display = (text1.style.display == "block") ? "none" : "block";
        
})

link2.addEventListener('click', function(event){
    event.preventDefault();
    text2.style.display = (text2.style.display == "block") ? "none" : "block";
})

link3.addEventListener('click', function(event){
    event.preventDefault();
    text3.style.display = (text3.style.display == "block") ? "none" : "block";

})

link4.addEventListener('click', function(event){
    event.preventDefault();
    text4.style.display = (text4.style.display == "block") ? "none" : "block";

})

















    