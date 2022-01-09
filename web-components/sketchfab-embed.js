class SketchfabEmbed extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('title', 'Modelo 3D de Sketchfab');
    this.iframe.setAttribute('frameborder', '0');
    this.iframe.setAttribute('allowfullscreen', '');
    this.iframe.setAttribute('mozallowfullscreen', true);
    this.iframe.setAttribute('webkitallowfullscreen', true);
    this.iframe.setAttribute('allow', 'autoplay; fullscreen; xr-spatial-tracking');
    this.iframe.setAttribute('xr-spatial-tracking', '');
    this.iframe.setAttribute('execution-while-out-of-viewport', '');
    this.iframe.setAttribute('execution-while-not-rendered', '');
    this.iframe.setAttribute('web-share', '');
    // iframe.setAttribute('src', '');

    // this.style = document.createElement('style');
    this.iframe.style.width = '100%';
    this.iframe.style.aspectRatio = '16 / 9';

    this.shadowRoot.append(this.iframe);


  }

  connectedCallback() {
    const autostart = this.getAttribute('autostart') || '0';
    const animatedEntrance = this.getAttribute('camera') || '1';
    const turntableAnimation = this.getAttribute('autospin') || '0';
    const preloadTextures = this.getAttribute('preload') || '0';
    this.iframe.setAttribute('src', `https://sketchfab.com/models/${this.getAttribute('id')}/embed?autostart=${autostart}&camera=${animatedEntrance}&autospin=${turntableAnimation}&preload=${preloadTextures}`);
    this.iframe.setAttribute('title', this.getAttribute('title'));
  }

  attributeChangedCallback() {

  }
}

customElements.define("sketchfab-embed", SketchfabEmbed);
