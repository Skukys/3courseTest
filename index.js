// let blocks = document.querySelectorAll('.red')
// console.log(blocks)
// blocks.forEach(item => {
// })

// let blocks = document.querySelectorAll('.red')
// let main = document.querySelector('.main-block')
// blocks.forEach(item => {
//     item.addEventListener('click', () => {
//         main.style.backgroundColor = item.style.backgroundColor
//     })
// })

let block = document.querySelector('.blue')

console.log(block.getAttribute('data-color'))

block.classList.remove('blue')
block.classList.add('pink')

console.log(block)
