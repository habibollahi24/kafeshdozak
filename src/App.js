import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import CartContext from "./context/cart/CartContext";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthContext from "./context/Auth/AuthContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <AuthContext>
        <CartContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/blogs/:id" element={<Blog />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <ToastContainer />
          </Layout>
        </CartContext>
      </AuthContext>
    </>
  );
}

export default App;
