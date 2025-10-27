import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import News from "../Pages/News";
import Upload from "../Pages/Upload";
import CompanyProfile from "../Pages/CompanyProfile";
import FAQ from "../Pages/FAQ";
import ServicesandProducts from "../Pages/ServicesandProducts";
import Import from "../Pages/Import";
import Export from "../Pages/Export";
import Oilseeds from "../Pages/Oilseeds";
import Coffeandtea from "../Pages/Coffeandtea";
import Pulses from "../Pages/Pulses";
import Chat from "../Pages/Chat";
import Spices from "../Pages/Spices";
import Cereals from "../Pages/Cereals";
import ViewContact from "../Pages/ViewContacts";
import Services from "../Pages/Services";
import CreateUsers from "../Pages/CreateUsers";
import ViewUsers from "../Pages/ViewUsers";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Minerals from "../Pages/Minerals";
import CleaningService from "../Pages/CleaningService";
import MiningandQuarrying from "../Pages/MiningandQuarrying";
import Manufacturing from "../Pages/Manufacturing";
import Construction from "../Pages/Construction";
import Agriculture from "../Pages/Agriculture";
import Transportation from "../Pages/Transportation";
import ForgotPasswordEmail from "../Pages/ForgotPasswordEmail";
import ForgotPasswordForm from "../Pages/ForgotPasswordForm";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicesandproducts" element={<ServicesandProducts />} />
      <Route path="/import" element={<Import />} />
      <Route path="/export" element={<Export />} />
      <Route path="/oilseeds" element={<Oilseeds />} />
      <Route path="/coffeeandtea" element={<Coffeandtea />} />
      <Route path="/pulses" element={<Pulses />} />
      <Route path="/spices" element={<Spices />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/cereals" element={<Cereals />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/companyProfile" element={<CompanyProfile />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/minerals" element={<Minerals />} />
      <Route path="/cleaningservice" element={<CleaningService />} />
      <Route path="/miningandquarrying" element={<MiningandQuarrying />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/construction" element={<Construction />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/forgot-password" element={<ForgotPasswordEmail />} />
      <Route path="/reset-password" element={<ForgotPasswordForm />} />
      {/* Redirect logged-in users to /home if they try to visit /login */}
      <Route
        path="/login"
        element={token ? <Navigate to="/" replace /> : <Login />}
      />

      {/* Admin Protected Routes */}
      <Route
        path="/upload"
        element={
          <ProtectedRoute role="adminOrmoderator" route="upload">
            <Upload />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createUsers"
        element={
          <ProtectedRoute role="admin">
            <CreateUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewUsers"
        element={
          <ProtectedRoute role="admin">
            <ViewUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewContact"
        element={
          <ProtectedRoute role="admin">
            <ViewContact />
          </ProtectedRoute>
        }
      />

      {/* Catch-all route for unmatched paths */}
      <Route
        path="*"
        element={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h1
              style={{ fontSize: "3rem", marginBottom: "10px", color: "#333" }}
            >
              404
            </h1>
            <p style={{ color: "#666", fontSize: "1.2rem" }}>
              Sorry, the page you are looking for does not exist.
            </p>
            <a
              href="/"
              style={{
                marginTop: "20px",
                textDecoration: "none",
                background: "#1890ff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Go Home
            </a>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
