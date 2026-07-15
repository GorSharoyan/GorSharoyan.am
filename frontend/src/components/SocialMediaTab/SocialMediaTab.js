import React from "react";

//UI
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function SocialMediaTab() {
  return (
    <div>
      <div>
        <Facebook />
      </div>
      <div>
        <Instagram />
      </div>
      <div>
        <LinkedIn />
      </div>
      <div>
        <GitHub />
      </div>
      <div>
        <WorkspacePremiumIcon />
      </div>
    </div>
  );
}
