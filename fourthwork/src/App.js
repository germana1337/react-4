import React, { useState } from "react";
import UserForm from "./components/useForm";
import UserList from "./components/userList";

//TODO Შექმენით აპლიკაცია,რომელიც დაამატებს იუზერებს:
//TODO  აპლიკაციაში უნდა გქონდეთ რამდენიმე ინფუთი: სახელი,გვარი,მაილი,ასაკი,სქესი
//TODO  Მომხმარებელს უნდა შეეძლოს იუზერების დამატება,წაშლა და განახლება.

// *?  იყენებს useState hook-ს მდგომარეობის ცვლადების და მათი შესაბამისი სეტერის ფუნქციების შესაქმნელად მომხმარებლის მონაცემების შესანახად და განახლებისთვის.
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      lastName,
      email,
      age,
      gender,
    };
    setUsers([...users, newUser]);
  };
  // *? ეს ფუნქცია იღებს id პარამეტრს და ფილტრავს მომხმარებელთა მასივს, რათა ამოიღოს მომხმარებელი შესაბამისი id-ით. შემდეგ ის განაახლებს მომხმარებლის მდგომარეობას setUsers ფუნქციის გამოყენებით.
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  // *? ეს ფუნქცია იღებს id პარამეტრს და updatedUser ობიექტს. ის ასახავს მომხმარებელთა მასივს, ანაცვლებს მომხმარებელს შესაბამისი ID-ით განახლებულიUser ობიექტით. შემდეგ ის განაახლებს მომხმარებლის მდგომარეობას setUsers ფუნქციის გამოყენებით.
  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <UserForm
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
        addUser={addUser}
      />
      <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
    </div>
  );
}

export default App;
