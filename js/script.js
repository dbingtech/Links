// Load components
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);
        
    // Load nav
    fetch('nav.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav').innerHTML = data);
        
    // Load hero
    fetch('hero.html')
        .then(response => response.text())
        .then(data => document.getElementById('hero').innerHTML = data);
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

function focusSearchField (){
    const searchfield = document.getElementsByClassName("search-field").focus();
}

let copyrightSpan = document.getElementById('copyright');
let newDate = new Date();
let thisYear = newDate.getFullYear();
copyrightSpan.innerHTML = thisYear;





class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header class="header-component">
        <a href="index.html"><h1>Links</h1></a>
         </header> 
        `;
    }
}
customElements.define('header-component', Header);