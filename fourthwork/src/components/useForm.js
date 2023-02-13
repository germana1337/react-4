import React from "react";

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
  return (
    <form>
      <label>
        <p>სახელი</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        <p>გვარი</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <label>
        <p>ელ-ფოსტა</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <p>ასაკი</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <label>
        <p>სქესი</p>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">მამრობითი</option>
          <option value="female">მდედრობითი</option>
          <option value="other">სხვა</option>
        </select>
      </label>
      <button className="btn" type="button" onClick={addUser}>
        დაამატე მომხმარებელი
      </button>
    </form>
  );
}

export default UserForm;
