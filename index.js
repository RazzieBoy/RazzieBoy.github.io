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
// Close when clicking any element with the overlay class
window.addEventListener("click", function(e) {
    if (e.target && e.target.classList && e.target.classList.contains('popUpOverlay')) {
        // closes all popups (handles duplicates/one-per-language)
        closePopUp();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePopUp();
});