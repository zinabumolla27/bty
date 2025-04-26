import React from "react";
import { Route, Routes } from "react-router-dom";
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
import Peppers from "../Pages/Pepper";
import ViewContact from "../Pages/ViewContacts";
import AddtionalServices from "../Pages/AddtionalServices";
import ManageUsers from "../Pages/ManageUsers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicesandproducts" element={<ServicesandProducts />} />
      <Route path="/import" element={<Import />} />
      <Route path="/export" element={<Export />} />
      <Route path="/oilseeds" element={<Oilseeds />} />
      <Route path="/coffeantea" element={<Coffeandtea />} />
      <Route path="/pulses" element={<Pulses />} />
      <Route path="/spices" element={<Spices />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/cereals" element={<Cereals />} />
      <Route path="/peppers" element={<Peppers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/CompanyProfile" element={<CompanyProfile />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/viewContact" element={<ViewContact />} />
      <Route path="/addtionalservices" element={<AddtionalServices />} />
      <Route path="/manageusers" element={<ManageUsers />} />

      {/* Catch-all route for unmatched routes */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
