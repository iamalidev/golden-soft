import React from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Style from "./style";

const ContactPage = () => {
  return (
    <Style.ContactPageWrapper>
      <Header />
      <Contact />
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d849.0555118628996!2d69.29018145547252!3d41.31536639626416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sStreet88%2C%20Shastri%20ko&#39;chasi%2C%20Tashkent!5e0!3m2!1suz!2s!4v1673641935031!5m2!1suz!2s"
          width="100%"
          height="464"
          style={{ border: 0, display: "block" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </Style.ContactPageWrapper>
  );
};

export default ContactPage;
