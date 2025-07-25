import React from 'react';
import style from './App.module.css';

export const InputField = ({ name, label, type, placeholder, error, register}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input name={name} type={type} placeholder={placeholder} {...register(name)} />
			{error && <span className={style.error}>{error}</span>}
		</>
	);
};
