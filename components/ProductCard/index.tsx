import React from "react";
import {Avatar, Card} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import styles from "./style.module.scss";

const { Meta } = Card;

interface ISeller {
    name: string;
    icon: string;
    instagramId: string;
    description: string;
}

interface IProduct {
    link: string;
    images: Array<string>;
    title: string;
    code: string;
    price: number;
    description: string;
    seller: ISeller;
}

interface IProductCard {
    product: IProduct;
}
const ProductCard: React.FC<IProductCard> = (props: IProductCard) => {
    const { product } = props;
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    );
};

export default ProductCard;