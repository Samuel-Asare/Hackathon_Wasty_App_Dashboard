import "../css/HeaderNav.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModeToggle } from "./Toggle/ModeToggleBtn";
import { DropdownMenuComponent } from "./ShadcnUI/DropdownMenu";
import Logo from "../assets/HeaderNav/recycle.svg";
import { useEffect } from "react";

import notification_anime from "../JSON/Notification_Animation.json";
import Lottie from "lottie-react";

const HeaderNav = () => {
  useEffect(() => {
    const getAllRequest = async () => {
      try {
        const res = await axios.get(
          "https://hackathon-waste-api.onrender.com/api/v1/waste-request/all",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user") || "{}").accessToken,
            },
          }
        );

        res.data;
      } catch (error) {
        console.log(error);
      }
    };
    getAllRequest();
  }, []);

  return (
    <>
      <div className="header_wrapper">
        <Link to="/">
          <img src={Logo} alt="Brand Logo" />
          <h3>Wasty.</h3>
        </Link>
        <div className="left-side">
          <Lottie
            animationData={notification_anime}
            className="anime_notification"
          />
          <div className="circle_ball"></div>
          <DropdownMenuComponent />
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
