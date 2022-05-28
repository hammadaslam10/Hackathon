import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Search, ShoppingCartOutlined ,FavoriteBorderOutlined } from "@material-ui/icons";
import{ RoomIcon }from '@material-ui/icons/Room';

const options = {
  badgeContent: "4",
  burgerColor: "Black",
  burgerColorHover: "#f0b486",
  logo,
  logoWidth: "20vmax",
  // logoColor: "#0015ff",
  navColor1: "#f0b486",
  navColor2:"#a86b20",
  logoHoverSize: "10px",
  link1Text: "Home",
  link2Text: "Hotels",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#f0b486",
  link1Margin: "1vmax",
  searchIconUrl: "/search",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#f0b486",
  searchIconColorHover: "#f0b486",
  cartIconColorHover: "#f0b486",
  cartIconMargin: "1vmax",
  profileIconMargin: "1vmax",
  searchIconMargin: "1vmax",
};

const Header = ({ icon }) => {
  return (
    <ReactNavbar
      {...options}
      searchIcon={true}
      SearchIconElement={BsSearch}
      cartIcon={true}
      CartIconElement={FavoriteBorderOutlined}
      profileIcon={true}
      ProfileIconElement={CgProfile}
    />
  );
};

export default Header;
