import './main.scss';
//import { handleNavigationBar } from './js/navigation-bar';
//import { handleTopAppBar } from './js/top-app-bar';

//handleNavigationBar();
//handleTopAppBar();

const navigationReferenceElement = document.querySelector(".navigation-reference");

const fabElement = document.querySelector(".fab");
const fabHiddenClass = "fab--hidden";

const navigationBarElement = document.querySelector(".navigation-bar");
const navigationBarHiddenClass = "navigation-bar--hidden";

const topAppBarElement = document.querySelector(".top-app-bar");
const topAppBarShadowClass = "top-app-bar--with-shadow";

let callbackHasBeenCalledOnce = false;

const observerOption = {threshold: [0]};
const observer = new IntersectionObserver(handleScrollPosition, observerOption);

observer.observe(navigationReferenceElement);

function handleScrollPosition(entries) {
    if (callbackHasBeenCalledOnce) {
        navigationBarElement.classList.toggle(navigationBarHiddenClass);
        topAppBarElement.classList.toggle(topAppBarShadowClass);
        fabElement.classList.toggle(fabHiddenClass);
    } else {
        if (entries[0].boundingClientRect.top < -64) {
            topAppBarElement.classList.add(topAppBarShadowClass);
            navigationBarElement.classList.add(navigationBarHiddenClass);
            fabElement.classList.remove(fabHiddenClass);
        }
        callbackHasBeenCalledOnce = true;
    }
}

fabElement.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
});