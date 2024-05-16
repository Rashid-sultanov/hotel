function klik() {
    document.querySelector('btn').value = 'Текст';
}

let submitBtn = document.querySelector('.btn');
function handleClick() {
    submitBtn.textContent = 'Processing…';
    if (submitBtn.textContent == 'Processing…') {
        submitBtn.textContent == 'Reservation';
    } else {
        submitBtn.textContent == 'Processing…';
    }
}
submitBtn.addEventListener('click', handleClick);




// const client = document.querySelector('.customers-client');

// function hren(event) {
//     if (event.currentTarget.classList.contains('customers-user')) {
//         const clienarr = Array.from(client.children);
//         for (let i = 0; i < clienarr.length; i++) {
//             clienarr[i].classList.remove('customers-user-active')
//         }
//         event.curentTarget.classList.add('customers-user-active')
//     }
// }

// client.addEventListener('click', hren)


const obj = document.querySelectorAll('.customers-user');
const line = document.querySelectorAll('.line-span')

function jhkkly(e) {

    for (let i = 0; i < obj.length; i++) {
        const i = obj[i].classList.remove('customers-user-active')
        line.forEach(function (item) {
            item.classList.remove('line-span-acive')

        })

    }
    e.currentTarget.classList.add('customers-user-active')


}


for (let i = 0; i < obj.length; i++) {
    obj[i].addEventListener('click', jhkkly)
}






// const client = document.querySelector('.customers-client');

// function hren(event) {
//     if (event.target.classList.contains('customers-user')) {
//         const clienarr = Array.from(client.children);
//         for (let i = 0; i < clienarr.length; i++) {
//             clienarr[i].classList.remove('customers-user-active');
//         }
//         event.target.classList.add('customers-user-active');
//     }
// }

// client.addEventListener('click', hren);







const users = document.querySelectorAll('.customers-user');

function hren(event) {
    // const clienarr = Array.from(users);
    for (let i = 0; i < users.length; i++) {
        users[i].classList.remove('customers-user-active');
    }
    event.currentTarget.classList.add('customers-user-active');
}

users.forEach(user => {
    user.addEventListener('click', hren);
});

let hyuf = document.querySelectorAll('.customers-user')
let kjhkh = document.querySelector('.customers')

function tery(event) {
    for (let i = 0; i < hyuf.length; i++) {
        hyuf[i].classList.remove('customers-user-active')

    }
    event.currentTarget.classList.add('customers-user-active')
}

hyuf.forEach(el => el.addEventListener('click', tery))






const btnActive = document.querySelector('.activ-btn')
const navItem = document.querySelector('.nav-item')

function clicNav(e) {
    navItem.classList.toggle('active')
    console.log('clic');
}

btnActive.addEventListener('click', clicNav)










const countptice = document.querySelectorAll('.count-ptice')

countptice.forEach(function (item) {

    const time = +item.getAttribute('time')
    let value = +item.textContent
    let max = +item.getAttribute('max')

    const setinter = setInterval(function () {

        if (value > max) {

            max++
            item.textContent = max
            if (max >= value) {

                clearInterval(setinter)


            }
        } else {
            max--
            item.textContent = max
            if (max <= value) clearInterval(setinter);
        }




    }, time / max)


})
