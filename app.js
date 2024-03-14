//1 - video 

//doom selector

//1) tag name

//const listItem = document.getElementsByTagName("li")
//listItem.forEach(li) => {
//    console.log(li);
//}

//2) class name

//const listItem = document.getElementsByClassName("list-item")
//console.log(listItem);

//3)by id 

//const clickBtn = document.getElementById("click-btn")
//console.log(clickBtn);

//4)qurey seector / qurey selectorAll 

//const listItem = document.querySelector('.list-item')
//listItem.forEach(item => {
//    console.log(item);
//});


// 2 -video 

//text content 
/*
const title = document.getElementById('title')
title.textContent += " New Content"


const listItem = document.querySelectorAll('.list-item')
listItem.forEach((item) => {
    item.textContent += ' darslari'
})
*/
//inner html

//const title = document.getElementById('title');
//title.innerHTML = ' New text HTML'

//const names = [ 'Ahror' , 'Sardor' , 'Doniyor']
//const ul = document.querySelector('ul')

//names.forEach((name) => {
//    ul.innerHTML += ` <li>${name}</li>`
//})


// 3 - video

//getAtribute  /   setAtribute 
/*
const link = document.querySelector('a')
console.log(link.getAttribute('href'));

link.setAttribute('href' , 'https://www.yandex.ru')
link.textContent = "Go to Yandex main page "

const text = document.querySelector('p')
console.log(text.getAttribute('class'));
text.setAttribute('class' , 'succes')
text.setAttribute('style' , 'color: red')
*/


//4 - viddeo 
/*
const hedding = document.querySelector('h4')
//hedding.setAttribute('style' , 'margin: 50px')
hedding.style.margin = '50px'
hedding.style.color = 'crimson'
hedding.style.fontSize = '50px'
*/

//5 - video 

// add & remove 


//const content = document.querySelector('p')

//console.log(content.classList);
//content.classList.add('succes')
//content.classList.remove('succes')
//content.classList.add('error')

/*
const para = document.querySelectorAll('p')

para.forEach((text) => {
    if(text.textContent.includes('success')){
        text.classList.add('succes')
    }

    if(text.textContent.includes('error')){
        text.classList.add('error')
    }
})
*/


//6 - video 
/*
const article = document.querySelector('article')
console.log(article.children);


Array.from(article.children).forEach((child) => {
    child.classList.add('article-child')
})

const title = document.querySelector('h2')

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibing);
console.log(title.previusElementSibling);

console.log(title.nextElementSibing.parentElement.children);
*/

//7 - video 
const ul = document.querySelector('ul')

const li = document.createElement('li')
li.textContent = 'something new text'
ul.appendChild(li)

//append - top 
//prepend - bottom

