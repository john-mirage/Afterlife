import './main.scss';
import { handleNavigationBarVisibility } from './components/navigation/_navigation-bar.js';
import { handleTopAppBarBoxshadow } from './components/top-app-bar/_top-app-bar.js';
import { handleFab, handleInitialFabVisibility, handleFabAction } from './components/fab/_fab.js';

let lastScrollPosition = 0;
let lastScrollDirection = "up";

/**
 * Handle the initial scroll position.
 * 
 * @param {Event} event - The event.
 */
function handleInitialScrollPosition(event) {
    const currentScrollPosition = window.scrollY;
    handleInitialFabVisibility(currentScrollPosition);
    handleTopAppBarBoxshadow(currentScrollPosition);
    if (lastScrollPosition !== currentScrollPosition) lastScrollPosition = currentScrollPosition;
}

/**
 * Handle the scroll position.
 * 
 * @param {Event} event - The event.
 */
function handleScrollPosition(event) {
    const currentScrollPosition = window.scrollY;
    if (lastScrollPosition !== currentScrollPosition) {
        const currentScrollDirection = (lastScrollPosition < currentScrollPosition) ? "down" : "up";
        handleNavigationBarVisibility(lastScrollDirection, currentScrollDirection);
        handleTopAppBarBoxshadow(currentScrollPosition);
        handleFab(lastScrollDirection, currentScrollDirection, currentScrollPosition);
        lastScrollDirection = currentScrollDirection;
        lastScrollPosition = currentScrollPosition;
    }
}

window.addEventListener("load", handleInitialScrollPosition);
window.addEventListener("scroll", handleScrollPosition);

handleFabAction();
