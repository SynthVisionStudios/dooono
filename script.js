document.addEventListener('scroll', function () {
    const fadeIns = document.querySelectorAll('._scr-item');
    fadeIns.forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 500); // Delay animasi
        }
    });
});
