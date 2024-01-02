const mDate = () => {
    const date = new Date();

    const daysOfWeek = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
    const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    const dayOfWeek = daysOfWeek[date.getDay()];

    const configs = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    const toDay = date.toLocaleDateString('fa-IR', configs)

    const [year, month, day] = toDay.split('/');

    const formattedMonth = months[persianToEnglishNumber(month) - 1];
    const formattedDay = day.toString().padStart(2, '0');

    return `${dayOfWeek} ${formattedDay} ${formattedMonth} ${year}`;
}

function persianToEnglishNumber(persianNumber) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

    const englishNumber = persianNumber.replace(/[۰-۹]/g, function (digit) {
        return persianDigits.indexOf(digit);
    });

    return englishNumber;
}




const date = document.querySelector('#date')
window.addEventListener('load', () => {
    date.innerText = mDate();

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
    }, 2500)
})





