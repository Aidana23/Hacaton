
const wrap = document.querySelector('.wrap2');
const h2 = document.createElement('h2');
h2.classList='title'
h2.textContent = 'Оставьте заявку' ;



const p = document.createElement('p');
p.classList='subTitle'
// p.textContent='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';



const parentInp = document.createElement("div");
parentInp.classList='parentInp'

const inp1 = document.createElement('input')
inp1.placeholder= 'Ваше имя'
inp1.classList= 'input'
const inp2 = document.createElement('input')
inp2.placeholder= 'Ваш e-mail'
inp2.classList= 'input'


const textArea = document.createElement('textarea')
textArea.classList = 'textArea'
textArea.placeholder = 'Сообщение'


const btn = document.createElement('button')
btn.classList = 'btn'
btn.textContent = 'Отправить'

parentInp.append(inp1,inp2)
wrap.append(h2 , p, parentInp, textArea, btn )