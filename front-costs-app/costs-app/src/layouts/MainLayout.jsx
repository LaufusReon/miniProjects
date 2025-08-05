import { Breadcrumb, Layout, theme } from 'antd';
import NavBarDefault from '../components/navBarDefault';
import AvatarUsers from '../components/avatarUsers';
import LoginForm from './loginPage';
import RawMaterialInput from './rawMaterial';
const { Content, Footer } = Layout;



function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{width:'100%'}}>
      <NavBarDefault />
      <Content style={{ padding: '0 48px' }}>
  {/*The compomemts must have to be here */}
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            padding: '3rem',
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
          <LoginForm/>
          <RawMaterialInput/>
        </div>
        <AvatarUsers/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout