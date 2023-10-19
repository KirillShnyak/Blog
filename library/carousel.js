export default class SlideShow {
  constructor(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  init() {
    this.wrapper = this.el.querySelector(".carousel-wrapper");
    this.slides = this.el.querySelectorAll(".carousel-item");
    this.index = 0;
    this.timer = null;
    this.previous = this.el.querySelector(".prev");
    this.next = this.el.querySelector(".next");
    this.total = this.slides.length;

    this.action();
    this.stopStart();

    this.next.addEventListener(
      "click",
      () => {
        this.index++;
        this._slideTo(this.index);
      },
      false,
    );
    this.previous.addEventListener(
      "click",
      () => {
        this.index--;
        this._slideTo(this.index);
      },
      false,
    );
  }

  _slideTo(i) {
    this.index = i;
    if (this.index >= this.slides.length) {
      this.index = 0;
    }
    if (this.index < 0) {
      this.index = this.slides.length - 1;
    }
    this.slides.forEach((element, key) => {
      element.style.opacity = key == this.index ? 1 : 0;
      console.log(i);
    });
  }

  action() {
    const self = this;
    self.timer = setInterval(() => {
      self.index++;
      self._slideTo(self.index);
    }, 3000);
  }

  stopStart() {
    const self = this;
    self.el.addEventListener(
      "mouseover",
      () => {
        clearInterval(self.timer);
        self.timer = null;
      },
      false,
    );
    self.el.addEventListener(
      "mouseout",
      () => {
        self.action();
      },
      false,
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const slider = new SlideShow("#carousel-main-conteiner");
});
