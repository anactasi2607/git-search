import React, { useContext, useState } from 'react';
import {AlertContext} from '../context/alert/AlertContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);
  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      console.log('Make request with: ', value);
    } else {
      show('Введите данные пользователя!');
    }
  }

  return (
    <div>
      <input 
        type="text"
        className="form-control mb-4"
        placeholder="Введите ник пользователя"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}