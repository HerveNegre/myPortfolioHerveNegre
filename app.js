const btnMenu      = document.querySelector('.btn-menu');
const nav          = document.querySelector('.sidebar');
const itemsSideBar = document.querySelectorAll('.nav-menu-item');
const line         = document.querySelector('.cont-line');

btnMenu.addEventListener('click', () => {
    line.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300px)')) {
    itemsSideBar.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            line.classList.toggle('active');
        })
    })
}

//Animation écriture
const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim,  {
    loop: true,
    deleteSpeed: 20
})

typewriter
.pauseFor(700)
.changeDelay(20)
.typeString('Hervé Negre,')
.pauseFor(700)
.typeString('<strong> Développeur Front-end</strong> !')
.pauseFor(1500)
.deleteChars(12)
.typeString('<span style="color: #49D8FF;"> React</span> !')
.pauseFor(1900)
.deleteChars(7)
.typeString('<span style="color: #BF0027;"> NextJS</span> !')
.pauseFor(1900)
.deleteChars(8)
.typeString('<span style="color: #4AB199;"> React Native</span> !')
.pauseFor(1900)
.deleteChars(14)
.typeString('<span style="color: #553BAD;"> PHP</span> !')
.pauseFor(1900)
.deleteChars(5)
.typeString('<span style="color: #FF8A3A;"> Laravel</span> !')
.pauseFor(1900)
.start()

// Animation contact
const inputFields = document.querySelectorAll('input');

for (let i = 0; i < inputFields.length; i++) {
    
    let field = inputFields[i];

    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        }
        else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation')
        }
    });
}

//======================Animation Gsap & ScrollMagic=======================

//SideBar & Accueil
const sidebar       = document.querySelector('.sidebar');
const title         = document.querySelector('h1');
const btnHome1      = document.querySelector('.btn-home1');
const btnHome2      = document.querySelector('.btn-home2');
const btnMedias     = document.querySelector('.medias');
const btnFlecheHome = document.querySelector('.btn-rond');
const timeLine1     = gsap.timeline({paused: true});

timeLine1
.to(sidebar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(title, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btnHome1, 1, {opacity: 0}, 0.2, '-=0.11')
.staggerFrom(btnHome2, 1, {opacity: 0}, 0.2, '-=0.10')
.staggerFrom(btnMedias, 2.4, {opacity: 0}, 5.2, '-=0.75')
.from(btnFlecheHome, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1.3')

window.addEventListener('load', () => {
    timeLine1.play();
})

//Presentation
const presentationContainer = document.querySelector('.presentation');
const titlePresentation     = document.querySelector('.titre-presentation');
const timeLinePresentation  = new TimelineMax();
const PresentationGauche    = document.querySelector('.pres-gauche');
const listePresentation     = document.querySelectorAll('.item-liste');

timeLinePresentation
.from(titlePresentation, {y: -200, opacity: 0, duration: 0.6})
.from(PresentationGauche, {x: -500, opacity: 0, duration: 1.5}, '-=0.5')
.staggerFrom(listePresentation, 1, {x: 500, opacity: 0}, 0.6, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(timeLinePresentation)
// .addIndicators()
.addTo(controller);

//Portfolio
const portfolioContainer = document.querySelector('.portfolio');
const titlePortfolio     = document.querySelector('.titre-portfolio');
const itemPortfolio      = document.querySelectorAll('.vague1');

const timeLinePortfolio = new TimelineMax();

timeLinePortfolio
.from(titlePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 3.3, {opacity: -0.5}, 0.2)

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(timeLinePortfolio)
.addTo(controller);

//Compétences
const competences      = document.querySelectorAll('.competences');
const titleCompetences = document.querySelector('.titre-competences');
const allLabels        = document.querySelectorAll('.label-skill');
const allPourcent      = document.querySelectorAll('.number-skill');
const allBarres        = document.querySelectorAll('.barre-skill');
const allBarresGrises  = document.querySelectorAll('.barre-grises');

const timeLineCompetences = new TimelineMax();

timeLineCompetences
.from(titleCompetences, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(allLabels, 1.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allBarresGrises, 0.5, {y: -10, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allPourcent, 3, {y: -40, opacity: 0}, 0.1, '-=1')

const scene3 = new ScrollMagic.Scene({
    triggerElement: competences,
    reverse: false
})
.setTween(timeLineCompetences)
.addTo(controller);
