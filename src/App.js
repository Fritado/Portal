import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import Footer from "./shared/Footer";
import { withTranslation } from "react-i18next";

const App = ({ i18n }) => {
  const history = useHistory();
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const matchResetPassword = useRouteMatch("/reset-password/:token");

  useEffect(() => {
    onRouteChanged();
    const unlisten = history.listen(() => {});
    // Call onRouteChanged when the component mounts
    onRouteChanged();
    // Cleanup the listener when the component unmounts
    return () => unlisten();
  }, [history]);

  const onRouteChanged = () => {
    //console.log("ROUTE CHANGED:", history.location.pathname);
    const body = document.querySelector("body");

    const fullPageLayoutRoutes = [
      "/login",
      "/signup",
      "/verify-otp",
      "/reset-password/:token",
      "/forgot-password",
      "/business-domain",
      "/payment",
      "/pricing",
      "/portal-walk-through",
      "/pagespeed-insights",
      "/connect-website",
      "/help-center-page",
      "/what-fritado",
      "/user-pages/login-2",
      "/user-pages/register-2",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];

    const isFullPageLayout =
      matchResetPassword ||
      fullPageLayoutRoutes.includes(history.location.pathname);

    setIsFullPageLayout(isFullPageLayout);

    if (history.location.pathname === "/layout/RtlLayout") {
      body.classList.add("rtl");
      i18n.changeLanguage("ar");
    } else {
      body.classList.remove("rtl");
      i18n.changeLanguage("en");
    }

    window.scrollTo(0, 0);

    const pageBodyWrapper = document.querySelector(".page-body-wrapper");
    if (isFullPageLayout) {
      pageBodyWrapper.classList.add("full-page-wrapper");
    } else {
      pageBodyWrapper.classList.remove("full-page-wrapper");
    }
  };

  const navbarComponent = !isFullPageLayout ? <Navbar /> : null;
  const sidebarComponent = !isFullPageLayout ? <Sidebar /> : null;
  const SettingsPanelComponent = !isFullPageLayout ? <SettingsPanel /> : null;
  const footerComponent = !isFullPageLayout ? <Footer /> : null;

  return (
    <div className="container-scroller">
      {navbarComponent}
      <div className="container-fluid page-body-wrapper">
        {sidebarComponent}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
            {SettingsPanelComponent}
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(App);