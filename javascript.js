const loadingpage = document.querySelector('#loadingpage');

window.addEventListener('load', function() {
    setTimeout(function() {
        loadingpage.style.opacity = '0';
        setTimeout(function() {
            loadingpage.style.display = 'none';
        }, 1000); 
        console.log('Window is fully loaded');
    }, 0);
});