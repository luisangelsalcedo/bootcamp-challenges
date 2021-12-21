import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import "./App.css"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product-detail/:id" element={<p>Product</p>} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
)

export default App
