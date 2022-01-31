import Alert from '../components/Alert';
import BannerGroup from '../components/BannerGroup';
import BrandBorder from '../components/BrandBorder';
import DealOfDay from '../components/DealOfDay';
import IntroSlider from '../components/IntroSlider';
import Layout from '../components/Layout';
import ProductFeatures from '../components/ProductFeatures';
import TopSelling from '../components/TopSelling';

export default function Home(props) {
  const { products } = props;

  return (
    <Layout pageTitle="main page">
      <main className="main">
        <IntroSlider />
        <BrandBorder />
        <div className="mb-3 mb-lg-5"></div>
        <BannerGroup />
        <div className="mb-3"></div>
        <ProductFeatures />
        <div className="mb-5"></div>
        <DealOfDay />
        <div className="mb-6"></div>
        <TopSelling />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const DUMMPY_PRODUCT = {
    name: 'prod 1',
    image:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    images: [],
    brand: 'samsung',
    price: '11.99',
    category: 'main cat',
    amount: 20,
    description: 'this is some descriptions...',
    rating: 5,
    numReviews: 1,
    reviews: [
      {
        name: 'review 1',
        rating: 4,
        comment: 'this product is very good one.',
      },
    ],
  };

  return {
    props: {
      products: [DUMMPY_PRODUCT, DUMMPY_PRODUCT, DUMMPY_PRODUCT],
    },
  };
}
