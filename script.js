platformLinkDisplay = document.getElementById("platformLinkDisplay");

function show_platform(platform) {
    switch (platform) {
        case "themesjs":
            platformLinkDisplay.innerText = "https://use.themesjs.de/releases/latest/themesjs.min.js";
            break;
        case "download":
            window.open("https://use.themesjs.de/releases/latest/themesjs.min.js", "_blank");
            break;
        case "jsdelivr":
            platformLinkDisplay.innerText = "https://cdn.jsdelivr.net/gh/themes-js/themes.js/themes.min.js";
            break;
    }
}

function copyPlatformLink() {
    navigator.clipboard.writeText(document.getElementById('platformLinkDisplay').innerText);
    document.querySelectorAll(".platformLink>*").forEach((element) => {
        element.style.backgroundColor = "#888";
        window.setTimeout(() => element.style.backgroundColor = "var(--slide_platforms_bg-color)", 250);
    });
}

window.setTimeout(() => document.getElementById("platformLink").style.width = document.getElementById("platformContainer").offsetWidth + "px", 1000);

// Catchphrases
const catchphrases = [
    'The <span class="background-accent">only library</span> you will ever need to theme your Websites and Apps.',
    '<span class="background-accent">Theme management</span> made easy!',
    'The <span class="background-accent">best</span> way to theme your Website.',
    'The <span class="background-accent">best</span> way to theme your App.'
];
var currentCatchphrase = 0;
const catchphrase = document.getElementById("catchphrase");

window.setInterval(() => {
    // Get a random catchphrase that is not the current one
    while (true) {
        var randomCatchphrase = Math.floor(Math.random() * catchphrases.length);
        if (randomCatchphrase != currentCatchphrase) break;
    }
    currentCatchphrase = randomCatchphrase;
    // Fade out the current catchphrase
    catchphrase.style.opacity = 0;
    window.setTimeout(() => {
        // Change the text
        catchphrase.innerHTML = catchphrases[currentCatchphrase];
        // Fade in the new catchphrase
        catchphrase.style.opacity = 1;
    }, 1000);

}, 15000);

function setCatchphraseHeight() {
    catchphrase.innerHTML = catchphrases.reduce((a, b) => a.length > b.length ? a : b);
    catchphrase.style.height = catchphrase.offsetHeight + "px";
    catchphrase.innerHTML = catchphrases[currentCatchphrase];
}
window.setTimeout(setCatchphraseHeight, 10);