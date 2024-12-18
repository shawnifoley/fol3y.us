function contactUs() {
    const phoneNumber = '5551234567';
    window.location.href = `tel:${phoneNumber}`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = scroll * 0.5 + 'px';
});
