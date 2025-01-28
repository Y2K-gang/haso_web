import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/page/auth/login";
import SignUp from "@/page/auth/signup";
import Main from "@/page/main";
import UserInfo from "@/page/myInfo/UserInfo";
import MyPosts from "@/page/myInfo/myPosts";
import InfoEdit from "@/page/myInfo/infoEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
        <Route path={paths.main} element={<Main />} />
        <Route path={paths.myInformation} element={<UserInfo />} />
        <Route path={paths.myPosts} element={<MyPosts />} />
        <Route path={paths.infoEdit} element={<InfoEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
