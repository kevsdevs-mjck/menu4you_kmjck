/*====================
HEADER/NAVIGATION BAR ADJUSTMENTS
====================*/
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("nav-container");
  var sched = document.getElementById("sched");

  function updateNavbarBackground() {
    if (window.scrollY > 0 && !document.body.classList.contains(".landing-page")) {
      navbar.classList.add("nav-darken");
      sched.classList.add("vanish");
    } else {
      navbar.classList.remove("nav-darken");
      sched.classList.remove("vanish");
    }
  }

  window.addEventListener("scroll", updateNavbarBackground);
});


/*====================
NAV LINK HIGHLIGHT
====================*/
linkActivate('_home');

function linkActivate(navlink) {
    const currentLink = document.querySelectorAll('.nav-link');
    currentLink.forEach(link => {
        link.classList.remove('active');
    });
    
    const selectedDetail = document.getElementById(navlink);
    if (selectedDetail) {
        selectedDetail.classList.add('active');
    }
}

/*====================
MENU SWITCHING FUNCTION
====================*/
showDetails('hot-coffee');

function showDetails(detailId,btnId) {
    const category = document.querySelectorAll('.category');
    const categoryBtn = document.querySelectorAll('.category-btn');
    category.forEach(categry => {
        categry.classList.remove('active');
    });
    categoryBtn.forEach(btn => {
        btn.classList.remove('active');
    });

    const selectedDetail = document.getElementById(detailId);
    const selectedBtn = document.getElementById(btnId);
    if (selectedDetail) {
        selectedDetail.classList.add('active');
    }
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
}

/*====================
POP UP AD FUNCTION 
====================*/
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const popupImage = document.getElementById('popup-image');
    const images = [
        'asset/img/ad_1.jpeg',
        'asset/img/ad_2.jpeg',
        'asset/img/ad_3.gif',
        'asset/img/ad_4.gif'
    ];
    let showPopup = true;

    function togglePopup() {
        if (showPopup) {
            const randomIndex = Math.floor(Math.random() * images.length);
            popupImage.src = images[randomIndex];
            popup.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
        showPopup = !showPopup;
    }

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        showPopup = false;
    });

    overlay.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        showPopup = false;
    });

    setInterval(togglePopup, 15000);
});
/*====================
SECRET EGG
====================*/
const Mark = [
    'asset/team/Mark.png',
    'asset/team/Mark2.jpg'
];
const randomImg = Math.floor(Math.random() * Mark.length);
let markImg = document.getElementById('mark-js');
markImg.src = Mark[randomImg];
