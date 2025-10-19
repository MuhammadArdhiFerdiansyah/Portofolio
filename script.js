document.addEventListener('DOMContentLoaded', () => {

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

    // --- LOGIKA UNTUK NAVIGASI AKTIF SAAT SCROLL (DIPERBAIKI LAGI) ---
    const navLinks = document.querySelectorAll('.navbar nav a');
    
    const sections = Array.from(navLinks).map(link => {
        const id = link.getAttribute('href');
        return document.querySelector(id);
    }).filter(section => section !== null);

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - (sectionHeight / 2) ) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // --- PERBAIKAN KHUSUS UNTUK SECTION TERAKHIR (CONTACT) ---
        // Cek jika pengguna sudah scroll sampai paling bawah halaman
        const scrollAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
        
        if (scrollAtBottom) {
            // Jika ya, paksa section aktif menjadi yang terakhir
            currentSectionId = sections[sections.length - 1].getAttribute('id');
        }
        // -----------------------------------------------------------

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + currentSectionId) {
                a.classList.add('active');
            }
        });
    });


    // --- LOGIKA UNTUK GANTI BAHASA ---
    const langSwitcher = document.querySelector('.lang-switcher');
    const langMenuButton = document.querySelector('.lang-menu-button');
    const langOptionButtons = document.querySelectorAll('.lang-dropdown button');
    const translatableElements = document.querySelectorAll('[data-key]');
    
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
            p8Desc: "All the portfolios above are examples, and I can adjust them based on the client’s requirements. If you would like to see my portfolio in more detail, please visit the link below.",
            p8Button: "Open Google Drive",
            testimonialsTitle: "Testimonials",
            testimonialsText: '"I am currently building my professional experience and open to collaborating with my first clients. I’m committed to delivering the best results and truly appreciate any feedback or testimonials given."',
            contactTitle: "Contact Me",
            contactText: "I'm open to discussing new projects and opportunities. Feel free to reach out!",
            contactEmail: "Email Me"
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
            p8Desc: "Semua portofolio di atas adalah contoh, dan saya dapat menyesuaikannya berdasarkan kebutuhan klien. Jika Anda ingin melihat portofolio saya lebih detail, silakan kunjungi tautan di bawah ini.",
            p8Button: "Buka Google Drive",
            testimonialsTitle: "Testimoni",
            testimonialsText: '"Saat ini saya sedang membangun pengalaman profesional dan terbuka untuk berkolaborasi dengan klien pertama saya. Saya berkomitmen untuk memberikan hasil terbaik dan sangat menghargai setiap masukan atau testimoni yang diberikan."',
            contactTitle: "Hubungi Saya",
            contactText: "Saya terbuka untuk mendiskusikan proyek dan peluang baru. Jangan ragu untuk menghubungi!",
            contactEmail: "Email Saya"
        }
    };

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('lang', lang);
    };

    langMenuButton.addEventListener('click', () => {
        langSwitcher.classList.toggle('open');
    });

    langOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
            langSwitcher.classList.remove('open');
        });
    });

    window.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });

    let userLang = localStorage.getItem('lang');
    if (!userLang) {
        const browserLang = navigator.language.slice(0, 2);
        userLang = (browserLang === 'id') ? 'id' : 'en';
    }
    setLanguage(userLang);

});