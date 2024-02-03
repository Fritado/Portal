import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "./shared/Spinner";
import Profile from "./components/Profile";
import FbConnect from "./API-Channels/FbConnect";
import Email from "./API-Channels/Email";
import Sms from "./API-Channels/Sms";
import SocialMedia from "./API-Channels/SocialMedia";
import BusinessProfile from "./on-boarding-menu/BusinessProfile";
import keywords from "./on-boarding-menu/Keywords";
import Competetors from "./on-boarding-menu/Competetors";
import AddKeyword from "./on-boarding-menu/AddKeyword";
import BillingPlans from "./components/BillingPlans";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

/******************************************************************* */
const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const ResetPassword = lazy(() => import("./user-pages/reset-password"));
const ForgotPassword = lazy(() => import("./user-pages/ForgotPassword"));
const DomainPage = lazy(() => import("./on-boarding/DomainPage"));
const Pricing = lazy(() => import("./on-boarding/Pricing"));
const selectPlan = lazy(() => import("./on-boarding/SelectPlan"));
const PlanInfo = lazy(() => import("./on-boarding/PlanInfo"));
const VerifyOtp = lazy(() => import("./user-pages/VerifyOtp"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register1} />
          <Route path="/verify-otp" component={VerifyOtp} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/business-domain" component={DomainPage} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/plan" component={selectPlan} />
          <Route path="/plan-info" component={PlanInfo} />
          <Route path="/profile" component={Profile} />
          <Route path="/fb-connect" component={FbConnect} />
          <Route path="/email-api" component={Email} />
          <Route path="/sms-api" component={Sms} />
          <Route path="/social-media" component={SocialMedia} />
          <Route path="/business-profile" component={BusinessProfile} />
          <Route path="/keywords" component={keywords} />
          <Route path="/competetor" component={Competetors} />
          <Route path="/add-keyword" component={AddKeyword} />
          <Route path="/billing-plan" component={BillingPlans } />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
