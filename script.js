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
        slidesPerView: 1,
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

    // --- LOGIKA BARU & AKURAT UNTUK NAVIGASI AKTIF SAAT SCROLL ---
    const navLinks = document.querySelectorAll('.navbar nav a');
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -50% 0px', // (atas, kanan, bawah, kiri)
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.navbar nav a[href="#${id}"]`);

                navLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Hanya amati section yang punya link di navigasi
        if (document.querySelector(`.navbar nav a[href="#${section.id}"]`)) {
            observer.observe(section);
        }
    });


    // --- LOGIKA UNTUK GANTI BAHASA ---
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    const translatableElements = document.querySelectorAll('[data-key]');
    const langDisplays = [document.getElementById('lang-display'), document.getElementById('lang-display-mobile')];
    
    // Kamus Terjemahan
    const translations = {
        en: {
            navAbout: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            heroTitle: "Hi, I'm <span>MUHAMMAD ARDHI FERDIANSYAH</span>",
            heroSubtitle: "Data Entry & Virtual Assistant / Admin Support",
            heroButton: "Hire Me on Upwork",
            aboutTitle: "About Me",
            aboutText: "I have an academic background in Development Economics with a strong interest in data entry, administrative tasks, and data management. I am familiar with using Microsoft Excel, Word, PowerPoint, Power BI, and Google Sheets to process and present data effectively. I am detail-oriented, organized, and committed to completing every task accurately and on time. I also have a strong willingness to learn and enjoy exploring new skills to improve my work quality.",
            servicesTitle: "My Services",
            portfolioTitle: "Portfolio",
            p1Title: "Data Cleaning",
            p1Desc: "Cleaned messy CSV data and organized it into a neat and structured table for reporting purposes. In this example, I used a global freelancer dataset and reformatted it using Microsoft Excel to make it easier to read and analyze.",
            p2Title: "PDF to Excel",
