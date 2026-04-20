// Дані про послуги
const myServices = [
    { title: "Бізнес-ланч", price: "220 грн", info: "Суп, салат та основна страва." },
    { title: "Банкетне обслуговування", price: "від 950 грн", info: "Повне меню для ваших свят." },
    { title: "Доставка страв", price: "Безкоштовно", info: "При замовленні від 500 грн." },
    { title: "Десертна карта", price: "від 90 грн", info: "Фірмові солодощі від шефа." }
];

// Перемикання сторінок
function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Виведення списку послуг
function loadServices() {
    const list = document.getElementById('services-list');
    list.innerHTML = myServices.map(item => `
        <div class="service-item">
            <h3>${item.title}</h3>
            <p>${item.info}</p>
            <p class="price">${item.price}</p>
        </div>
    `).join('');
}

// Обробка форми
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const msg = document.getElementById('formResponse');
    
    msg.innerText = "Дякуємо, " + name + "! Ми отримали ваше повідомлення.";
    msg.style.display = "block";
    this.reset();
};

// Запуск при відкритті
window.onload = loadServices;