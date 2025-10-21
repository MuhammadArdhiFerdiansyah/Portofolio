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
                document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                
                const activeLinks = document.querySelectorAll(`nav a[href="#${id}"]`);
                activeLinks.forEach(activeLink => {
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
    const langDisplays = [document.getElementById('lang-display'), document.getElementById('lang-display-mobile')];
    
    // Kamus Terjemahan
    const translations = {
        en: {
            navAbout: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            navLanguage: "Language",
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
            p2Desc: "Converted and structured data from PDF files into Excel with accuracy and consistency. This project uses IMF data (Global Economy: Tenuous Resilience amid Persistent Uncertainty). I extracted the data using Microsoft Power BI, then organized it in Excel for clearer presentation and analysis.",
            p3Title: "Web Research",
            p3Desc: "Collected company information from various online sources, including websites, social media, email, and phone numbers. In this example, I researched 15 cafés in Jakarta, Indonesia, and compiled their details such as name, address, Instagram account, Google Maps link, and café type into an Excel sheet.",
            p4Title: "Weekly Report",
            p4Desc: "Created a weekly report template to help companies monitor project progress. This example uses fictional data, with a report format I designed myself to display weekly activities and status updates in an organized way.",
            p5Title: "Organized Schedule",
            p5Desc: "Managed and arranged meeting schedules for company or client activities. This example uses a fictional client meeting schedule that I structured in a calendar-style format — suitable for administrative or virtual assistant roles.",
            p6Title: "Data Categorizing / Tagging",
            p6Desc: "Classified product data and added relevant tags for easier analysis and organization. In this project, I used 200 product entries from an Amazon store and assigned each item with appropriate categories and tags for better data grouping.",
            p7Title: "Data Crosscheck",
            p7Desc: "Verified and compared data across multiple datasets to ensure accuracy and consistency. In this example, I compared movie lists from IMDb for the years 2023 and 2024 to identify duplicates and differences using Excel formulas such as VLOOKUP and COUNTIF.",
            p8Title: "See More",
            p8Desc: "All of the portfolios earlier are just examples, and I can customize them based on the client’s needs. If you’d like to see my portfolio in more detail, please visit the link below.",
            p8Button: "Google Drive",
            testimonialsTitle: "Testimonials",
            testimonialsText: '"I am currently building my professional experience and open to collaborating with my first clients. I’m committed to delivering the best results and truly appreciate any feedback or testimonials given."',
            contactTitle: "Contact Me",
            contactText: "I'm open to discussing new projects and opportunities. Feel free to reach out!",
            contactEmail: "Email"
        },
        id: {
            navAbout: "Tentang",
            navServices: "Layanan",
            navPortfolio: "Portofolio",
            navContact: "Kontak",
            navLanguage: "Bahasa",
            heroTitle: "Hai, saya <span>MUHAMMAD ARDHI FERDIANSYAH</span>",
            heroSubtitle: "Entri Data & Asisten Virtual / Dukungan Admin",
            heroButton: "Rekrut Saya di Upwork",
            aboutTitle: "Tentang Saya",
            aboutText: "Saya memiliki latar belakang akademis di bidang Ekonomi Pembangunan dengan minat kuat pada entri data, tugas administratif, dan manajemen data. Saya terbiasa menggunakan Microsoft Excel, Word, PowerPoint, Power BI, dan Google Sheets untuk memproses dan menyajikan data secara efektif. Saya berorientasi pada detail, terorganisir, dan berkomitmen untuk menyelesaikan setiap tugas secara akurat dan tepat waktu. Saya juga memiliki kemauan belajar yang kuat dan senang mengeksplorasi keterampilan baru untuk meningkatkan kualitas kerja saya.",
            servicesTitle: "Layanan Saya",
            portfolioTitle: "Portofolio",
            p1Title: "Pembersihan Data",
            p1Desc: "Membersihkan data CSV yang berantakan dan mengaturnya ke dalam tabel yang rapi dan terstruktur untuk keperluan pelaporan. Dalam contoh ini, saya menggunakan dataset freelancer global dan memformatnya kembali menggunakan Microsoft Excel agar lebih mudah dibaca dan dianalisis.",
            p2Title: "PDF ke Excel",
            p2Desc: "Mengubah dan menyusun data dari file PDF ke dalam Excel dengan akurasi dan konsistensi. Proyek ini menggunakan data IMF (Ekonomi Global: Ketahanan Tipis di Tengah Ketidakpastian yang Berkelanjutan). Saya mengekstrak data menggunakan Microsoft Power BI, lalu mengaturnya di Excel untuk presentasi dan analisis yang lebih jelas.",
            p3Title: "Riset Web",
            p3Desc: "Mengumpulkan informasi perusahaan dari berbagai sumber online, termasuk situs web, media sosial, email, dan nomor telepon. Dalam contoh ini, saya meneliti 15 kafe di Jakarta, Indonesia, dan menyusun detail mereka seperti nama, alamat, akun Instagram, tautan Google Maps, dan jenis kafe ke dalam lembar Excel.",
            p4Title: "Laporan Mingguan",
            p4Desc: "Membuat templat laporan mingguan untuk membantu perusahaan memantau kemajuan proyek. Contoh ini menggunakan data fiktif, dengan format laporan yang saya rancang sendiri untuk menampilkan aktivitas mingguan dan pembaruan status secara terorganisir.",
            p5Title: "Jadwal Terorganisir",
            p5Desc: "Mengelola dan mengatur jadwal pertemuan untuk kegiatan perusahaan atau klien. Contoh ini menggunakan jadwal pertemuan klien fiktif yang saya susun dalam format gaya kalender — cocok untuk peran administratif atau asisten virtual.",
            p6Title: "Kategorisasi / Penandaan Data",
            p6Desc: "Mengklasifikasikan data produk dan menambahkan tag yang relevan untuk analisis dan organisasi yang lebih mudah. Dalam proyek ini, saya menggunakan 200 entri produk dari toko Amazon dan memberikan setiap item kategori dan tag yang sesuai untuk pengelompokan data yang lebih baik.",
            p7Title: "Pengecekan Silang Data",
            p7Desc: "Memverifikasi dan membandingkan data di beberapa dataset untuk memastikan akurasi dan konsistensi. Dalam contoh ini, saya membandingkan daftar film dari IMDb untuk tahun 2023 dan 2024 untuk mengidentifikasi duplikat dan perbedaan menggunakan rumus Excel seperti VLOOKUP dan COUNTIF.",
            p8Title: "Lihat Lebih Banyak",
            p8Desc: "Semua portofolio sebelumnya hanyalah contoh, dan saya dapat menyesuaikannya berdasarkan kebutuhan klien. Jika Anda ingin melihat portofolio saya lebih detail, silakan kunjungi tautan di bawah ini.",
            p8Button: "Google Drive",
            testimonialsTitle: "Testimoni",
            testimonialsText: '"Saat ini saya sedang membangun pengalaman profesional dan terbuka untuk berkolaborasi dengan klien pertama saya. Saya berkomitmen untuk memberikan hasil terbaik dan sangat menghargai setiap masukan atau testimoni yang diberikan."',
            contactTitle: "Hubungi Saya",
            contactText: "Saya terbuka untuk mendiskusikan proyek dan peluang baru. Jangan ragu untuk menghubungi!",
            contactEmail: "Email"
        }
    };

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        langDisplays.forEach(display => {
            if (display) {
                display.textContent = lang.toUpperCase();
            }
        });

        langSwitchers.forEach(switcher => {
            const optionButtons = switcher.querySelectorAll('.lang-dropdown button');
            optionButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });
        });

        localStorage.setItem('lang', lang);
    };

    langSwitchers.forEach(switcher => {
        const menuButton = switcher.querySelector('.lang-menu-button');
        const optionButtons = switcher.querySelectorAll('.lang-dropdown button');

        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitchers.forEach(s => {
                if (s !== switcher) s.classList.remove('open');
            });
            switcher.classList.toggle('open');
        });

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                setLanguage(button.dataset.lang);
                langSwitchers.forEach(s => s.classList.remove('open'));
            });
        });
    });

    window.addEventListener('click', () => {
        langSwitchers.forEach(s => s.classList.remove('open'));
    });

    let userLang = localStorage.getItem('lang');
    if (!userLang) {
        const browserLang = navigator.language.slice(0, 2);
        userLang = (browserLang === 'id') ? 'id' : 'en';
    }
    setLanguage(userLang);
});


