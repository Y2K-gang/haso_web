import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/page/auth/login";
import SignUp from "@/page/auth/signup";
import Main from "@/page/main";
import ProductEdit from "@/page/product/edit";
import ProductWrite from "@/page/product/register";
import ProductDetail from "@/page/product/detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
          <Route path={paths.main} element={<Main />} />
          <Route path={paths.productDetail} element={<ProductDetail />} />
          <Route path={paths.productEdit} element={<ProductEdit />} />          
          <Route path={paths.productWrite} element={<ProductWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
