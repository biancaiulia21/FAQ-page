
let Answer1=document.querySelector('.more_1');
let Answer2=document.querySelector('.more_2');
let Answer3=document.querySelector('.more_3');
let Answer4=document.querySelector('.more_4');
let plus1 =document.querySelector('#img1');
let minus1 =document.querySelector('#img2');
let plus2 =document.querySelector('#img3');
let minus2 =document.querySelector('#img4');
let plus3 =document.querySelector('#img5');
let minus3 =document.querySelector('#img6');
let plus4 =document.querySelector('#img7');
let minus4 =document.querySelector('#img8');


document.querySelector('.q1').onclick=()=>{
    Answer1.classList.toggle('active');
    minus1.classList.toggle('active');
    plus1.classList.toggle('inactive');

}
document.querySelector('.q2').onclick=()=>{
    Answer2.classList.toggle('active');
    minus2.classList.toggle('active');
    plus2.classList.toggle('inactive');
}
document.querySelector('.q3').onclick=()=>{
    Answer3.classList.toggle('active');
    minus3.classList.toggle('active');
    plus3.classList.toggle('inactive');

}
document.querySelector('.q4').onclick=()=>{
    Answer4.classList.toggle('active');
    minus4.classList.toggle('active');
    plus4.classList.toggle('inactive');

}