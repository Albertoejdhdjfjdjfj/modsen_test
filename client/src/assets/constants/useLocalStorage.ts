import { Feature } from '../../redux/reducers/interfaces';
import { useState } from 'react';

export function useLocalStorage(
  arrayName: string = 'favorites'
): [Array<Feature>, (el: Feature) => void, (el: Feature) => void] {
  const arr = localStorage.getItem(arrayName);
  const data: Array<Feature> = arr ? JSON.parse(arr) : null;
  const [array, setArray] = useState<Array<Feature>>(data || []);

  const addElement = (el: Feature) => {
    const newArray = [...array, el];
    setArray(newArray);
    localStorage.setItem(arrayName, JSON.stringify(newArray));
  };

  const deleteElement = (el: Feature) => {
    const newArr = array.filter(
      (item) => el.properties.CompanyMetaData.id !== item.properties.CompanyMetaData.id
    );
    setArray(newArr);
    localStorage.setItem(arrayName, JSON.stringify(newArr));
  };

  return [array, addElement, deleteElement];
}
