import { debounce } from "./utils/debounce";

const navigationBar = {
    domElement: document.querySelector(".navigation-bar"),
    hiddenClass: "navigation-bar--hidden",
    resizeTimeout: false,
    resizeTimeoutDuration: 250,
    scrollTimeout: false,
    scrollTimeoutDuration: 250,
    scrollIsWatched: false,
    lastScrollPosition: window.scrollY,
    lastScrollDirection: "up",
};

export function handleNavigationBar() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    if (isMobile) window.addEventListener("DOMContentLoaded", watchWindowScroll);
    window.addEventListener("resize", handleWindowResizeWithDebounce);
}

function watchWindowScroll() {
    console.info("Scroll is now watched");
    window.addEventListener("scroll", handleWindowScrollWithDebounce);
    navigationBar.scrollIsWatched = true;
}

function handleWindowScrollWithDebounce() {
    debounce(
        navigationBar.scrollTimeout,
        navigationBar.scrollTimeoutDuration,
        handleWindowScroll
    );
}

function handleWindowScroll() {
    const scrollPosition = window.scrollY;
    if (
        navigationBar.lastScrollPosition < scrollPosition &&
        navigationBar.lastScrollDirection === "up"
    ) {
        navigationBar.domElement.classList.add(navigationBar.hiddenClass);
        navigationBar.lastScrollDirection = "down";
        console.info("User is scrolling down");
    } else if (
        navigationBar.lastScrollPosition > scrollPosition &&
        navigationBar.lastScrollDirection === "down"
    ) {
        navigationBar.domElement.classList.remove(navigationBar.hiddenClass);
        navigationBar.lastScrollDirection = "up";
        console.info("User is scrolling up");
    }
    navigationBar.lastScrollPosition = scrollPosition;
}

function handleWindowResizeWithDebounce() {
    debounce(
        navigationBar.resizeTimeout,
        navigationBar.resizeTimeoutDuration,
        handleWindowResize
    );
}

function handleWindowResize() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    if (isMobile && !navigationBar.scrollIsWatched) {
        watchWindowScroll();
    } else if (!isMobile && navigationBar.scrollIsWatched) {
        console.info("Scroll is not watched anymore");
        window.removeEventListener("scroll", handleWindowScrollWithDebounce);
        navigationBar.scrollIsWatched = false;
    }
}
