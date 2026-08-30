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
                            <li class="dropdown">
                                <a href="#" class="drop-btn">AI Tools <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; margin-left: 4px;"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a href="/AI Tools/Audio2MIDI.html"><i class="fa-solid fa-music" style="margin-right: 8px; color: #00d4ff;"></i> Audio2MIDI</a></li>
                                    <li><a href="/AI Tools/StemSplitter.html"><i class="fa-solid fa-sliders" style="margin-right: 8px; color: #00d4ff;"></i> Stem Splitter</a></li>
                                    <li><a href="/AI Tools/Thoughts2Beats.html"><i class="fa-solid fa-drum" style="margin-right: 8px; color: #00d4ff;"></i> Thoughts2Beats</a></li>
                                    <li><a href="/AI Tools/Thoughts2Midi.html"><i class="fa-solid fa-brain" style="margin-right: 8px; color: #00d4ff;"></i> Thoughts2Midi</a></li>
                                </ul>
                            </li>
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
    const path = window.location.pathname.toLowerCase();

    let pageTitle = "ToneVault | The Sonic Lab";
    let pageDescription = "ToneVault is the sonic laboratory of Harish Cousal. Professional music production blending hard-hitting electronic drops with cinematic orchestral arrangements.";
    let ogUrl = "https://tonevault.qd.je" + window.location.pathname;

    if (path.includes("listen.html")) {
        pageTitle = "Listen | ToneVault";
        pageDescription = "Listen to the latest releases, custom productions, and cinematic scores out of the ToneVault studio by Harish Cousal.";
    } else if (path.includes("services.html")) {
        pageTitle = "Services | ToneVault";
        pageDescription = "Explore custom music production, mixing, mastering, and scoring services by Harish Cousal.";
    } else if (path.includes("audio2midi") || path.includes("audio%202%20midi")) {
        pageTitle = "Audio2MIDI | ToneVault";
        pageDescription = "Extract polyphonic MIDI sequences directly from audio tracks using our browser-based AI tool.";
    } else if (path.includes("stemsplitter") || path.includes("stem%20separator")) {
        pageTitle = "Stem Splitter | ToneVault";
        pageDescription = "Isolate vocals, drums, bass, and instruments instantly using our AI-powered stem separation tool.";
    } else if (path.includes("thoughts2beats")) {
        pageTitle = "Thoughts2Beats | ToneVault";
        pageDescription = "Generate highly structured, sample-accurate drum beats with individual stem audio and MIDI isolation.";
    } else if (path.includes("thoughts2midi")) {
        pageTitle = "Thoughts2Midi | ToneVault";
        pageDescription = "Generate precise melodic MIDI compositions matching your exact bar length, time signature, and structural arrangement.";
    } else if (path.includes("about")) {
        pageTitle = "About & Contact | ToneVault";
        pageDescription = "Get in touch with Harish Cousal for collaborations, custom beats, and project inquiries.";
    }

    document.title = pageTitle;

    const metaTags = [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: pageDescription },
        { name: "keywords", content: "Harish Cousal, ToneVault, music producer, EDM producer, cinematic scoring, custom beats, mixing and mastering, audio to midi, stem separator, Thoughts2Beats, Thoughts2Notes, Audio2MIDI, Stem Splitter" },
        { name: "author", content: "Harish Cousal" },
        
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:image", content: "https://tonevault.qd.je/Images/Logo with text.png" },
        { property: "og:url", content: ogUrl },
        { property: "og:type", content: "website" },
        
        { name: "twitter:card", content: "summary_large_image" }
    ];

    metaTags.forEach(tagData => {
        let meta = document.createElement('meta');
        for (let key in tagData) {
            meta.setAttribute(key, tagData[key]);
        }
        document.head.appendChild(meta);
    });

    let favicon = document.createElement('link');
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/Images/favicon.ico";
    document.head.appendChild(favicon);
});

// =========================================
    // THINCLIENT APP REGISTRATION (PWA)
    // =========================================
    
    // 1. Link the Manifest
    let manifest = document.createElement('link');
    manifest.rel = "manifest";
    manifest.href = "/manifest.json";
    document.head.appendChild(manifest);

    // 2. Register the Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ToneVault ThinClient App Registered Successfully');
                })
                .catch(error => {
                    console.log('ToneVault ThinClient Registration Failed: ', error);
                });
        });
    }
