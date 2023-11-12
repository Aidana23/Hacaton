const accordionWrap = document.querySelectorAll('.accordion__wrap')



for(let i = 0; i < accordionWrap.length; i++) {
    accordionWrap[i].addEventListener('click', () => {
        accordionWrap.forEach((el, index) => {
            if(i === index) {
                el.classList.toggle('accordion__active')
            } else {
                el.classList.remove('accordion__active')
            }
        })
    })
}



const wrap2 = document.querySelectorAll('.wrap2')
 wrap2.forEach((el, index) => {
    el.addEventListener('click' , () => {
        el.classList.toggle('accordion__activ')
    })

 })