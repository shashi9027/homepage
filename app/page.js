"use client"
import MainSlider from "@/components/slider";
import ProfileSlider from "@/components/profile-slider";
import { Divider, Drawer } from "@mui/material"
import { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';



export default function Home() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = (state) => {
    setOpen(state)
  }

  return (
    <main className="lg:py-12 lg:px-28 py-6 px-8">
      <div className="flex justify-between items-center ">
        <img src="/logo.png" />
        <div className="lg:flex hidden text-white items-end gap-5" >
          <div>ACCUEIL</div>
          <div>AMMABSADRICE</div>
          <div>LAUREATS</div>
          <div>INSCRIPTION & REGELMENTS</div>
          <div>ASSURANCE VIA FONDATION</div>
          <div>CONTACT</div>
        </div>
        <button className="lg:hidden block" onClick={() => toggleDrawer(true)}>
          <DehazeIcon style={{ color: "white" }} />
        </button>
      </div>
      <div>
        <MainSlider />
      </div>
      <div className="main-text md:text-5xl text-3xl">
        Nos Lauréats
      </div>
      <div className="sub-text md:text-2xl text-xl">Nos lauréats , inspirants et talentueux, ils nous transportent dans leur univers.</div>
      <ProfileSlider />
      <Divider className="mt-16" color="#FFE5B6" />

      <div className="sm:flex block justify-between text-white mt-8 ">
        <div>
          <img src="/logo.png" />
          <div className="mt-5">
            Contactez notre spécialiste en activation <br /> Marie-Soleil Landry <br /> 295, boul. Saint-Pierre Ouest Caraquet, N.-B., E1W 1B7 <br /> Téléphone : 506-724-1033 <br /> Courriel : marie-soleil.landry@email.com
          </div>
        </div>
        <div className="sm:flex flex-col justify-between items-end" style={{ fontSize: "14px" }}>
          <div>
            FOLLOW US
            <img className="mt-3" src="social-media.png" />
          </div>
          <img className="mt-5" src="/footer-frame.png" />
        </div>

      </div>

      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <div className="p-5">
        <div>ACCUEIL</div>
        <div>AMMABSADRICE</div>
        <div>LAUREATS</div>
        <div>INSCRIPTION & REGELMENTS</div>
        <div>ASSURANCE VIA FONDATION</div>
        <div>CONTACT</div>
        </div>
      </Drawer>
    </main>
  );
}
