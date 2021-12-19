const bottomNavigationElement = document.querySelector(".page__bottom-navigation");
const bottomNavigationClass = "page__bottom-navigation--hidden";

const windowWidthTimeoutDelay = 250;
let windowWidthTimeout = false;

const windowScrollTimeoutDelay = 250;
let windowScrollTimeout = false;
let windowScrollIsWatched = false;
let lastScrollPosition = window.scrollY;
let lastScrollDirection = "up";


export function handleBottomNavigation() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    if (isMobile) window.addEventListener("DOMContentLoaded", watchWindowScroll);
    window.addEventListener("resize", handleWindowWidthWithDebounce);
}

function watchWindowScroll() {
    console.info("Scroll is now watched");
    window.addEventListener("scroll", handleWindowScrollWithDebounce);
    windowScrollIsWatched = true;
}

function handleWindowScrollWithDebounce() {
    if (windowScrollTimeout) clearTimeout(windowScrollTimeout);
    setTimeout(handleWindowScroll, windowScrollTimeoutDelay);
}

function handleWindowWidthWithDebounce() {
    if (windowWidthTimeout) clearTimeout(handleWindowWidth);
    setTimeout(handleWindowWidth, windowWidthTimeoutDelay);
}

function handleWindowWidth() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    if (isMobile && !windowScrollIsWatched) {
        watchWindowScroll();
    } else if (!isMobile && windowScrollIsWatched) {
        console.info("Scroll is not watched anymore");
        window.removeEventListener("scroll", handleWindowScrollWithDebounce);
        windowScrollIsWatched = false;
    }
}

function handleWindowScroll() {
    const scrollPosition = window.scrollY;
    if (lastScrollPosition < scrollPosition && lastScrollDirection === "up") {
        bottomNavigationElement.classList.add(bottomNavigationClass);
        lastScrollDirection = "down";
        console.info("User is scrolling down");
    } else if (lastScrollPosition > scrollPosition && lastScrollDirection === "down") {
        bottomNavigationElement.classList.remove(bottomNavigationClass);
        lastScrollDirection = "up";
        console.info("User is scrolling up");
    }
    lastScrollPosition = scrollPosition;
}