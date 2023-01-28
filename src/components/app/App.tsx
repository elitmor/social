import "antd/dist/reset.css";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import { initializeApp } from "../../redux/app-reducer";
import { AppStateType } from "../../redux/store";
import { LoginPage } from "../login/LoginPage";
import { UsersPage } from "../users/UsersContainer";
import "./App.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";
import { Header } from "../header/Header";

const { Content, Footer, Sider } = Layout;

const ProfileContainer = lazy(() => import("../profile/ProfileContainer"));

const DialogsContainer = lazy(() => import("../dialogs/DialogsContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>;

type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occurred");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <Layout>
          <Header />
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: "24px 0" }}>
              <Sider width={200}>
                <Menu mode='inline' style={{ height: "100%" }}>
                  <SubMenu
                    key='sub1'
                    icon={<UserOutlined />}
                    title='My Profile'
                  >
                    <Menu.Item key='1'>
                      <Link to='/profile'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                      <Link to='/dialog'>Messages</Link>
                    </Menu.Item>
                    <Menu.Item key='3'>option3</Menu.Item>
                    <Menu.Item key='4'>option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key='sub2'
                    icon={<LaptopOutlined />}
                    title='Developers'
                  >
                    <Menu.Item key='5'>
                      <Link to='/developers'>Developers</Link>
                    </Menu.Item>
                    <Menu.Item key='6'>option6</Menu.Item>
                    <Menu.Item key='7'>option7</Menu.Item>
                    <Menu.Item key='8'>option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key='sub3'
                    icon={<NotificationOutlined />}
                    title='subnav 3'
                  >
                    <Menu.Item key='9'>option9</Menu.Item>
                    <Menu.Item key='10'>option10</Menu.Item>
                    <Menu.Item key='11'>option11</Menu.Item>
                    <Menu.Item key='12'>option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Suspense
                  fallback={
                    <div>
                      <Preloader />
                    </div>
                  }
                >
                  <Routes>
                    <Route
                      path='/profile/:userId'
                      element={<ProfileContainer />}
                    />
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/dialog/*' element={<DialogsContainer />} />
                    <Route
                      path='/developers'
                      element={<UsersPage pageTitle={"Самураи"} />}
                    />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='*' element={<div>404 NOT FOUND</div>} />
                    <Route path='/' element={<Navigate to='/profile' />} />
                  </Routes>
                </Suspense>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
