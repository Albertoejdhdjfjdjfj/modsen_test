import architecture from '../images/categories/architecture.svg';
import bank from '../images/categories/bank.svg';
import bicycle from '../images/categories/bicycle.svg';
import gas_station from '../images/categories/gas_station.svg';
import car from '../images/categories/car.svg';
import coffee from '../images/categories/coffee.svg';
import culture from '../images/categories/culture.svg';
import different from '../images/categories/other.svg';
import entertainment from '../images/categories/entertainment.svg';
import food from '../images/categories/food.svg';
import history from '../images/categories/history.svg';
import industrial from '../images/categories/industrial.svg';
import for_adults from '../images/categories/for_adults.svg';
import nature from '../images/categories/nature.svg';
import religion from '../images/categories/religion.svg';
import shop from '../images/categories/shop.svg';
import sport from '../images/categories/sport.svg';
import bed from '../images/categories/bed.svg';

export interface Category {
  icon: string;
  text: string;
}

export const categories: Array<Category> = [
  { icon: architecture, text: 'Архитектура' },
  { icon: bank, text: 'Банки' },
  { icon: bed, text: 'Место для сна' },
  { icon: bicycle, text: 'Велосипеды' },
  { icon: gas_station, text: 'Заправки' },
  { icon: car, text: 'Авто' },
  { icon: coffee, text: 'Кофе/чай' },
  { icon: culture, text: 'Культура' },
  { icon: different, text: 'Разное' },
  { icon: entertainment, text: 'Развлечения' },
  { icon: food, text: 'Еда' },
  { icon: history, text: 'История' },
  { icon: industrial, text: 'Заводы' },
  { icon: for_adults, text: '18+' },
  { icon: nature, text: 'Природа' },
  { icon: religion, text: 'Религия' },
  { icon: shop, text: 'Магазины' },
  { icon: sport, text: 'Спорт' }
];
