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
                    <a href="https://www.instagram.com/harish.cousal" target="_blank">Instagram</a>
                    <a href="https://www.youtube.com/@tone-vault" target="_blank">YouTube</a>
                </div>

                <p>&copy; 2026 ToneVault by HC. All rights reserved.</p>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);


// =========================================
// UNIVERSAL META TAG INJECTOR
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    // 1. Set the global page title
    document.title = "ToneVault | The Sonic Lab";

    // 2. Define all your global meta tags
    const metaTags = [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "ToneVault is the sonic laboratory of Harish Cousal. Professional music production blending hard-hitting electronic drops with cinematic orchestral arrangements." },
        { name: "keywords", content: "Harish Cousal, ToneVault, music producer, EDM producer, cinematic scoring, custom beats, mixing and mastering" },
        { name: "author", content: "Harish Cousal" },
        
        // Open Graph / Social Media Preview (WhatsApp, Facebook, etc.)
        { property: "og:title", content: "ToneVault | The Sonic Lab" },
        { property: "og:description", content: "Enter the vault and hear the latest productions from Harish Cousal." },
        { property: "og:image", content: "/Images/Logo with text.png" },
        { property: "og:url", content: "https://tonevault.qd.je" },
        { property: "og:type", content: "website" },
        
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" }
    ];

    // 3. Inject meta tags dynamically into head
    metaTags.forEach(tagData => {
        let meta = document.createElement('meta');
        for (let key in tagData) {
            meta.setAttribute(key, tagData[key]);
        }
        document.head.appendChild(meta);
    });

    // 4. Inject Favicon dynamically
    let favicon = document.createElement('link');
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/Images/favicon.ico";
    document.head.appendChild(favicon);
});
