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
import PageSpeedInsights from "./on-boarding/PageSpeedInsights";
import ConnectWebsite from "./on-boarding/ConnectWebsite";
import ProtectedRoute from "./AuthRotes/ProtectedRoute";
import Dashboard from "./dashboard/Dashboard";

const BasicTable = lazy(() => import("./tables/BasicTable"));

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
const VerifyOtp = lazy(() => import("./user-pages/VerifyOtp"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register1} />
          <Route path="/verify-otp" component={VerifyOtp} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/tables/basic-table" component={BasicTable} />
          <ProtectedRoute path="/charts/chart-js" component={ChartJs} />
          <ProtectedRoute path="/error-pages/error-404" component={Error404} />
          <ProtectedRoute path="/error-pages/error-500" component={Error500} />
          <ProtectedRoute path="/business-domain" component={DomainPage} />
          <ProtectedRoute path="/pricing" component={Pricing} />
          <ProtectedRoute path="/payment" component={selectPlan} />
          <ProtectedRoute
            path="/pagespeed-insights"
            component={PageSpeedInsights}
          />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/fb-connect" component={FbConnect} />
          <ProtectedRoute path="/email-api" component={Email} />
          <ProtectedRoute path="/sms-api" component={Sms} />
          <ProtectedRoute path="/social-media" component={SocialMedia} />
          <ProtectedRoute
            path="/business-profile"
            component={BusinessProfile}
          />
          <ProtectedRoute path="/keywords" component={keywords} />
          <ProtectedRoute path="/competetor" component={Competetors} />
          <ProtectedRoute path="/add-keyword" component={AddKeyword} />
          <ProtectedRoute path="/billing-plan" component={BillingPlans} />
          <ProtectedRoute path="/connect-website" component={ConnectWebsite} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
