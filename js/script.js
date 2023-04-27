showActiveOnNavbar();

function showActiveOnNavbar (){
    const index = document.getElementById("index");
    const portfolio = document.getElementById("portfolio");
    const contact = document.getElementById("contact");
    
    pages = {
        'index.html': index,
        'portfolio.html': portfolio,
        'contact.html':contact
    };
    
    let path = window.location.pathname;
    let currentPage = path.substring(path.lastIndexOf('/')+1);
    
    pages[currentPage].classList.add('active');
}

function toggleList(id){
    const toToggle = document.getElementById(id);
    const toggleArrow = document.getElementById(id + '-toggle-arrow');
    
    toToggle.classList.toggle('hide');
    toggleArrow.classList.toggle('hide');
}