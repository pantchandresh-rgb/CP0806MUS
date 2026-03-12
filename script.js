// Initialization
AOS.init({ once: true });

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: ".swiper-pagination" },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// Indian Artist Database
const artists = [
    { name: "Pandit Rahul Sharma", genre: "Classical", city: "Delhi", price: "15,000", rating: 5.0, img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=500&q=80" },
    { name: "The Desi Rockers", genre: "Rock", city: "Mumbai", price: "45,000", rating: 4.8, img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=500&q=80" },
    { name: "DJ Armaan Bollywood", genre: "DJ", city: "Mumbai", price: "25,000", rating: 4.9, img: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&w=500&q=80" },
    { name: "Sufi Mystics", genre: "Spiritual", city: "Delhi", price: "30,000", rating: 4.7, img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&w=500&q=80" },
    { name: "Amrit Singh (Punjabi Solo)", genre: "Regional", city: "Kolkata", price: "18,000", rating: 4.6, img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=500&q=80" },
    { name: "Vikas Flute Magic", genre: "Instrumental", city: "Bangalore", price: "12,000", rating: 5.0, img: "https://images.unsplash.com/photo-1465821185615-934289210c39?auto=format&fit=crop&w=500&q=80" }
];

// Render Function
const grid = document.getElementById('musicianGrid');

function displayArtists(data) {
    grid.innerHTML = '';
    data.forEach(artist => {
        grid.innerHTML += `
            <div class="col-md-4" data-aos="fade-up">
                <div class="card musician-card shadow-sm h-100">
                    <div class="card-img-wrapper">
                        <img src="${artist.img}" alt="${artist.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="fw-bold mb-1">${artist.name}</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-music text-orange me-2"></i>${artist.genre}</p>
                        <p class="text-muted small mb-2"><i class="fas fa-map-marker-alt text-orange me-2"></i>${artist.city}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="fw-bold text-dark">₹${artist.price}</span>
                            <span class="badge bg-warning text-dark"><i class="fas fa-star me-1"></i>${artist.rating}</span>
                        </div>
                        <button class="btn btn-dark w-100 mt-3 btn-sm">Contact Artist</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filter Function
function filterMusicians() {
    const name = document.getElementById('nameFilter').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;
    const city = document.getElementById('cityFilter').value;

    const filtered = artists.filter(a => {
        return (a.name.toLowerCase().includes(name)) &&
               (genre === "" || a.genre === genre) &&
               (city === "" || a.city === city);
    });
    displayArtists(filtered);
}

// Navbar Shadow on Scroll
window.onscroll = () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
};

// Form Submission
document.getElementById('registrationForm').onsubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully!");
    alert("Namaste! Your application has been received. Our team will review your profile and get back to you shortly.");
};

// Initial Load
displayArtists(artists);