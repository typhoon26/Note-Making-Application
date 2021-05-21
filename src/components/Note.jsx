import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import Fab from '@material-ui/core/Fab'
function Note(props) {
  function handleClick(){
    props.deleteItem(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div>
      <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
