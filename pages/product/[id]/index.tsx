import React from "react";
import {Button, Carousel, Typography} from "antd";
import {InstagramFilled} from "@ant-design/icons";
import styles from "./style.module.scss";

const { Title, Text, Link } = Typography;

const Product = (props) => {
    const { product } = props;
    const { images, title, code, price, seller, description, link } = product;
    return (
        <div className={styles.page}>
            <Carousel className={styles.carousel} autoplay>
                {images.map((image, i) => (
                    <div key={i}>
                        <div className={styles.sliderItem} style={{ backgroundImage: `url(${image})` }}/>
                    </div>
                ))}
            </Carousel>
            <div className={styles.container}>
                <Title level={3} className={styles.title}>{title}</Title>
                <Title level={4} className={styles.price}>{`قیمت: ${price} تومان`}</Title>
                <div className={styles.rateContainer}>
                    <span><Text>فروشنده: </Text><Link href={`https://instagram.com/${seller.instagramId}`}>{seller.name}</Link></span>
                    <Text code className={styles.code}>{code}</Text>
                </div>
            </div>
            <div className={styles.container}>
                <Title level={4}>جزئیات محصول:</Title>
                <Text>{description}</Text>
            </div>
            <div className={styles.container}>
                <div className={styles.sellerHeader}>
                    <img src={seller.icon} alt={seller.name} className={styles.sellerIcon} />
                    <Title level={4} className="my-auto">درباره <Link href={`https://instagram.com/${seller.instagramId}`}>{seller.name}</Link>:</Title>
                </div>
                <Text>{seller.description}</Text>
            </div>
            <div className={styles.buyContainer}>
                <Button className={styles.buy} type="primary" shape="round" size={"large"}>خرید</Button>
                <Link href={link}>
                    <Button shape="circle" icon={<InstagramFilled className={styles.instagramIcon} />} size={"large"}/>
                </Link>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    console.log(context.params);
    return {
        props: {
            product: {
                link: 'https://www.instagram.com/p/CA2Q7MGBbVg',
                images: ['http://kia-gallery.com/Images/Gallery/SProductT_6685.jpg', 'http://kia-gallery.com/Images/Gallery/SProductT_1165.jpg'],
                title: 'سنجاق سینه پرنده برنجی',
                code: 'ADS-4659',
                price: 100000,
                seller: {
                    instagramId: 'kiagallery',
                    name: 'کیا گالری',
                    icon: 'http://kia-gallery.com/images/KiaGalleryLogo.svg',
                    description: 'کیاگالری یه گالری خوبه که محصولات جالبی داره و به نظرم سایت ما اصلا براش اهمیتی نداره'
                },
                description: 'سنجاق سینه پرنده برنجی که خیلی قشنگ و جا داره، میتونی تو مهمونی ها بندازیش و حالشو ببری.' +
                    'این چرتو پرت رو دارم از ذهن خودم فوران میدم در نتیجه چیز جالبی برای خوندن نیست و صرف برای پر کردن فضاست.'
            }
        },
    }
}

export default Product;