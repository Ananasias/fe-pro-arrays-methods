import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
/** 1. дОЛЖЕН ВЕРНУТЬ ОТФИЛЬТРОВАНИЕ ПО БРЕНДУ. (БРЕНД) - ЭТО СТРОКА. НУЖНО ВЕРНУТЬ ОТФИЛЬТРОВАННЫЙ МАССИВ, В КОТОРОМ БРЕНД = КОНКРЕТНОМУ БРЕНДУ */
const brandFilter = (brand) => {
  return goods.filter((item) => item.brand === brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const colorFilter = (color) => {
  return goods.filter((item) => item.color === color);
};

/**
 * @param {string} model
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const modelFilter = (model) => {
  return goods.filter((item) => item.model === model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const memoryFilter = (memory) => {
  return goods.filter((item) => item.memory === memory);
};

/**
 * @param {number} price
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const priceFilter = (price) => {
  return goods.filter((item) => item.price === price);
};

/**
 * @param {string} country
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const countryFilter = (country) => {
  return goods.filter((item) => item.country === country);
};

/**
 * @param {string} os
 * @returns {*}
 */
/** ТОЖЕ САМОЕ ЧТО И С БРЕНДОМ */
const osFilter = (os) => {
  return goods.filter((item) => item.os === os);
};

/**
 * @param {number} from
 * @param {number} to
 */
/** ФИЛЬТР ТОВАРОВ ОТ И ВКЛЮЧАЯ ИСПОЛЬЗУЯ ФИЛЬТР */
const rangeFilter = (from, to) => {
  return goods.filter((item) => item.price >= from && item.price <= to);
};

/** ЧЕРЕЗ РЕДЮС ДОЛЖНО ВЕРНУТЬ МИНИМАЛЬНОЕ ЧИСЛО*/
const minPriceReducer = () => {
  return goods.reduce((acc, current) => Math.min(acc, current.price), Infinity);
};

/** ЧЕРЕЗ РЕДЮС МАКСИМАЛЬНОЕ ЧИСЛО */
const maxPriceReducer = () => {
  return goods.reduce((acc, current) => Math.max(acc, current.price), 0);
};

/** СОРТИРОВКА ОТ БОЛЬШЕГО К МЕНЬШЕМУ ЧЕРЕЗ СОРТ*/
const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  });

  // второй вариант return goods.sort((a, b) => b.price - a.price);

};

/** СОРТИРОВКА ОТ МЕНЬШЕГО К БОЛЬШЕМУ*/
const toMinSorter = () => {
  return goods.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });

  // второй вариант return goods.sort((a, b) => a.price - b.price)

};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer
};

export const sorters = {
  toMaxSorter,
  toMinSorter
};
