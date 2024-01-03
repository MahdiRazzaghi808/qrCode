
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.content').style.display = 'block'
        document.querySelector('.loader-wrapper').style.display = 'none'
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });

        var swiper = new Swiper(".mySwiper", {
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }, 1500)
})


const cards = document.querySelectorAll('.card');
cards.forEach(v => {
    v.addEventListener('click', () => {
        window.location = `${v.dataset.href}.html`
    })
})







