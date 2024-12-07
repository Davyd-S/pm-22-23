window.addEventListener('load', () => {
    // Вибираємо всі елементи на сторінці
    const elements = document.querySelectorAll('*');

    // Додаємо клас 'visible' до кожного елемента для анімації
    elements.forEach((element) => {
        element.classList.add('visible');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll('.text-bar');
    const barWidths = [0.7, 0.6, 0.9, 0.6, 0.8, 0.6]; // Масив для ширини оранжевого бару

    // Функція для перевірки видимості елементів
    const checkVisibility = () => {
        bars.forEach((bar, index) => {
            const rect = bar.getBoundingClientRect();
            const barOnBar = bar.querySelector('.bar-on-bar');
            const barBase = bar.querySelector('.bar'); // Сірий бар

            // Якщо елемент знаходиться в межах видимості екрану
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // Анімація для сірого бару (збільшення ширини з 0 до 167px)
                barBase.style.transition = `width 1s ease-in-out`;
                barBase.style.width = `167px`;

                // Анімація для оранжевого бару
                const width = barWidths[index] * 167; // Розраховуємо ширину для оранжевого бару
                barOnBar.style.transition = 'width 1s ease-in-out';
                barOnBar.style.width = `${width}px`; // Застосовуємо ширину для оранжевого бару
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Перевірка видимості при завантаженні сторінки
});


document.addEventListener('DOMContentLoaded', () => {
    // Функція для анімації діаграм
    function animateDiagram(diagram) {
        const percent = parseInt(diagram.getAttribute('data-percent'));
        let startAngle = 0;
        let endAngle = (percent / 100) * 360;

        let angle = startAngle;
        const interval = setInterval(() => {
            angle += 3; // Крок збільшення кута
            if (angle >= endAngle) {
                clearInterval(interval);
                angle = endAngle;
            }
            diagram.style.background = `conic-gradient(#ff6d03 ${angle}deg, lightgray 0)`;
        }, 10);
    }

    // Спостереження за появою елементів
    const diagrams = document.querySelectorAll('.diagram');
    const options = {
        rootMargin: '0px',
        threshold: 0.5 // Поріг видимості 50%
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateDiagram(entry.target); // Запуск анімації при появі елемента
                observer.unobserve(entry.target); // Зупинка спостереження після анімації
            }
        });
    }, options);

    diagrams.forEach(diagram => {
        observer.observe(diagram); // Спостереження за кожною діаграмою
    });
});

// Знаходимо всі заголовки з класом "toggle-header"
const headers = document.querySelectorAll('.toggle-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        // Знаходимо наступний елемент після заголовка
        const content = header.nextElementSibling;

        // Перемикаємо видимість вмісту
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Показати вміст
        } else {
            content.style.display = 'none'; // Сховати вміст
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Завантаження даних через Fetch API
    async function loadDataWithFetch() {
        try {
            const response = await fetch("/data/data.json");
            if (!response.ok) throw new Error("Failed to load data");
            const data = await response.json();
            renderEducation(data.education);
            renderWork(data.work);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    // Функція для рендерингу секції освіти
    function renderEducation(education) {
        const section = document.getElementById("education-section");
        section.innerHTML = ""; // Очищення секції перед додаванням нового контенту
        education.forEach((item) => {
            section.innerHTML += `
                <div class="education-item section-title-2 visible">
                    <p class="sub-paragraph visible" style="margin-top: 100px">${item.major}</p>
                    <div class="under-sub-par visible">
                        <p class="Name-paragraph visible">${item.university}</p>
                        <p class="time-paragraph visible">${item.years}</p>
                    </div>
                    <p class="par visible">${item.paragraph}</p>
                </div>`;
        });
    }

    function renderWork(work) {
        const section = document.getElementById("work-section");
        section.innerHTML = ""; // Очищення секції перед додаванням нового контенту

        work.forEach((item) => {
            section.innerHTML += `
            <div class="section-title-2 visible">
                <div class="sub-paragraph visible" style="margin-top: 90px;">
                    <p class="sub-paragraph visible">${item.mayor}</p>
                    <p class="time2-paragraph visible">${item.year}</p>
                </div>
                <p class="Name-paragraph2 visible">${item['company-name']}</p>
                <p class="par visible">${item.paragraph}</p>
            </div>`;
        });
    }

    // Виклик функції завантаження даних
    loadDataWithFetch();

});
