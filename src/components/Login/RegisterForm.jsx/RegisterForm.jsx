import { useState } from "react";
import {Row, Input, Button} from "./RegisterForm.styled";
const RegisterForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      number: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit?.(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Row>
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
        </Row>
  
        <Row>
          <Input
            type="text"
            name="firstName"
            placeholder="Ім'я"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Прізвище"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Row>
  
        <Input
          type="tel"
          name="number"
          placeholder="Телефон"
          value={formData.number}
          onChange={handleChange}
        />
  
        <Button type="submit">Зареєструватись</Button>
      </form>
    );
  };
  
  export default RegisterForm;