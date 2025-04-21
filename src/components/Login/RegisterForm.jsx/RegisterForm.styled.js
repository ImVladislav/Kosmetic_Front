import styled from "styled-components";

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

export const Row = styled.div`
  display: flex;
  gap: 10px;
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

  &:hover {
    background: #ff9ac5;
    color: white;
  }
`;