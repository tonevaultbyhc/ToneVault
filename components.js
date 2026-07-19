// components.js

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="nav-container">
                    <a href="/" class="logo">Tone<span>Vault</span></a>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Pages/Listen.html">Listen</a></li>
                            <li><a href="/Pages/Services.html">Services</a></li>
                            <li><a href="/Pages/About & Contact.html">About & Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="socials">
                    <a href="https://www.instagram.com/harish.cousal" target="_blank">Instagram</a> | 
                    <a href="https://www.youtube.com/@tone-vault" target="_blank">YouTube</a>
                </div>
                <p>&copy; 2026 ToneVault by HC. All rights reserved.</p>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);
