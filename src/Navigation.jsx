import { Route, Routes } from "react-router-dom";
import Errorpage from "./pages/Error/Errorpage";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

import Hotels from "./pages/Hotels/Hotels";
import Flights from "./pages/Flights/Flights";
import Carrentals from "./pages/CarRent/Carrentals";
import AirportTransfer from "./pages/Airport/AirportTransfer";

import Hotel from "./pages/Hotel/Hotel";
import Car from "./pages/Car/Car";

import Contact from "./pages/Help/Contact";
import FAQ from "./pages/Help/FAQ";
import PrivacyPolicy from "./pages/Help/PrivacyPolicy";




export default function Navigation() {
  return (
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Hotels />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/carrentals" element={<Carrentals />} />
        <Route path="/airporttransfer" element={<AirportTransfer />} />

        <Route path="/hotels/shangrila" element={<Hotel />} />
        <Route path="/carrentals/1a" element={<Car />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}
