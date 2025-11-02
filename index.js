 function languageSwitch(){
    var englishVersion = document.getElementById("englishVersion");
    var swedishVersion = document.getElementById("swedishVersion");
    if (englishVersion.hidden) {
        englishVersion.hidden = false;
        swedishVersion.hidden = true;
    }
    else {
        englishVersion.hidden = true;
        swedishVersion.hidden = false;
    }
}
document.getElementById("englishVersion").hidden = false;
document.getElementById("swedishVersion").hidden = true;

// Popup functions for project details (e.g. Minesweeper)
function openMinesweeperPopUp() {
   document.getElementById('popUpOverlay').style.display = 'block';
   document.getElementById('minesweeperPopUp').style.display = 'block';
}
function openOverwavePopUp() {
    document.getElementById('popUpOverlay').style.display = 'block';
    document.getElementById('overwavePopUp').style.display = 'block';
}
function openThreadsPopUp() {
    document.getElementById('popUpOverlay').style.display = 'block';
    document.getElementById('threadsPopUp').style.display = 'block';
}
function openBreakoutPopUp() {
    document.getElementById('popUpOverlay').style.display = 'block';
    document.getElementById('breakoutPopUp').style.display = 'block';
}

function closePopUp() {
    // fallback to hide all popups/overlays
    document.querySelectorAll('.popUpOverlay').forEach(function(el){ el.style.display = 'none'; });
    document.querySelectorAll('.popUpContent').forEach(function(el){ el.style.display = 'none'; });
}

function openMinesweeperPopUpSwedish() {
   document.getElementById('popUpOverlaySwedish').style.display = 'block';
   document.getElementById('minesweeperPopUpSwedish').style.display = 'block';
}
function openOverwavePopUpSwedish() {
    document.getElementById('popUpOverlaySwedish').style.display = 'block';
    document.getElementById('overwavePopUpSwedish').style.display = 'block';
}
function openThreadsPopUpSwedish() {
    document.getElementById('popUpOverlaySwedish').style.display = 'block';
    document.getElementById('threadsPopUpSwedish').style.display = 'block';
}
function openBreakoutPopUpSwedish() {
    document.getElementById('popUpOverlaySwedish').style.display = 'block';
    document.getElementById('breakoutPopUpSwedish').style.display = 'block';
}

function closePopUpSwedish() {
    // reuse the same fallback so all popups close regardless of language
    document.querySelectorAll('.popUpOverlay').forEach(function(el){ el.style.display = 'none'; });
    document.querySelectorAll('.popUpContent').forEach(function(el){ el.style.display = 'none'; });
}

window.addEventListener("click", function(e) {
    if (e.target && e.target.classList && e.target.classList.contains('popUpOverlay')) {
        // closes all popups (handles duplicates/one-per-language)
        closePopUp();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePopUp();
});

function createStars() {
  const numberOfStars = 400;
  const spaceLayer = document.getElementById('spaceLayer');

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    // Random size, position, and animation duration for each star
    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    const topPosition = (Math.random() * 400) - 100; 
    star.style.top = `${topPosition}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    spaceLayer.appendChild(star);
  }
}

createStars();

window.addEventListener('scroll', () => {
    const pageScroll = window.scrollY;
    document.getElementById('spaceLayer').style.transform 
    = `translateY(${pageScroll * 0.5}px)`;
});