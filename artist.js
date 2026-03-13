/* =====================================
GET ARTIST FROM URL
===================================== */

const params = new URLSearchParams(window.location.search);

const artistID = params.get("id");


/* =====================================
SAMPLE ARTIST DATABASE
===================================== */

const artists = {

rahul:{

name:"Rahul Sharma",

genre:"Classical",

city:"Delhi",

price:"₹15000",

phone:"919876543210",

bio:"International Sitar maestro performing across India and abroad.",

image:"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"

},

sufi:{

name:"Sufi Souls",

genre:"Sufi Band",

city:"Lucknow",

price:"₹25000",

phone:"919876543211",

bio:"Soulful Sufi band perfect for weddings and mehfil nights.",

image:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"

},

djaryan:{

name:"DJ Aryan",

genre:"Bollywood DJ",

city:"Mumbai",

price:"₹20000",

phone:"919876543212",

bio:"High energy Bollywood and EDM DJ for parties and festivals.",

image:"https://images.unsplash.com/photo-1497032205916-ac775f0649ae"

}

};


/* =====================================
LOAD ARTIST PROFILE
===================================== */

const artist = artists[artistID];

if(artist){

document.getElementById("artistName").innerText = artist.name;

document.getElementById("artistMeta").innerText =
artist.genre + " | " + artist.city;

document.getElementById("artistBio").innerText = artist.bio;

document.getElementById("artistPrice").innerText = artist.price;

document.getElementById("artistImage").src = artist.image;

const message =
`Hello ${artist.name}, I found you on GigConnect and want to enquire about booking you.`;

const whatsappURL =
`https://wa.me/${artist.phone}?text=${encodeURIComponent(message)}`;

document.getElementById("whatsappBtn").href = whatsappURL;

}