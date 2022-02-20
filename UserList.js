import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years ago)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
