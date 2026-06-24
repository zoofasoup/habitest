document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 60), { passive: true });
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('in'), (i % 6) * 80);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: .1 });

    document.querySelectorAll('.up').forEach(el => obs.observe(el));

    // Expose faq function globally so inline onclick works
    window.faq = function(b) {
        const a = b.nextElementSibling;
        const ic = b.querySelector('.fi-ico');
        const o = a.classList.contains('open');
        document.querySelectorAll('.fa').forEach(x => x.classList.remove('open'));
        document.querySelectorAll('.fi-ico').forEach(x => x.classList.remove('open'));
        if (!o) {
            a.classList.add('open');
            if (ic) ic.classList.add('open');
        }
    };

    const pe = document.getElementById('promoEnd');
    if (pe) {
        const d = new Date();
        d.setDate(d.getDate() + 3);
        const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        const mo = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
        pe.textContent = days[d.getDay()] + ', ' + d.getDate() + ' ' + mo[d.getMonth()];
    }

    let st = 47;
    setInterval(() => {
        if (Math.random() < .12 && st > 30) {
            st--;
            const el = document.getElementById('stockNum');
            if (el) el.textContent = st;
        }
    }, 9000);

    // Initialize Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper(".mySwiper", {
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            grabCursor: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.tn-next',
                prevEl: '.tn-prev',
            }
        });
    }
});
