import React from "react";

//UI
import { Email, Phone } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";

export default function ContactsBar({ email, phone, website }) {
  return (
    <div>
      <h3>Contacts : </h3>
      <div>
        <Email /> <a>{email}</a>
      </div>
      <div>
        <LanguageIcon />
        <a>{website}</a>
      </div>
      <div>
        <Phone />
        <a>{phone}</a>
      </div>
    </div>
  );
}
