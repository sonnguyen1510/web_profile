window.AnimatedBackgroundImage = function() {
    console.log("here")
    // script.js
    let lastScrollTop = 0; // Keep track of the last scroll position
    document.querySelector("content#main-content").addEventListener('scroll', function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let transformable = document.querySelector('overlay');

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            transformable.style.transform = `translate(-50%, calc(-50% + ${currentScrollTop}px))`;
        } else {
            // Scrolling up
            transformable.style.transform = `translate(-50%, calc(-50% - ${currentScrollTop}px))`;
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
}