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

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const isFormValid = Object.keys(errors).length === 0 && formData.email !== '' && formData.password !== '' && formData.repeatPassword !== '';

	return (
		<RegisterFormLayout formData={formData} setFormData={setFormData} errors={errors} onSubmit={onSubmit} onChange={handleChange} isFormValid={isFormValid} />
	);
};
