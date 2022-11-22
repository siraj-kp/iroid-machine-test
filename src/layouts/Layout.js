import {
  faAngleRight,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import About from "../pages/about/About";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
