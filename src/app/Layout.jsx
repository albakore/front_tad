import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import UserInfo from "../components/UserInfo/UserInfo";
import SubHeader from "../components/SubHeader/SubHeader";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="container_sub_header">
        <SubHeader />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
