// Header scroll behavior with debounce and requestAnimationFrame
(() => {
    let lastScroll = 0;
    let ticking = false;
    const header = document.querySelector('header');
    
    function updateHeader() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('hide');
        } else if (currentScroll > lastScroll) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
})();