{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Eanzj-GeAxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

class YouTubeEmbed extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('frameborder', '0');
      this.iframe.setAttribute('allowfullscreen', '');
      this.iframe.setAttribute('title', 'YouTube video player');
      this.iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      this.iframe.style.width = '100%';
      this.iframe.style.aspectRatio = '16 / 9';
      this.shadowRoot.append(this.iframe);
    }

    connectedCallback() {
      this.iframe.setAttribute('src', `https://www.youtube.com/embed/${this.getAttribute('id')}`);
    }
  }

  customElements.define("youtube-embed", YouTubeEmbed);
