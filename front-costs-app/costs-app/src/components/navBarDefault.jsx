import { useState } from "react";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout"
import AvatarUsers from "./avatarUsers";

const menuItems = [
    {
        key: 1,
        label: 'Inicio',
        url: ''
    },
    {
        key: 2,
        label: 'Guia',
        url: ''
    },
    {
        key: 3,
        label: 'Mi Negocio',
        url: ''
    }
];

function NavBarDefault() {

    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Header
            style={{
            display: 'flex',
            flexDirection: 'rows',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            }}
        > 
            <div className="demo-logo" />
            <Menu
                inlineCollapsed = {false}
                onClick = {onClick}
                selectedKeys = {{current}}
                mode = "horizontal"
                items = {menuItems}
                style={{flexBasis:'40%', justifyContent:'space-evenly'}}
            />
            <AvatarUsers/>
        </Header>
    )
}

export default NavBarDefault