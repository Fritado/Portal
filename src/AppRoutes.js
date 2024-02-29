import React, { Component, Suspense } from "react";
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
import BasicTable from "./tables/BasicTable";
import ChartJs from "./charts/ChartJs";
import Error404 from "./error-pages/Error404";
import Error500 from "./error-pages/Error500";
import Login from "./user-pages/Login";
import Register1 from "./user-pages/Register";
import ResetPassword from "./user-pages/reset-password";
import ForgotPassword from "./user-pages/ForgotPassword";
import DomainPage from "./on-boarding/DomainPage";
import Pricing from "./on-boarding/Pricing";
import selectPlan from "./on-boarding/SelectPlan";
import VerifyOtp from "./user-pages/VerifyOtp";
import OnSiteCode from "./onSite/OnSiteCode";
import OnSitePageSpeed from "./onSite/OnSitePageSpeed";
import OnSiteOverview from "./onSite/OnSiteOverview";
import BlogAutomation from "./ContentMarketing/BlogAutomation";
import BlogOverView from "./ContentMarketing/BlogOverView";
import BlogHistory from "./ContentMarketing/BlogHistory";
import HelpCenterPage from "./HelpCenter/HelpCenterPage";
import FritadoOverviewPg1 from "./HelpCenter/selfService/Fritado-Overview/FritadoOverviewPg1";
import FritadoOverviewPg2 from "./HelpCenter/selfService/Fritado-Overview/FritadoOverviewPg2";


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register1} />
          <Route path="/verify-otp" component={VerifyOtp} />
          <Route path="/reset-password/:token" component={ResetPassword} />
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
          <ProtectedRoute path="/onsite-code" component={OnSiteCode } />
          <ProtectedRoute path="/on-site-pagespeed" component={OnSitePageSpeed} />
          <ProtectedRoute path="/onsite-overview" component={OnSiteOverview} />
          <ProtectedRoute path="/blog-automation" component={BlogAutomation} />
          <ProtectedRoute path="/blog-overview" component={BlogOverView} />
          <ProtectedRoute path="/blog-history" component={BlogHistory} />
          {/* Help center routes */}
          <ProtectedRoute path="/help-center-page" component={HelpCenterPage} />
          <ProtectedRoute path="#" component={FritadoOverviewPg1} />
          <ProtectedRoute path="#" component={FritadoOverviewPg2} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
