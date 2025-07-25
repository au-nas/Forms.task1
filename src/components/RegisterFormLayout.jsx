import { InputField } from './InputField';

export const RegisterFormLayout = ({
	register,
	onSubmit,
	isFormValid,
	submitButtonRef,
	emailError ,
	passwordError,
	repeatPasswordError
}) => {
	return (
		<form onSubmit={onSubmit}>
			<InputField
				name="email"
				type="email"
				placeholder="Почта"
				label="Почта"
				register={register}
				error={emailError}
			></InputField>
			<InputField
				name="password"
				type="password"
				placeholder="Пароль"
				label="Пароль"
				register={register}
				error={passwordError}
			></InputField>
			<InputField
				name="repeatPassword"
				type="password"
				placeholder="Повторите пароль"
				label="Повторите пароль"
				register={register}
				error={repeatPasswordError}
			></InputField>
			<button ref={submitButtonRef} type="submit" disabled={!isFormValid}>
				Зарегистрироваться
			</button>
		</form>
	);
};
