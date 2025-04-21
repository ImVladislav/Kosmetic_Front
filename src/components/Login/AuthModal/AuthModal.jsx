import { useState } from "react";
import RegisterForm from "../RegisterForm.jsx/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import { ModalBackdrop, ModalContainer, Tab, TabGroup, CloseBtn } from "./AuthModal.styled";

const AuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <ModalBackdrop>
      <ModalContainer>
        <TabGroup>
          <Tab active={activeTab === "login"} onClick={() => setActiveTab("login")}>
            ВХІД
          </Tab>
          <Tab active={activeTab === "register"} onClick={() => setActiveTab("register")}>
            РЕЄСТРАЦІЯ
          </Tab>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </TabGroup>
        {activeTab === "register" ? <RegisterForm onClose={onClose} /> : <LoginForm onClose={onClose} />}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default AuthModal;
