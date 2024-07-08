class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header class="header-component">
        <a href="https://links.bingman.xyz"><h1>Links</h1></a>
         </header> 
        `;
    }
}
customElements.define('header-component', Header);