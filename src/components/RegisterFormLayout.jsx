import { InputField } from './InputField';

export const RegisterFormLayout = ({ formData, errors, onSubmit, onChange, isFormValid, submitButtonRef }) => {
    return (
			<form onSubmit={onSubmit}>
				<InputField
					name="email"
					type="email"
					placeholder="Почта"
					label="Почта"
					value={formData.email}
					onChange={onChange}
					error={errors.email}
				></InputField>
				<InputField
					name="password"
					type="password"
					placeholder="Пароль"
					label="Пароль"
					value={formData.password}
					onChange={onChange}
					error={errors.password}
				></InputField>
				<InputField
					name="repeatPassword"
					type="password"
					placeholder="Повторите пароль"
					label="Повторите пароль"
					value={formData.repeatPassword}
					onChange={onChange}
					error={errors.repeatPassword}
				></InputField>
				<button ref={submitButtonRef} type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
			</form>
		);
	};
