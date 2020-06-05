import React, {Fragment} from 'react';
import {Button, Typography} from "antd";
import {SafetyCertificateOutlined, BarChartOutlined, SketchOutlined} from "@ant-design/icons";
import styles from "./style.module.scss";

const { Title, Text } = Typography;

const HomePage = () => {
    return (
        <Fragment>
            <div className={styles.banner}>
                <img className="fullWidth" src="/images/header.JPG" alt="منسا"/>
                <div className={styles.bannerTitle}>
                    <Title level={2}>پلتفرم منسا</Title>
                    <Title level={4}>با منسا فروشگاه و کسب‌و‌کار اینترنتی خود را گسترش دهید.</Title>
                </div>
            </div>
            <div className={styles.page}>
                <Title level={3}>منسا چیست؟:</Title>
                <Text>منسا بستری امن و معتبر برای فروش محصولات توسط فروشگاه‌ها و کسب‌و‌کار‌ها می‌باشد. همچنین با ارائه اطلاعات آماری به فروشندگان، به گسترش آن‌ها کمک می‌کند.</Text>
                <img className="fullWidth" src="/images/banner.png" alt="ecommerce"/>
                <Title level={3}>چرا منسا؟:</Title>
                <Text>با پیشرفت روزافزون کسب‌و‌کار‌های اینترنتی و فروشگاه‌ها؛ نیاز به بستری امن و با آسایش برای کاربران احساس می‌شود. منسا با تضمین فرآیند فروش، بستری امن و راحت را برای فروش محصولات فروشگاه‌های اینستاگرامی و تلگرامی فراهم نموده است.</Text>
                <div className="text-center">
                    <SafetyCertificateOutlined className={styles.icon} />
                    <Title level={4}>پرداخت امن</Title>
                    <BarChartOutlined className={styles.icon} />
                    <Title level={4}>اطلاعات آماری</Title>
                    <SketchOutlined className={styles.icon} />
                    <Title level={4}>ضمانت کیفیت</Title>
                </div>
            </div>
            <div className={styles.login}>
                <Title level={3}>فروشنده هستید؟</Title>
                <Button shape={"round"} size={"large"}>ورود به پنل فروشندگان</Button>
            </div>
        </Fragment>
    );
}

export default HomePage;