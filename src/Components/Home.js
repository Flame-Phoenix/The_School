import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Carousel, Drawer } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import './Home.css';
import Announcements from './Αnnouncements';
import MessageList from './MessageList';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false)

  function showDrawer() {
    setVisible(true);
  };

  function onClose() {
    setVisible(false);
  };

  return (
    <div className="App">
      <Layout>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
            <div  style={{position: 'sticky',top: '95%'}}
            className="site-drawer-render-in-current-wrapper">
              <div style={{ marginTop: 16 ,}}>
                <Button  
                type="primary" onClick={showDrawer}>
                  Messanger
                </Button>
              </div>
            </div>
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={true}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                style={{ position: 'absolute' }}
              >
                <MessageList/>
            </Drawer>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
                <strong>Ανακοινώσεις</strong>
                <div>
                  <Announcements />
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout Created by FlamePhoenix</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
