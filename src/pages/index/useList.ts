import {useState} from 'react';

export const useList = <T>() => {
  const [list, setList] = useState<Array<T>>([]);

  const addNew = (item) => {
    const newList = [...list, item];
    console.log(newList);
    setList(newList);
  };

  const removeByIndex = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    console.log(newList);
    setList(newList);
  }

  const editListItem = (index, value) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  }

  return {list, addNew, removeByIndex, editListItem};
}