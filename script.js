let h1=document.querySelector('h1');

let p1=document.querySelector('p');


let a1=document.querySelector('.img1');//Картинки
let a2=document.querySelector('.img2');

let t1=document.querySelector('.text1');//Параграфы p
let t3=document.querySelector('.num');
let t2=document.querySelector('.text2');

let div=document.querySelector('#list');//DIVS

let i1=document.querySelector('#i1');//Inputs
let i2=document.querySelector('#i2');
let i3=document.querySelector('#i3');

let b1=document.querySelector('#start1');//Buttons
let b2=document.querySelector('#start2');
let b3=document.querySelector('#start3');
let b4=document.querySelector('#start4');
let b5=document.querySelector('#start5');
let b6=document.querySelector('#cancel');



div.innerHTML='<h2>Поменяли текст Magic</h2>';
h1.innerHTML='Magic';





b1.addEventListener('click', function(){//задание 1
    t1.innerHTML='Привет';
    });

    b2.addEventListener('click', function(){//задание 1
        t2.innerHTML='Пока';
    
    });

    b3.addEventListener('click', function(){//Задание 2
        let res=t3.innerHTML;
        console.log(res);
        res++;
        t3.innerHTML=res;
    })



    //задание 3
    b3.addEventListener('click', function(){
        t1.innerHTML='<i>hello</i>';
    });

    //задание4
    let s=document.querySelector('a');
    b6.addEventListener('click', function(){
        t2.innerHTML=s.href;
    });

b4.addEventListener('click', function(){//Задание 5
        let pt=a1.src;
        t1.innerHTML=pt;
    });



    //задание 6
    b6.addEventListener('click', function(){
        a2.width=+300
    });


    let w=a1.width;//Задание 7
    b6.addEventListener('click', function(){
        a1.width=w*2;
    });
    
    let r2=a2.src;//задание 8
    let r1=a1.src;
    b5.addEventListener('click', function(){
    a1.src=r2;
    a2.src=r1;
    });

    

    //Задание 9
    
    b5.addEventListener('click', function(){
        let resu=+i1.value*i1.value;
        i2.innerHTML=resu;
    });










