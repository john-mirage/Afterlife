const topAppBarElement = document.querySelector("#top-app-bar");
const topAppBarBoxshadowClass = "top-app-bar--with-boxshadow";

let topAppBarHasBoxshadow = false;

/**
 * Handle top app bar box shadow.
 * 
 * @param {number} currentScrollPosition - The current scroll position.
 */
export function handleTopAppBarBoxshadow(currentScrollPosition) {
    if (!topAppBarHasBoxshadow && currentScrollPosition > 0) {
        topAppBarElement.classList.add(topAppBarBoxshadowClass);
        topAppBarHasBoxshadow = true;
    } else if (topAppBarHasBoxshadow && currentScrollPosition === 0) {
        topAppBarElement.classList.remove(topAppBarBoxshadowClass);
        topAppBarHasBoxshadow = false;
    }
}