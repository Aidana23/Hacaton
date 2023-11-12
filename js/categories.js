const dataAlt = [

    {
       name: 'Муслин',
       img: 'https://sun9-71.userapi.com/impg/Juh3avddBxKK7vUsqO4FXnFqPMkF398UFnzXsg/NrJAN-wktzg.jpg?size=520x0&quality=95&sign=4bba6e89fd2d6143f0712e813af9b03d',
       price: 250,
       category: 'muslin'
    },
    {
       name: 'Муслин принт',
       img: 'https://ae04.alicdn.com/kf/S18153291e3c94af3b9617f20e67bc976k.jpg_480x480.jpg',
       price: 280,
       category: 'muslin'
    },
    {
       name: 'Муслин глиттер',
       img: 'https://tkanism.ru/pictures/product/big/8340_big.jpg',
       price: 280,
       category: 'muslin'
    },
    {
       name: 'Сатин',
       img: 'https://images.prom.ua/3457866777_w640_h640_tkan-satin-s.jpg',
       price: 180,
       category: 'cotton'
    },
    {
       name: 'Теплый хлопок',
       img: 'https://imgz.reava.ru/819560/1632835809___.jpg',
       price: 280,
       category: 'cotton'
    },
    {
       name: 'Вельсофт',
       img: 'https://tuttkani.ru/wp-content/uploads/2022/12/tkan-velsoft-wellsoft-72-300x300.jpg',
       price: 350,
       category: 'wellsoft'
    },
    {
       name: 'Минки квадрат',
       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpGLxr8FguZYc_10yN3rva-4evmKr3_xrjA&usqp=CAU',
       price: 350,
       category: 'wellsoft'
    },
    {
       name: 'Минки страйп',
       img: 'https://images.prom.ua/4212241932_w600_h600_4212241932.jpg',
       price: 350,
       category: 'wellsoft'
    },
    {
       name: 'Пупырышки',
       img: 'https://bogatyr.club/uploads/posts/2023-03/thumbs/1677921840_bogatyr-club-p-tkan-plyush-minki-foni-pinterest-14.jpg',
       price: 300,
       category: 'wellsoft'
    },
 ]
 
 const output = document.querySelector('.output')
 let category = 'all'
 
 const categoriesRender = (data) => {
    output.innerHTML = ''
    data.forEach(el => {
       const wrap = document.createElement('div')
       const image = document.createElement('img')
       const name = document.createElement('p')
       const obr = document.createElement('div')
       const price = document.createElement('p')
       const show = document.createElement('h4')
       const category = document.createElement('p')
 
 
       category.classList = "catBtn"
       wrap.classList = 'wrap'
       obr.classList = 'obr'
       show.classList = 'show'
 
       image.src = el.img
       name.textContent = el.name
       show.textContent = 'show'
 
       show.addEventListener('click', () => {
          const isVisible = category.classList.toggle('show-info')
          if (isVisible) {
             price.textContent = el.price
             category.textContent = el.category
          } else {
             price.textContent = ""
             category.textContent = ""
          }
       })
 
       obr.append(price, category)
       wrap.append(image, name, show, obr)
       output.append(wrap)
 
 
    })
 }
 
 categoriesRender(dataAlt)
 
 
 
 
 
 const categoriesChoise = ['all', 'muslin', 'cotton', 'wellsoft']
 
 const outputButtonContainer = document.querySelector('.wrap-btn')
 
 categoriesChoise.forEach(el => {
    const categoryButton = document.createElement('button')
 
    categoryButton.classList = 'category__button'
 
    categoryButton.textContent = el
    categoryButton.value = el
 
    categoryButton.addEventListener('click', () => {
       const selectedCategory = categoryButton.value
 
       if (selectedCategory === 'all') {
          categoriesRender(dataAlt)
       } else {
          const result = dataAlt.filter(item => item.category === selectedCategory)
          categoriesRender(result)
       }
    })
 
    outputButtonContainer.append(categoryButton)
 })
 
 
 
 // !
 
 const form = document.querySelector('form')
 const search = document.querySelector('.search')
 const clear = document.querySelector('.clear')
 
 form.addEventListener('submit', (e) => {
    e.preventDefault()
 
    const searchTerm = search.value.trim().toLowerCase()
 
    const searchResult = dataAlt.filter(el => {
       return el.name.toLowerCase().includes(searchTerm) && (category === el.category || category === "all")
    })
    if (searchResult.length === 0) {
       output.textContent = 'Такого товара нет'
    } else {
       categoriesRender(searchResult)
    }
 
    search.value = ''
 })
 