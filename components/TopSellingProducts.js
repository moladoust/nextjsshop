import { Fragment } from 'react';
import GridProduct from './GridProduct';

function TopSellingProducts({ products }) {
  return (
    <Fragment>
      {products.map(product => {
        return (
          <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
            <GridProduct product={product} />
          </div>
        );
      })}
    </Fragment>
  );
}

export default TopSellingProducts;
