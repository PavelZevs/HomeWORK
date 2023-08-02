class Footer {
  constructor() {
    this.elem = document.createElement("footer");
  }
  render() {
    this.elem.classList.add("footer");
    this.elem.innerHTML = `
    <div class="footer">
            <a href="Facebook" class="fc"><img src="./images/fcb.png" alt="facebook"></a>
            <a href="Twitter" class="tw"><img src="./images/twitter.png" alt="twitter"></a>
            <a href="Instagram" class="inst"><img src="./images/insta.png" alt="instagram"></a>
            <a href="Ask@fm" class="ask"><img src="./images/ask.png" alt="ask.fm"></a
    </div>`;
  }

  init() {
    this.render();
    return this.elem;
  }
}

const footer = new Footer().init();
export {footer};
