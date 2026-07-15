import React from "react";

//UI

import { Email, Phone } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";

export default function ContactsBar() {
  return (
    <div>
      <div>
        <Email />
      </div>
      <div>
        <LanguageIcon />
      </div>
      <div>
        <Phone />
      </div>
    </div>
  );
}
