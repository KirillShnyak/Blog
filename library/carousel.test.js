import SlideShow from "./carousel";

// beforeEach(() => {
document.body.innerHTML = ` <header>
    <div class="logo">
      <img src="pictures/logo.png" />
    </div>
    <nav class="menu">
      <ul class="nav_ul">
        <li>
          <a href="index.html"><span>Home</span></a>
        </li>
        <li>
          <a href="feedback.html"><span>Feedback</span></a>
        </li>
        <li>
          <a href="about.html"><span>About</span></a>
        </li>
        <li>
          <a href="blog.html"><span>Blog</span></a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="main_section_index">
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        illum illo saepe, reiciendis autem est nam dolores enim ut sequi
        placeat molestias earum et quia! Veniam ullam praesentium et dolore
        tempora quis tempore fuga sapiente ex, atque, quod facilis? Mollitia
        in ratione sit enim? Sit minima assumenda distinctio! Totam minus
        numquam, itaque corrupti architecto, ea reiciendis cupiditate, velit
        dignissimos inventore assumenda blanditiis neque accusantium eum
        illum? Saepe, voluptates laboriosam? Facere adipisci sequi molestias
        rem placeat a quod cumque quas, dolorem deleniti voluptas.
        Reprehenderit, aspernatur! Officiis corrupti voluptatem provident
        dolor quibusdam, repellat vero aperiam! Reiciendis quibusdam
        repudiandae quos excepturi doloribus soluta!
      </p>

      <div id="carousel-main-conteiner" class="carousel_slider">
        <ul class="carousel-wrapper">
          <li class="carousel-item active">
            <img
              class="carousel-img"
              src="pictures/dog1.jpeg"
              alt="First slide"
            />
          </li>
          <li class="carousel-item">
            <img
              class="carousel-img"
              src="pictures/dog2.gif"
              alt="Second slide"
            />
          </li>
          <li class="carousel-item">
            <img
              class="carousel-img"
              src="pictures/dog3.jpeg"
              alt="Third slide"
            />
          </li>
        </ul>
        <div class="carousel-nav">
          <button class="prev" role="button">&#10094;</button>
          <button class="next" role="button">&#10095;</button>
        </div>
      </div>
    </section>
  </main>`;
const slider = new SlideShow("#carousel-main-conteiner");
// });
// afterEach(() => {
//     document.innerHTML = "";
// });

describe("SlideShow", () => {
  // jest.mock('./carousel.js');

  it("is a function", () => {
    console.log(slider);
    expect(slider.init).toBeInstanceOf(Function);
  });

  it("element slider is true", () => {
    expect(slider.el.getAttribute("id")).toEqual("carousel-main-conteiner");
  });

  it("next slide", () => {
    slider._slideTo(2);
    expect(slider.index).toEqual(2);
  });

  it("test auto play", () => {
    expect(slider.timer).toBeGreaterThan(0);
  });

  it("test visible slide", () => {
    slider.slides.forEach((el, index) => {
      if (index !== slider.index) {
        expect(slider.slides[index].style.opacity).toEqual("0");
      } else {
        expect(slider.slides[index].style.opacity).not.toEqual("0");
      }
    });
  });

  // it( "test click  prev slide",() => {
  //     slider.stop()
  //     expect(slider.timer).toEqual(null)
  //     let oldSlide = slider.index;
  //     slider.previous.click();

  //     expect(slider.index).toEqual(oldSlide+1)

  // })

  // it("draw divField", () => {

  //     expect(slider.e.id).toEqual("carousel-main-conteiner");
  // })
  // it("draw button start", () => {
  //     myCreateGameOfLife(element, columns, rows);
  //     expect(element.querySelector("button")).toBeTruthy();
  // })
});
