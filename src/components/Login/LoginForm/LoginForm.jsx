import { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  ErrorText,
  FormWrapper,
} from "./LoginForm.styled";

const LoginForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://kosmetic-back.onrender.com/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      onSuccess?.(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Помилка авторизації. Спробуйте ще раз");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Ваш Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button type="submit">Авторизуватись</Button>
    </FormWrapper>
  );
};

export default LoginForm;