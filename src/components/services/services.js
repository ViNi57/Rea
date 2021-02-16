import React from "react";

function Services() {
  // const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

  // const numBalls = 50;
  // const balls = [];

  // for (let i = 0; i < numBalls; i++) {
  //   let ball = document.createElement("div");
  //   ball.classList.add("ball");
  //   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  //   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  //   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  //   ball.style.transform = `scale(${Math.random()})`;
  //   ball.style.width = `${Math.random()}em`;
  //   ball.style.height = ball.style.width;

  //   balls.push(ball);
  //   document.body.append(ball);
  // }

  // // Keyframes
  // balls.forEach((el, i, ra) => {
  //   let to = {
  //     x: Math.random() * (i % 2 === 0 ? -11 : 11),
  //     y: Math.random() * 12,
  //   };

  //   let anim = el.animate(
  //     [
  //       { transform: "translate(0, 0)" },
  //       { transform: `translate(${to.x}rem, ${to.y}rem)` },
  //       { left: "20px" },
  //       { bottom: "500px" },
  //     ],
  //     {
  //       duration: (Math.random() + 1) * 2000, // random duration
  //       direction: "alternate",
  //       fill: "both",
  //       iterations: Infinity,
  //       easing: "ease-in-out",
  //     }
  //   );
  // });
  return (
    <>
      <section id="services" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-text section-header text-center">
                <div>
                  <h2 className="section-title">Services We Provide</h2>
                  <div className="desc-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do <br /> eiusmod tempor incididunt ut labore et
                      dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row featured-bg">
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item featured-border1">
                <div className="feature-icon float-left">
                  <i className="lni-coffee-cup"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>a</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item featured-border2">
                <div className="feature-icon float-left">
                  <i className="lni-briefcase"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>b</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item featured-border1">
                <div className="feature-icon float-left">
                  <i className="lni-invention"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>c</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item featured-border2">
                <div className="feature-icon float-left">
                  <i className="lni-layers"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>d</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item featured-border3">
                <div className="feature-icon float-left">
                  <i className="lni-reload"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>e</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item">
                <div className="feature-icon float-left">
                  <i className="lni-support"></i>
                </div>
                <div className="feature-info float-left">
                  <h4>f</h4>
                  <p>
                    Producing long lasting organic SEO results for <br /> brand
                    of different kinds for more than a decade,
                    <br /> we understand that’s your.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
