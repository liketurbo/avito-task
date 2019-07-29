import React from 'react';
import Rating from 'react-rating';

import { ISeller } from '../Seller';
import s from './index.module.scss';

export interface ICard {
  address: {
    lat: number;
    lng: number;
  };
  body_type: string;
  category: string;
  gearbox: string;
  id: string;
  pictures: string[];
  price?: number;
  relationships: {
    seller: string;
  };
  title: string;
  year: number;
  seller: ISeller;
}

const Card = ({ title, price, pictures, id, seller }: ICard) => (
  <article className={s.card}>
    <img className={s.img} src={pictures[0]} alt="" />
    <a className={s.title} href={`https://avito.dump.academy/products/${id}`}>
      <h1>{title}</h1>
    </a>
    <div className={s.price}>
      {price
        ? `${price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ₽`
        : 'Цена не указана'}
    </div>
    <a
      className={s.seller}
      href={`https://avito.dump.academy/sellers/${seller.id}`}
    >
      <span>{seller.name}</span>
    </a>
    <Rating
      readonly
      initialRating={seller.rating}
      emptySymbol={<span className={s.star}>☆</span>}
      fullSymbol={<span className={s.star}>★</span>}
    />
  </article>
);

export default Card;
