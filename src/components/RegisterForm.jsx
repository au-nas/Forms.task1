import { useRef } from 'react';
import { RegisterFormLayout } from './RegisterFormLayout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	email: yup.string().email('Неверный формат почты'),
	password: yup
		.string()
		.min(3, 'Слишком легкий пароль.Должно быть не меньше 3 символов'),
	repeatPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const RegisterForm = () => {
	const submitButtonRef = useRef(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);

		if (submitButtonRef.current) {
			submitButtonRef.current.focus();
		}
	};

	const emailError = errors.email?.message;
const passwordError = errors.password?.message;
const repeatPasswordError = errors.repeatPassword?.message;


	return (
		<RegisterFormLayout
			register={register}
			onSubmit={handleSubmit(onSubmit)}
			isFormValid={isValid}
			submitButtonRef={submitButtonRef}
			emailError={emailError}
			passwordError={passwordError}
            repeatPasswordError={repeatPasswordError}
		/>
	);
};
