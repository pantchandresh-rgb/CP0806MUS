/* ==========================================
INITIALIZE ANIMATIONS (AOS)
========================================== */

AOS.init({
    duration: 1000,
    once: true
});


/* ==========================================
SWIPER SLIDER INITIALIZATION
========================================== */

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});


/* ==========================================
DATABASE OF ARTISTS
========================================== */

const musicians = [

{
id:"siddharth",
name:"Siddharth Flute Medley",
genre:"Classical",
city:"Mumbai",
price:"12,000",
rating:4.9,
phone:"919876543210",
img:"https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=500&q=80"
},

{
id:"punjabirock",
name:"The Punjabi Rockstars",
genre:"Rock",
city:"Delhi-NCR",
price:"65,000",
rating:4.8,
phone:"919876543211",
img:"https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=500&q=80"
},

{
id:"sufisoul",
name:"Sufi Soul Ensemble",
genre:"Sufi",
city:"Lucknow",
price:"35,000",
rating:5.0,
phone:"919876543212",
img:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=500&q=80"
},

{
id:"djrahul",
name:"DJ Rahul Bollywood Mix",
genre:"DJ",
city:"Mumbai",
price:"20,000",
rating:4.7,
phone:"919876543213",
img:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80"
},

{
id:"ananya",
name:"Ananya Classical Vocals",
genre:"Classical",
city:"Bangalore",
price:"15,000",
rating:4.9,
phone:"919876543214",
img:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80"
},

{
id:"fusionproject",
name:"The Fusion Project",
genre:"Rock",
city:"Bangalore",
price:"50,000",
rating:4.6,
phone:"919876543215",
img:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=500&q=80"
}

];


/* ==========================================
RENDER ARTIST CARDS
========================================== */

const grid = document.getElementById("musicianGrid");

function renderCards(data){

grid.innerHTML="";

data.forEach(artist=>{

const whatsappMessage =
`Hello ${artist.name}, I found your profile on GigConnect and would like to enquire about booking you for an event.`;

const whatsappURL =
`https://wa.me/${artist.phone}?text=${encodeURIComponent(whatsappMessage)}`;

grid.innerHTML+=`

<div class="col-md-4" data-aos="fade-up">

<div class="card musician-card shadow-sm h-100">

<img src="${artist.img}" class="card-img-top" alt="${artist.name}">

<div class="card-body">

<h5 class="fw-bold">${artist.name}</h5>

<p class="text-muted small mb-1">
<i class="fas fa-music me-2"></i>${artist.genre}
</p>

<p class="text-muted small mb-3">
<i class="fas fa-map-marker-alt me-2"></i>${artist.city}
</p>

<div class="d-flex justify-content-between align-items-center">

<span class="text-orange fw-bold">
₹${artist.price}
</span>

<span class="badge bg-warning text-dark">
★ ${artist.rating}
</span>

</div>


<div class="d-flex gap-2 mt-3">

<a href="${whatsappURL}" target="_blank" class="btn btn-success btn-sm w-50">
<i class="fa-brands fa-whatsapp"></i> WhatsApp
</a>

<a href="artist.html?id=${artist.id}" class="btn btn-outline-dark btn-sm w-50">
View Profile
</a>

</div>

</div>

</div>

</div>

`;

});

}


/* ==========================================
FILTER LOGIC
========================================== */

function filterMusicians(){

const name =
document.getElementById("nameFilter").value.toLowerCase();

const genre =
document.getElementById("genreFilter").value;

const city =
document.getElementById("cityFilter").value;

const filtered = musicians.filter(m=>{

return(
m.name.toLowerCase().includes(name) &&
(genre==="" || m.genre===genre) &&
(city==="" || m.city===city)
);

});

renderCards(filtered);

}


/* ==========================================
NAVBAR SHADOW EFFECT
========================================== */

window.onscroll=()=>{

const nav=document.getElementById("mainNav");

if(window.scrollY>50)
nav.classList.add("scrolled");
else
nav.classList.remove("scrolled");

};


/* ==========================================
ARTIST REGISTRATION FORM
========================================== */

document.getElementById("registrationForm").onsubmit=(e)=>{

e.preventDefault();

alert(
"Namaste! Your registration for GigConnect India has been received. Our team will verify your talent shortly."
);

};


/* ==========================================
INITIAL PAGE LOAD
========================================== */

renderCards(musicians);