import axios from 'axios';
import produce from 'immer';
import React, { Reducer, useEffect, useReducer } from 'react';
import Select from 'react-select';

import Card, { ICard } from '../components/Card';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Loading from '../components/Loading';

const reducer: Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      // Set loading status
      return produce(state, (draft: any) => {
        draft.loading = action.payload;
      });
    case 'SET_ERROR':
      // Set error status
      return produce(state, (draft: any) => {
        draft.error = action.payload;
      });
    case 'SET_ALL_DATA':
      // Only once, stores all data
      return produce(state, (draft: any) => {
        draft.allData = action.payload.products.map((product: any) => {
          const sellerId = product.relationships.seller;
          const seller = action.payload.sellers.find(
            ({ id }: any) => id === sellerId
          );

          return { ...product, seller };
        });

        draft.renderData = draft.allData;
      });
    case 'SET_RENDER_DATA_BY_SORT':
      return produce(state, (draft: any) => {
        /**
         * 1. Save in the state currently selected sort option
         * 2. Sort data already sorted by category
         */
        draft.sorted = action.payload[0];

        switch (action.payload[0]) {
          case 'default':
            draft.renderData = draft.allData.filter(
              (value: ICard) =>
                value.category === draft.categorized ||
                draft.categorized === 'all' // hack if category set to 'all'
            );
            break;
          case 'favorite':
            draft.renderData = state.renderData.filter((value: ICard) =>
              action.payload[1].includes(value.id)
            );
            break;
          case 'cheap':
            draft.renderData = draft.renderData.sort(
              (a: any, b: any) => a.price - b.price
            );
            break;
          case 'expensive':
            draft.renderData = draft.renderData.sort(
              (a: any, b: any) => b.price - a.price
            );
            break;
        }
      });
    case 'SET_RENDER_DATA_BY_CATEGORY':
      return produce(state, (draft: any) => {
        /**
         * 1. Save in the state currently selected sort option
         * 2. Sort data by category
         */
        draft.categorized = action.payload[0];

        switch (action.payload[0]) {
          case 'all':
            draft.renderData = draft.allData;
            break;
          case 'immovable':
            draft.renderData = draft.allData.filter(
              (value: ICard) => value.category === 'immovable'
            );
            break;
          case 'cameras':
            draft.renderData = draft.allData.filter(
              (value: ICard) => value.category === 'cameras'
            );
            break;
          case 'auto':
            draft.renderData = draft.allData.filter(
              (value: ICard) => value.category === 'auto'
            );
            break;
          case 'laptops':
            draft.renderData = draft.allData.filter(
              (value: ICard) => value.category === 'laptops'
            );
            break;
        }
      });
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: false,
    sorted: 'default',
    categorized: 'all',
    allData: [],
    renderData: []
  });

  useEffect(() => {
    try {
      const requests = [];

      requests.push(
        axios('https://avito.dump.academy/products').then(res => res.data.data)
      );
      requests.push(
        axios('https://avito.dump.academy/sellers').then(res => res.data.data)
      );

      Promise.all(requests).then(([products, sellers]) => {
        dispatch({ type: 'SET_ALL_DATA', payload: { products, sellers } });
        dispatch({ type: 'SET_LOADING', payload: false });
      });
    } catch {
      dispatch({ type: 'SET_ERROR', payload: true });
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return state.loading ? (
    <Loading />
  ) : (
    <>
      <Header>
        <Select
          styles={{
            container: base => ({
              ...base,
              flexBasis: 170
            })
          }}
          defaultValue={{ value: 'default', label: 'По умолчанию' }}
          options={[
            { value: 'default', label: 'По умолчанию' },
            { value: 'favorite', label: 'Избранные' },
            { value: 'cheap', label: 'Дешевле' },
            { value: 'expensive', label: 'Дороже' }
          ]}
          onChange={async (option: any) => {
            await dispatch({
              type: 'SET_RENDER_DATA_BY_CATEGORY',
              payload: [state.categorized]
            });
            await dispatch({
              type: 'SET_RENDER_DATA_BY_SORT',
              payload: [
                option.value,
                JSON.parse(localStorage.getItem('favorites') || '[]')
              ]
            });
          }}
        />
        <Select
          onChange={async (option: any) => {
            await dispatch({
              type: 'SET_RENDER_DATA_BY_CATEGORY',
              payload: [option.value]
            });
            await dispatch({
              type: 'SET_RENDER_DATA_BY_SORT',
              payload: [
                state.sorted,
                JSON.parse(localStorage.getItem('favorites') || '[]')
              ]
            });
          }}
          styles={{
            container: base => ({
              ...base,
              flexBasis: 170
            })
          }}
          defaultValue={{ value: 'all', label: 'Все' }}
          options={[
            { value: 'all', label: 'Все' },
            { value: 'immovable', label: 'Недвижимость' },
            { value: 'cameras', label: 'Фотоаппараты' },
            { value: 'auto', label: 'Автомобили' },
            { value: 'laptops', label: 'Ноутбуки' }
          ]}
        />
      </Header>
      <Grid>
        {state.renderData.map((product: any) => (
          <Card key={product.id} {...product} />
        ))}
      </Grid>
    </>
  );
};
