
// const modalButton = document.querySelector('.modalButton')
// const modal = document.querySelector('.modal')
// const modalBackdrop = document.querySelector('.modalBackdrop')
// const krestik = document.querySelector('.modalCloseButton')
// const thankYou = document.querySelector('.thankYou')
// const modalContent = document.querySelector('.modalContent')

// const inputMessage = document.querySelector('.inputMessage')
// const inputNumber = document.querySelector('.inputNumber')
// const sumbit = document.querySelector('.sumbit')




// let time

// modalButton.addEventListener('click', () => {
//     modalBackdrop.classList.add('modalBackdropActive')
//     modal.classList.add('modalActive')
//     thankYou.innerHTML = ''
//     modalContent.classList.remove('hideContent')
// })


// const removeModalClasses = () => {
//     if(time) {
//         clearTimeout(time)
//     }
//     modalBackdrop.classList.remove('modalBackdropActive')
//     modal.classList.remove('modalActive')
// }



document.getElementById('modalButton').addEventListener('click', function () {
    const modal = document.createElement('div')
    modal.classList = 'modal'
    modal.innerHTML = `
       <div class="modal-content">
             <span class="close">&times;</span>
             <form id="emailForm">
                <label for="email">Email:</label>
                <input type="email" id="email" required>
                <br>
                <label for="name">Имя:</label>
                <input type="text" id="name" required>
                <br>
                <button class="btn__apply" type="submit">Apply</button>
             </form>
       </div>
    `;
 
    document.body.appendChild(modal);
 
    document.querySelector('.close').addEventListener('click', function () {
       modal.remove();
    });
 
    document.getElementById('emailForm').addEventListener('submit', function (e) {
       e.preventDefault()
 
       const email = document.getElementById('email').value
       const name = document.getElementById('name').value
 
       console.log('Email:', email)
       console.log('Имя:', name)
 
       sendTelegramMessage(email, name)
 
       modal.remove()
    })
 })