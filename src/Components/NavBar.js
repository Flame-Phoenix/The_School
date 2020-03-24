import React, { useState } from 'react';
import { Menu, Icon, Layout, Avatar } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Modal, Button } from 'antd';
import Login from './Login';

const { Header } = Layout;
const { SubMenu } = Menu;
export default function NavBar() {
  const [state, setState] = useState({ current: 'mail', });
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClick = e => {
    console.log('click ', e);
    setState({
      current: e.key,
    });
  };

  const showModal = () => {
    setModal(true);
  };

  const handleOk = e => {
    setModal(false);
  };

  const handleCancel = e => {
    setModal(!modal);
  };

  return (
    <Layout>
    {/* try use flexbox on header */}
      <Layout > 
        <Header>
          {(login != false) ? (<Avatar style={{ float: 'right' }} src='./dp.png' />) : (
            <div style={{ float: 'right'}}>
              <Button type="primary" onClick={showModal}>
                Login
              </Button>
              <Modal
                title="Login"
                visible={modal}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Login />
              </Modal>
            </div>
          )}
          <Title style={{paddingTop:10}} level={2}>
            <Link to="/">{"School"}</Link>
          </Title>
        </Header>
      </Layout>
      <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal" style={{ margin: 2 }}>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Ανακοινώσεις"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Δομή Σχολείου"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Μαθήματα"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Ερευν.Εργασίες"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Εκδηλώσες-Εκδρομές"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Δράσεις"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Εφημερίδα"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu><SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              <Link to="/" variant="body2">
                {"Επικοινωνία"}
              </Link>

            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

      </Menu>

    </Layout>
  );
}



