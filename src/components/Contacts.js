import React from "react";

function Contact() {
  return (
    <>
      <section className="section project-sec" id="contact">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="hero is-halfheight">
            <p
              className="has-text-centered has-text-weight-bold is-size-4-desktop pb-6"
              style={{ color: "white" }}
            >
              Contacts
            </p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile">E-mail</p>
                  <div class="content">
                    <p>
                      Hechembenahmed750@gmail.com
                    </p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile">Telephone</p>
                  <div class="content">
                    <p>
                      90122038
                    </p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile"> Adresse</p>
                  <div class="content">
                    <p>
                      Kélibia
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;