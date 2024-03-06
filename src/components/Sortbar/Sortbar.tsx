import React, { useEffect, useState } from 'react';

import styles from './Sortbar.module.scss';

import searchSvg from '../../assets/search.svg';
import { Dropdown } from '../Dropdown/Dropdown';
import categorySvg from '../../assets/category.svg';
import sortingSvg from '../../assets/sorting.svg';

export type CategoryType = {
  id: number;
  name: string;
};

const categories = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Clothing',
  },
  {
    id: 2,
    name: 'Toys & Games',
  },
  {
    id: 3,
    name: 'Cell Phones & Accessories',
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
  },
  {
    id: 5,
    name: 'Electronics',
  },
  {
    id: 6,
    name: 'Beauty',
  },
  {
    id: 7,
    name: 'Home & Kitchen',
  },
  {
    id: 8,
    name: 'Health & Personal Care',
  },
  {
    id: 9,
    name: 'Tools & Home Improvement',
  },
  {
    id: 10,
    name: 'Books',
  },
  {
    id: 11,
    name: 'Shoes & Jewelry',
  },
];

const sort = [
  {
    id: 0,
    name: 'Popular',
  },
  {
    id: 1,
    name: 'New',
  },
];

export const Sortbar = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>({
    id: -1,
    name: 'Choose Category',
  });

  const [activeSort, setActiveSort] = useState<CategoryType>({
    id: -1,
    name: 'Sorting',
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };

  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    console.log('activeCategory: ' + activeCategory.name);
    console.log('activeSort: ' + activeSort.name);
  }, [activeCategory, activeSort]);

  return (
    <div className={styles.sortBar}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => onChangeInput(e)}
          placeholder="Search products by name"></input>
        <img className={styles.searchSvg} src={searchSvg} alt="Search icon" />
      </div>

      {searchParam.length === 0 && (
        <Dropdown
          dropdownItems={categories}
          image={categorySvg}
          placeholder="Choose Category"
          activeValue={activeCategory}
          setActiveValue={setActiveCategory}
        />
      )}

      {searchParam.length === 0 && (
        <Dropdown
          dropdownItems={sort}
          image={sortingSvg}
          placeholder="Sorting"
          activeValue={activeSort}
          setActiveValue={setActiveSort}
        />
      )}
    </div>
  );
};
