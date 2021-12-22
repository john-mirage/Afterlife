import './main.scss';
import { handleNavigationBarVisibility } from './js/navigation-bar';
import { handleTopAppBarBoxshadow } from './js/top-app-bar';
import { handleFab, handleInitialFabVisibility } from './js/fab';

let lastScrollPosition = 0;
let lastScrollDirection = "up";

window.addEventListener("DOMContentLoaded", handleInitialScrollPosition);
window.addEventListener("scroll", handleScrollPosition);

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
