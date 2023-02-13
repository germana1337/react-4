import React from "react";
import './userList.css';

function UserList({ users, deleteUser, updateUser }) {
  return (
    <ul className="ul-managment">
      {users.map((user) => (
        <li key={user.id}>
          <p>სახელი: {user.name}</p>
          <p>გვარი: {user.lastName}</p>
          <p>ელ-ფოსტა: {user.email}</p>
          <p>ასაკი: {user.age}</p>
          <p>სქესი: {user.gender}</p>
          <button type="button" onClick={() => deleteUser(user.id)}>
            წაშლა
          </button>
          <button
            type="button"
            onClick={() =>
              updateUser(user.id, {
                ...user,
                name: "new name",
                lastName: "new last name",
                email: "new email",
                age: 30,
                gender: "other",
              })
            }
          >
        UPDATE!
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
