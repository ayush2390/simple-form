import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/AddUser/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  function addUserHandler(uName, uAge) {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
