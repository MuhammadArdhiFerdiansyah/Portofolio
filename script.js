document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK HAMBURGER MENU & SIDEBAR ---
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarLinks = document.querySelectorAll('.mobile-sidebar .mobile-nav a');

    const toggleSidebar = () => {
        document.body.classList.toggle('sidebar-open');
    };

    hamburger.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
    sidebarLinks.forEach(link => {
        link.addEventListener('click', toggleSidebar);
    });

    // --- LOGIKA UNTUK SLIDER PORTFOLIO (SWIPER.JS) ---
    const swiper = new Swiper('.portfolio-slider', {
        slidesPerView: 'auto', // Diubah agar lebar slide ditentukan CSS
        centeredSlides: true, // Membuat slide aktif selalu di tengah
        spaceBetween: 30,
        loop: false,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- LOGIKA UNTUK NAVIGASI AKTIF SAAT SCROLL ---
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Update link di kedua navigasi (desktop & mobile)
                document.querySelectorAll(`nav a[href="#${id}"]`).forEach(activeLink => {
                    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                    if(activeLink) activeLink.classList.add('active');
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (document.querySelector(`nav a[href="#${section.id}"]`)) {
            observer.observe(section);
        }
    });


    // --- LOGIKA UNTUK GANTI BAHASA ---
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    const translatableElements = document.querySelectorAll('[data-key]');
    
    const translations = {
        // ... Kamus terjemahan Anda di sini ... (tidak berubah)
    };

    const setLanguage = (lang) => {
        // ... Logika setLanguage Anda di sini ... (tidak berubah)
    };

    langSwitchers.forEach(switcher => {
        // ... Logika langSwitchers Anda di sini ... (tidak berubah)
    });

    window.addEventListener('click', () => {
        // ... Logika window click Anda di sini ... (tidak berubah)
    });

    let userLang = localStorage.getItem('lang');
    if (!userLang) {
        const browserLang = navigator.language.slice(0, 2);
        userLang = (browserLang === 'id') ? 'id' : 'en';
    }
    setLanguage(userLang);
});
