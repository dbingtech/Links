class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback01(){
        this.innerHTML = `
        <div class="topnav">
            
            <p>
                If you happened upon this page, I receive no monetary compensation or
                provide reviews for these sites. This is for personal use only.
            </p>
        </div> 
        `;
    }
}
customElements.define('footer-component', Footer);