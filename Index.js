let items = document.querySelectorAll('.slider .list .item')
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let thumbnail = document.querySelectorAll('.thumbnail .items')

let countitem = items.length
let itemactive = 0

next.addEventListener('click',()=>{
    itemactive++
    if(itemactive > countitem-1){
        itemactive = 0
    }
    items.forEach(item => {
        item.classList.remove('active')
    })
    items[itemactive].classList.add('active')

    thumbnail.forEach(images => {
        images.classList.remove('active1')
    })
    thumbnail[itemactive].classList.add('active1')
})
prev.addEventListener('click',()=>{
    itemactive--
    if(itemactive < 0){
        itemactive = countitem - 1
    }
    items.forEach(item => {
        item.classList.remove('active')
    })
    items[itemactive].classList.add('active')

    thumbnail.forEach(images => {
        images.classList.remove('active1')
    })
    thumbnail[itemactive].classList.add('active1')
    console.log(itemactive);
})