import React from "react";
import { Carousel } from "antd";
import styles from "./style.module.scss";

const Product = (props) => {
    const { product } = props;
    const { images, title, price } = product;
    return (
        <div className={styles.page}>
            <Carousel className={styles.carousel}>
                {images.map(image => (
                    <div className="ann">
                        <div className={styles.sliderItem} style={{ backgroundImage: `url(${image})` }}/>
                    </div>
                ))}
            </Carousel>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.price}>{price}</div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    console.log(context.params);
    return {
        props: {
            product: {
                images: ['http://kia-gallery.com/Images/Gallery/SProductT_6685.jpg', 'http://kia-gallery.com/Images/Gallery/SProductT_1165.jpg'],
                title: 'سنجاق سینه پرنده برنجی',
                price: 100000
            }
        },
    }
}

export default Product;