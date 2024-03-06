import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';

import ArrowIcon from '../../assets/ArrowIcon';
import closeSvg from '../../assets/close.svg';

import { CategoryType } from '..';

type DropdownPropsType = {
  dropdownItems: CategoryType[];
  image: string;
  placeholder: string;
  activeValue: CategoryType;
  setActiveValue: (value: CategoryType) => void;
};

export const Dropdown: React.FC<DropdownPropsType> = ({
  dropdownItems,
  image,
  placeholder,
  activeValue,
  setActiveValue,
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  const initialValue = { id: -1, name: placeholder };

  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsOpen(!isOpen);
  };

  const onValueClick = (value: CategoryType) => {
    setIsOpen(false);
    setActiveValue(value);
  };

  const onResetClick = () => {
    setIsOpen(false);
    setActiveValue(initialValue);
  };

  const checkIfClickedOutside = useCallback((event: MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      checkIfClickedOutside(event);
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [checkIfClickedOutside]);

  return (
    <div ref={dropDownRef} className={`${styles.inputWrapper} ${isOpen ? styles.active : ''}`}>
      <div
        className={`${styles.dropdownMenu} ${activeValue.id === -1 ? styles.placeholder : ''}`}
        onClick={() => toggleActive()}>
        {activeValue.name}
      </div>

      <ul>
        {dropdownItems.map((el) => (
          <li onClick={() => onValueClick(el)} key={el.id}>
            {el.name}
          </li>
        ))}
      </ul>

      <img className={styles.categorySvg} src={image} alt="Icon" />
      {activeValue.id !== -1 ? (
        <img
          className={styles.arrowSvg}
          onClick={() => onResetClick()}
          src={closeSvg}
          alt="Close icon"
        />
      ) : (
        <ArrowIcon className={styles.arrowSvg} />
      )}
    </div>
  );
};
