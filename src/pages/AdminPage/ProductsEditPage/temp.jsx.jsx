// pages/ExelUpload.jsx
import React, { useState } from "react";
import axios from "axios";

const ExelUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Оберіть файл!");

    const formData = new FormData();
    formData.append("file", file);

    try {

      // await axios.post("http://localhost:3000/api/products/import", formData);
      
      await axios.post("https://kosmetic-back.onrender.com/api/products/import", formData);
      alert("Файл успішно завантажено та оброблено!");
    } catch (error) {
      console.error("Помилка при завантаженні файлу:", error);
      alert("Сталася помилка при завантаженні.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Завантаження Excel-файлу з товарами</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Завантажити</button>
    </div>
  );
};

export default ExelUpload;
