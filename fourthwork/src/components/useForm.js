import React, { useState } from "react";

function UserForm({
  addUser,
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
  age,
  setAge,
  gender,
  setGender,
}) {
  const [nameError, setNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [ageError, setAgeError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // !? სახელის ვალიდაცია
    if (!name || name.length < 4) {
      setNameError("სახელი უნდა შეიცავდეს 4 სიმბოლოზე მეტს");
    } else {
      setNameError(null);
    }
    // !? გვარის ვალიდაცია
    if (!lastName || lastName.length < 4) {
      setLastNameError("გვარი უნდა შეიცავდეს 4 სიმბოლოზე მეტს");
      return;
    } else {
      setLastNameError(null);
    }
    // !? ელფოსტის ვალიდაცია
    if (email && !email.includes("@gmail.com")) {
      setEmailError("არასწორი ელ-ფოსტის მისამართი");
      return;
    } else {
      setEmailError(null);
    }
    // !? ასაკის ვალიდაცია
    if (age < 18) {
      setAgeError("თქვენ უნდა იყოთ 18 წლის რომ დარეგისტრირდეთ");
      return;
    } else {
      setAgeError(null);
    }
    addUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p>{nameError}</p>}
      </label>

      <label>
        <p>lastname</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameError && <p>{lastNameError}</p>}
      </label>

      <label>
        <p>mail</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}
      </label>

      <label>
        <p>age</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {ageError && <p>{ageError}</p>}
      </label>

      <label>
        <p>sex</p>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">othr</option>
        </select>
      </label>
      <button className="btn" type="submit">
        მომხმარებლის დამატება
      </button>
    </form>
  );
}

export default UserForm;
