import c from 'classnames';
import React, { useEffect, useState } from 'react';
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

const Card = ({ title, price, pictures, id, seller, category }: ICard) => {
  const [favorites, setFavorites] = useState(JSON.parse(
    localStorage.getItem('favorites') || '[]'
  ) as string[]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <article className={s.card}>
      <img className={s.img} src={pictures[0]} alt={category} />
      <a className={s.title} href={`https://avito.dump.academy/products/${id}`}>
        <h1>{title}</h1>
      </a>
      <span className={s.price}>
        {price
          ? `${price
              .toString()
              .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ₽`
          : 'Цена не указана'}
      </span>
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
      {pictures.length > 1 && (
        <span className={s.camera} role="img" aria-label="camera">
          📷 {pictures.length - 1}
        </span>
      )}
      <button
        className={c(s.heart, {
          [s.heart_active]: favorites.includes(id)
        })}
        onClick={() => {
          const stateFavorites = JSON.parse(
            localStorage.getItem('favorites') || '[]'
          ) as string[];

          if (favorites.includes(id)) {
            setFavorites(stateFavorites.filter(v => v !== id));
          } else {
            setFavorites([...stateFavorites, id]);
          }
        }}
      >
        ❤
      </button>
    </article>
  );
};

export default Card;
