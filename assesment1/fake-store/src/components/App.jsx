import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Product from "../pages/Product"
import Footer from "./Footer"
import config from "../config"
import "./App.css"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={`${config.base}/`} element={<Home />} />
      <Route path={`${config.base}/about`} element={<About />} />
      <Route path={`${config.base}/product-detail/:id`} element={<Product />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
