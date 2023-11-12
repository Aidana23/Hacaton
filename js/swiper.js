
const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  

// const sliderWrap = document.querySelector('.swiper-wrapper')

// data.forEach(el => {
//     const slide = document.createElement('div')
//     const image = document.createElement('img')

//     slide.classList = 'swiper-slide'
//     image.classList = 'swiper-image'

//     image.src = el.img

//     slide.append(image)
//     sliderWrap.append(slide)
// })