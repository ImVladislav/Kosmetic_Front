import styled from "styled-components";

export const ModalLoader = styled.div`
  min-width: 300px;

  @media screen and (min-width: 768px) {
    min-width: 600px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 900px;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #f2d4e5;
  border-radius: 20px;
  outline: none;
  background-color: #fff;
  font-size: 14px;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #ff9ac5;
  color: #ff9ac5;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #ff9ac5;
    color: white;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

// 🆕 Додано згідно з помилками

export const LableInput = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: #333;
`;

export const Message = styled.div`
  font-size: 12px;
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
`;

export const LinkStyle = styled.a`
  color: #ff9ac5;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;