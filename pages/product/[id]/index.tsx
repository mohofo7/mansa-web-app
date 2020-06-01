import React from "react";
import { Carousel } from "antd";
import styles from "./style.module.scss";

const Product = (props) => {
    const { id } = props;
    return (
        <Carousel autoplay>
            <div>
                <img src="http://kia-gallery.com/Images/Gallery/SProductT_6685.jpg" alt="1"/>
            </div>
            <div>
                <img src="http://kia-gallery.com/Images/Gallery/SProductT_6685.jpg" alt="1"/>
            </div>
        </Carousel>
    );
};

export const getServerSideProps = async (context) => {
    console.log(context.params);
    return {
        props: { id: context.params.id },
    }
}

export default Product;