// Initialize AOS Animations
AOS.init({
    duration: 800,
    once: true
});

// Sample Musician Data
const musicians = [
    { id: 1, name: "The Midnight Echo", genre: "Rock", city: "New York", price: 500, rating: 4.8, img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Luna Jazz Trio", genre: "Jazz", city: "Chicago", price: 350, rating: 4.9, img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "DJ Spark", genre: "Electronic", city: "Los Angeles", price: 600, rating: 4.7, img: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Symphony Strings", genre: "Classical", city: "New York", price: 800, rating: 5.0, img: "https://images.unsplash.com/photo-1465821185615-934289210c39?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Velvet Pop", genre: "Pop", city: "Austin", price: 400, rating: 4.6, img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Neon Nights", genre: "Electronic", city: "Chicago", price: 550, rating: 4.8, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" }
];

// Swiper Initialization
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        768: { slidesPerView: 2 }
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Dynamic Card Rendering
const musicianGrid = document.getElementById('musicianGrid');

function renderMusicians(data) {
    musicianGrid.innerHTML = '';
    data.forEach(m => {
        const card = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="card musician-card shadow-sm h-100">
                    <div class="card-img-container">
                        <img src="${m.img}" class="card-img-top" alt="${m.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${m.name}</h5>
                        <p class="text-muted mb-1"><i class="fas fa-music me-2"></i>${m.genre}</p>
                        <p class="text-muted mb-1"><i class="fas fa-map-marker-alt me-2"></i>${m.city}</p>
                        <p class="fw-bold text-orange mb-3">Starting at $${m.price}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-warning text-dark"><i class="fas fa-star me-1"></i>${m.rating}</span>
                            <button class="btn btn-sm btn-outline-dark">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        musicianGrid.innerHTML += card;
    });
}

// Search & Filter Logic
function filterMusicians() {
    const nameVal = document.getElementById('nameFilter').value.toLowerCase();
    const genreVal = document.getElementById('genreFilter').value;
    const cityVal = document.getElementById('cityFilter').value;

    const filtered = musicians.filter(m => {
        return (m.name.toLowerCase().includes(nameVal)) &&
               (genreVal === "" || m.genre === genreVal) &&
               (cityVal === "" || m.city === cityVal);
    });
    renderMusicians(filtered);
}

document.getElementById('nameFilter').addEventListener('input', filterMusicians);
document.getElementById('genreFilter').addEventListener('change', filterMusicians);
document.getElementById('cityFilter').addEventListener('change', filterMusicians);

// Initial Load
renderMusicians(musicians);

// Form Submission Simulation
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        genre: document.getElementById('regGenre').value,
        price: document.getElementById('regPrice').value,
        bio: document.getElementById('regBio').value
    };

    console.log("New Registration Data:", formData);
    alert("Success! Your profile has been sent for review. We will contact you soon.");
    this.reset();
});

// Smooth Scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});