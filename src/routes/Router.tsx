import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/page/auth/login";
import SignUp from "@/page/auth/signup";
import Main from "@/page/main";
import ProductEdit from "@/page/product/edit";
import ProductWrite from "@/page/product/register";
import ProductDetail from "@/page/product/detail";
import UserInfo from "@/page/myInfo/UserInfo";
import MyPosts from "@/page/myInfo/myPosts";
import InfoEdit from "@/page/myInfo/infoEdit";
import ClientList from "@/page/manage/clientList";
import BusinessHistory from "@/page/manage/businessHistory";
import Statement from "@/page/manage/statement";
import ProviderPage from "@/page/manage/provider";
import ReceiverPage from "@/page/manage/receiver";
import AddClient from "@/page/manage/addClient";
import AddBusiness from "@/page/manage/addBusiness";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.signup} element={<SignUp />} />
      <Route path={paths.main} element={<Main />} />
      <Route path={paths.clientList} element={<ClientList />} />
      <Route path={paths.businessHistory} element={<BusinessHistory />} />
      <Route path={paths.statement} element={<Statement />} />
      <Route path={paths.statementProvider} element={<ProviderPage />} />
      <Route path={paths.statementReceiver} element={<ReceiverPage />} />
      <Route path={paths.addClient} element={<AddClient />} />
      <Route path={paths.addBusiness} element={<AddBusiness />} />
      <Route path={paths.productDetail} element={<ProductDetail />} />
      <Route path={paths.productEdit} element={<ProductEdit />} />
      <Route path={paths.productWrite} element={<ProductWrite />} />
      <Route path={paths.myInformation} element={<UserInfo />} />
      <Route path={paths.myPosts} element={<MyPosts />} />
      <Route path={paths.infoEdit} element={<InfoEdit />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
