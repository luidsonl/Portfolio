window.onload = function(){
    showActiveOnNavbar();
}

function showActiveOnNavbar (){
    index = document.getElementById("index");
    portfolio = document.getElementById("portfolio");
    contact = document.getElementById("contact");
    
    pages = {
        'index.html': index,
        'portfolio.html': portfolio,
        'contact.html':contact
    };
    
    let path = window.location.pathname;
    let currentPage = path.substring(path.lastIndexOf('/')+1);
    
    pages[currentPage].style.backgroundColor = '#fff';
    pages[currentPage].style.color = '#333';
}

