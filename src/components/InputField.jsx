import React from 'react';
import style from './App.module.css';

export const InputField = ({ name, label, error, value, onChange, ...props }) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input name={name} value={value} onChange={onChange} {...props} />
			{error && <span className={style.error}>{error}</span>}
		</>
	);
};
