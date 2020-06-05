import React from "react";
import {Button, Carousel, Typography} from "antd";
import styles from "./style.module.scss";

const { Title, Text, Link } = Typography;

const Product = (props) => {
    const { product } = props;
    const { images, title, code, price, rate, seller, description } = product;
    return (
        <div className={styles.page}>
            <Carousel className={styles.carousel}>
                {images.map(image => (
                    <div>
                        <div className={styles.sliderItem} style={{ backgroundImage: `url(${image})` }}/>
                    </div>
                ))}
            </Carousel>
            <div className={styles.container}>
                <Title level={3} className={styles.title}>{title}</Title>
                <div className={styles.rateContainer}>
                    <Text code className={styles.code}>{code}</Text>
                    <Title level={4} className={styles.price}>{`قیمت: ${price} تومان`}</Title>
                </div>
                <span><Text>فروشنده: </Text><Link href={`https://instagram.com/${seller.instagramId}`}>{seller.name}</Link></span>
            </div>
            <div className={styles.container}>
                <Title level={4}>جزئیات محصول:</Title>
                <Text>{description}</Text>
            </div>
            <div className={styles.buyContainer}>
                <Button className={styles.buy} type="primary" shape="round" size={"large"}>خرید</Button>
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
                code: 'ADS-4659',
                price: 100000,
                rate: 3,
                seller: {
                    instagramId: 'kiagallery',
                    name: 'کیا گالری',
                },
                description: 'سنجاق سینه پرنده برنجی که خیلی قشنگ و جا داره، میتونی تو مهمونی ها بندازیش و حالشو ببری.' +
                    'این چرتو پرت رو دارم از ذهن خودم بلغور میکنم در نتیجه چیز جالبی برای خوندن نیست و صرف برای پر کردن فضاست.'
            }
        },
    }
}

export default Product;