import { Fragment } from 'react';
import GridProduct from './GridProduct';

function ProductFeaturesProducts({ products }) {
  return (
    <Fragment>
      {products.map(product => (
        <GridProduct product={product} />
      ))}
    </Fragment>
  );
}

export default ProductFeaturesProducts;
