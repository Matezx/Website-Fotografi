//Nav Scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0 );
})


//CONTACTO BOTON CIRCULAR 
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons =>{
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 14}deg)
    ">${character}</span>`).join('')
})

/*=============== Nav links despegable movil ===============*/

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024){
nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
})
}
/*=============== SWIPER ===============*/ 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints:{
            599: {
                sliderPerView: 3,
                spaceBetween: 40
            },
            1023:{
                sliderPerView: 3,
                spaceBetween: 60
            }
        }
    });


/*=============== SHOW SCROLL UP ===============*/ 

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)




/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
    sr.reveal(`.header__container, .footer__container, .swiper-wrapper`)
    sr.reveal(`.exhibitions__gallery`, {delay: 700,origin: 'bottom'})
    sr.reveal(`.about__left` , {interval: 100})
    sr.reveal(`.header__btn, .header__left, .galllery__title` , {origin: 'left'})
    sr.reveal(`.header__frame, .header__right, .about__right, .about__right-p` , {origin: 'right'})



/*===================== EMAIL JS =========================*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message'),
contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()


    if(contactUser.value === ''){

        //Agregar y Remover Color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //Mostrar Mensaje
        contactMessage.textContent = 'Ingrese un correo electronico'
    
        //Remover el mensaje en tres Segundos
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)

    } else{

        emailjs.sendForm('service_tjyxasl', 'template_m95zjuc', '#contact-form', 'jyU3GjTmSuNTUFSGb')
        .then(() =>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'Registro con exito'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000)

        }, (error) =>{
            //Alerta de Error
            alert('OOPS! Algo Salio Mal...', error)
        })

        //Limpiar el input
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)
