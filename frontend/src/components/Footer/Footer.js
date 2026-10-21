import React from "react";

//CSS
import "./Footer.css";

//components
import SocialMediaTab from "../SocialMediaTab/SocialMediaTab";
import ContactsBar from "../ContactsBar/ContactsBar";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="socialMediaBar-component">
          <SocialMediaTab />
        </div>
        <div>
          <ContactsBar
            email={"gor.sharoyan95@gmail.com"}
            phone={"+37495010248"}
            website={"www.gor.sharoyan.am"}
          />
        </div>
        <dic className="copyright-conainer">
          <h4>Zen 0ne , All right reserved,2025</h4>
        </dic>
      </div>
    </footer>
  );
}
