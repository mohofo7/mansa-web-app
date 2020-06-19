import React from "react";
import { Drawer, Menu } from 'antd';

const SellerDrawer = ({onClose, visible}) => {
    return (
        <Drawer
            title="پنل فروشنده"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <Menu
                mode="inline"
                onClick={e => console.log(e)}
            >
                <Menu.Item>
                    لیست محصولات شما
                </Menu.Item>
            </Menu>
        </Drawer>
    );
};

export default SellerDrawer;