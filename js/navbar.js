class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="topnav">
            
            <a href="https://www.bdilinks.bingman.xyz">BDI Links</a>
            <a href="computer_setup.html">Computer Setup</a>
            <a href="mentor.html">Mentor</a>
            <a href="https://houseofmewsrescue.org">HOMR</a>
            <a href="personal.html">Misc</a>
        </div> 
        `;
    }
}
customElements.define('navbar-component', NavBar);