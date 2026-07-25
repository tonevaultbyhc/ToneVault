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
                <div class="socials" style="display: flex; gap: 15px;">
                    <a href="https://www.instagram.com/harish.cousal" target="_blank" class="footer-btn"><i class="fa-brands fa-instagram"></i> Instagram</a>
                    <a href="https://www.youtube.com/@tone-vault" target="_blank" class="footer-btn"><i class="fa-brands fa-youtube"></i> YouTube</a>
                </div>

                <p>&copy; 2026 ToneVault by HC. All rights reserved.</p>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);


// =========================================
// SMART UNIVERSAL META TAG INJECTOR
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    // Define page-specific configurations
    let pageTitle = "ToneVault | The Sonic Lab";
    let pageDescription = "ToneVault is the sonic laboratory of Harish Cousal. Professional music production blending hard-hitting electronic drops with cinematic orchestral arrangements.";
    let ogUrl = "https://tonevault.qd.je" + path;

    if (path.includes("Listen.html")) {
        pageTitle = "Listen | ToneVault";
        pageDescription = "Listen to the latest releases, custom productions, and cinematic scores out of the ToneVault studio by Harish Cousal.";
    } else if (path.includes("Services.html")) {
        pageTitle = "Services | ToneVault";
        pageDescription = "Explore custom music production, mixing, mastering, and scoring services by Harish Cousal.";
    } else if (path.includes("About")) {
        pageTitle = "About & Contact | ToneVault";
        pageDescription = "Get in touch with Harish Cousal for collaborations, custom beats, and project inquiries.";
    }

    // Set the dynamic title
    document.title = pageTitle;

    // Define all global and page-aware meta tags
    const metaTags = [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: pageDescription },
        { name: "keywords", content: "Harish Cousal, ToneVault, music producer, EDM producer, cinematic scoring, custom beats, mixing and mastering" },
        { name: "author", content: "Harish Cousal" },
        
        // Open Graph / Social Media Preview (WhatsApp, Facebook, etc.)
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:image", content: "https://tonevault.qd.je/Images/Logo with text.png" },
        { property: "og:url", content: ogUrl },
        { property: "og:type", content: "website" },
        
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" }
    ];

    // Inject meta tags dynamically into head
    metaTags.forEach(tagData => {
        let meta = document.createElement('meta');
        for (let key in tagData) {
            meta.setAttribute(key, tagData[key]);
        }
        document.head.appendChild(meta);
    });

    // Inject Favicon dynamically
    let favicon = document.createElement('link');
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/Images/favicon.ico";
    document.head.appendChild(favicon);
});
