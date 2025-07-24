import { useState } from 'react';
import { RegisterFormLayout } from './RegisterFormLayout';

const sendData = (formData) => {
    console.log(formData);
};

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [errors, setErrors] = useState({});

	const emailRegularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

	const onSubmit = (event) => {
		event.preventDefault();

        const newErrors = {};

		if (!emailRegularEx.test(formData.email)) {
			newErrors.email = 'Неверный формат почты';
		}

		if (formData.password.length < 3) {
			newErrors.password = 'Слишком легкий пароль. Должно быть не меньше 3 символов';
		}

		if (formData.password !== formData.repeatPassword) {
			newErrors.repeatPassword = 'Пароли не совпадают';
		}

        if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return
		}

		setErrors({});
        sendData(formData);


	};

	return (
		<RegisterFormLayout formData={formData} errors={errors} onSubmit={onSubmit}/>
	);
};
