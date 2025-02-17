import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/main/Home";
import AboutUs from "./pages/main/AboutUs";
import GetInvolved from "./pages/main/GetInvolved";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Events from "./pages/main/Events";
import Contact from "./pages/main/Contact";
import Login from "./pages/main/Login";
import Register from "./pages/main/Register";
import AdminNav from "./components/admin/AdminNav";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminUser from "./pages/admin/AdminUser";
import AdminPartner from "./pages/admin/AdminPartner";
import AdminBoard from "./pages/admin/AdminBoard";
import Donations from "./pages/admin/Donations";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminHome from "./pages/admin/AdminHome";
import AdminAbout from "./pages/admin/AdminAbout";
import AdminInvolved from "./pages/admin/AdminInvolved";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContactus from "./pages/admin/AdminContactus";
import AdminCalendar from "./pages/admin/AdminCalender";

function App() {
  return (
    <Router>
      <div
        className={` items-center ${
          location.pathname.startsWith("/admin")
            ? ""
            : "min-h-screen flex flex-col"
        }`}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin/register" element={<AdminRegister />} />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="users" element={<AdminUser />} />
            <Route path="partners" element={<AdminPartner />} />
            <Route path="board" element={<AdminBoard />} />
            <Route path="donations" element={<Donations />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="get-involved" element={<AdminInvolved />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="contact" element={<AdminContactus />} />
            <Route path="cal" element={<AdminEvents />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// Layout for the main website
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the child routes (main routes) */}
      <Footer />
    </>
  );
};

// Layout for the admin dashboard
const AdminLayout = () => {

  return (
    <>
      {<AdminNav />}

      <div className={`md:ml-[270px] mt-[90px] ml-0 md:mr-[10px] mb-5 `}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
