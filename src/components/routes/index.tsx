import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/page/auth/login";
import SignUp from "@/page/auth/signup";
import Main from "@/page/main";
import Product from "@/page/product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
          <Route path={paths.main} element={<Main />} />
          <Route path={paths.product} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
