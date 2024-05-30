
let h1=document.querySelector("h1");
let h2=document.querySelector("span");
let btn=document.querySelector("button");
let body=document.querySelector("body");
// let color=["red","green","blue"];

btn.addEventListener("click",()=>{

    let ranbtn=randomColor();
     document.body.style.backgroundColor=ranbtn;
     h2.innerHTML=ranbtn;


})

function randomColor(){

        let letters = '0123456789ABCDEF'.split('');
        let key = '#';
        for (var i = 0; i < 6; i++ ) {
          key += letters[Math.floor(Math.random() * 16)];
        }
        return key;
      
}