import { Routes, Route } from "react-router-dom";
import MinimalLayout from "../components/layout/minimalLayout/MinimalLayout";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import Login from "../pages/commonPages/Login";
import ForgotUserID from "../pages/commonPages/ForgotUserID";
import HouseholdDetailsPage from "../pages/Self-Enumeration(HLO)/HouseholdDetailsPage";
import SeOtpVerification from "../pages/commonPages/SeOtpVerification";
import ResidentialAddressForm from "../pages/Self-Enumeration(HLO)/ResidentialAddressForm";

import SeLoginForm from "../pages/commonPages/SeLoginForm";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SelfEnumerationHLO from "../pages/Self-Enumeration(HLO)/SelfEnumerationHLO";
import SeHLOTable from "../pages/Self-Enumeration(HLO)/SeHLOTable";
import AddSEHLOLocation from "../pages/Self-Enumeration(HLO)/AddSEHLOLocation";
import CreateUser from "../pages/Self-Enumeration(HLO)/CreateUser";
import AddDetails from "../pages/Self-Enumeration(HLO)/AddDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MinimalLayout applies to all routes below */}
      <Route element={<MinimalLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<PublicRoute component={Login} />} />
        <Route
          path="/forgotuserid"
          element={<PublicRoute component={ForgotUserID} />}
        />
        <Route
          path="/se-login"
          element={<PublicRoute component={SeLoginForm} />}
        />
        <Route
          path="/se-otp-verification"
          element={<PublicRoute component={SeOtpVerification} />}
        />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        {/* Private Routes */}
        <Route
          path="/householdDetailsPage"
          element={<PrivateRoute component={HouseholdDetailsPage} />}
        />
        <Route
          path="/self-enum-hlo"
          element={<PrivateRoute component={SeHLOTable} />}
        />
        <Route
          path="/add-details"
          element={<PrivateRoute component={AddDetails} />}
        />
        <Route
          path="/create-user"
          element={<PrivateRoute component={CreateUser} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
