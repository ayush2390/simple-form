import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid name and age",
        message: "Enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Enter valid age(>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setenteredAge("");
    setenteredUsername("");
  };
  const changeUsernameHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const setErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={setErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={changeUsernameHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            onChange={changeAgeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
