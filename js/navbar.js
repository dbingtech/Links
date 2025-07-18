class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="topnav" id="thisTopnav">
            <a href="#coding">Coding</a>
            <a href="https://www.bdilinks.bingman.xyz">BDI Links</a>
            <a href="more_personal.html">Computer Setup</a>
            <a href="mentor.html">Mentor</a>
            <div class="dropdown">
                <button class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </button>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
        </div>
        </div> 
        `;
    }
}
customElements.define('navbar-component', NavBar);