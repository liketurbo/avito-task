import React, { useEffect, useState } from 'react';

import Card, { ICard } from '../components/Card';
import Grid from '../components/Grid';
import { ISeller } from '../components/Seller';
import useFetch from '../hooks/useFetch';

export default () => {
  const [combined, setCombined] = useState<any>([]);

  const { data: products } = useFetch<ICard[]>(
    'https://avito.dump.academy/products'
  );
  const { data: sellers } = useFetch<ISeller[]>(
    'https://avito.dump.academy/sellers'
  );

  useEffect(() => {
    if (products && sellers) {
      setCombined(
        products.map(product => {
          const sellerId = product.relationships.seller;
          const seller = sellers.find(({ id }) => id === sellerId);

          return { ...product, seller };
        })
      );
    }
  }, [products, sellers]);

  return (
    <Grid>
      {combined.length > 0 &&
        combined
          .slice(1, 15)
          .map((product: any) => <Card key={product.id} {...product} />)}
    </Grid>
  );
};
