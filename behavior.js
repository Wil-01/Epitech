const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
};

scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};

