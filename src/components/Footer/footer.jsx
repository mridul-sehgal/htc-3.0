import React, { useEffect, useState } from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import PrivacyPolicy from "./Privacy policy.pdf";
import TermsOfUse from "./Terms of use.pdf";
import Twitter from "./icons8-twitter.svg";
import { Btn } from "../Top-division-components/Top-division-components.jsx";
// import cross from "./cross.svg";
import { SOCIALS, FOOTER } from "../../Module/General";

// function GithubTemplate({hideTemplate}) {
//   return (
//     <div className="template">
//       <div className="template-left">
//         <p>
//           Join us to{" "}
//           <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
//           where we will be hosting PUBLIC workshops, tech talks, panel
//           discussions, and career sessions!
//         </p>
//       </div>
//       <img alt="img" onClick={hideTemplate} src={cross} />
//     </div>
//   );
// }

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);
  const [showMap, setShowMap] = useState(false); // Define showMap state

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY > 2800) {
      setTemplate(true);
      setShowMap(true); // Set showMap to true when scroll position meets condition
    } else if (window.scrollY < 2800) {
      setTemplate(false);
      setShowMap(false); // Set showMap to false when scroll position doesn't meet condition
    }
  };

  return (
    <div>
      <div className="footer"
      >
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              {/* <img src={Insta} alt="" /> */}
              <i className="fab fa-3x fa-instagram"></i>
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              {/* <img src={Dis} alt="" /> */}
              <i className="fab fa-3x fa-discord"></i>
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              {/* <img src={Linked} alt="" /> */}
              <i className="fab fa-3x fa-linkedin-in"></i>
            </a>
          </div>
          <div className="social-icon svg-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} className="svg-icon" width={"100%"} alt="" />
            </a>
          </div>
          {/* <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              
              <i className="fab fa-3x fa-twitter"></i>
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              
              <i className="fab fa-3x fa-dev"></i>
            </a>
          </div> */}
        </div>
        <div className="Register_a">
          <div
            className="apply-button"
            data-hackathon-slug="hackthecrisis30"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
          {/* <a
            href="https://hack-the-crisis-3.devfolio.co/"
            rel="noreferrer"
            target="_blank"
          >
            <button class="dev-button-footer">
              <svg
                class="dev-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.46 123.46"
                style={{height: "24px", width: "24px", "margin-right": "8px"}}
              >
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
              </svg>
              Apply With Devfolio
            </button>
          </a> */}
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div>
        {showMap && ( // Conditionally render the map
          <iframe
          className="map-iframe" // Add class to the iframe
          title="googlemaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5678.237381126973!2d77.11261932381059!3d28.67719569979277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038dc3b91bc3%3A0x909c31c649a710b0!2sBharati%20Vidyapeeth%20Deemed%20University!5e0!3m2!1sen!2sin!4v1708254335969!5m2!1sen!2sin"
          width="400" // Adjusted width
          height="300" // Adjusted height
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        )}
        <div className="footer_info">
          {/* <p>
            Contact us <a href={SOCIALS.email}>{SOCIALS.mail}</a>{" "}
          </p> */}
          

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )}
          <p>Made with ❤️ by HTC team</p>
        </div>
        {template && viewTemplate && (
          <template hidetemplate={() => setViewTemplate(false)} />
        )}
      </div>
    </div>
  );
}