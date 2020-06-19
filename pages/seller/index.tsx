import React, {useState} from "react";
import SellerDrawer from "../../components/SellerDrawer";
import ProductCard from "../../components/ProductCard";

const Seller = ({products}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.code} product={product} />
            ))}
            <SellerDrawer
                visible={showDrawer}
                onClose={() => setShowDrawer(false)}
            />
        </div>
    );
};

export const getServerSideProps = async (context) => {
    return {
        props: {
            products: [
                {
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
                },
                {
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
                },
                {
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
            ],
        }
    };
};

export default Seller;