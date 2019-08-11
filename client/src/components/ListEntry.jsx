import React from 'react';

const ListEntry = props => (
  <li onClick={() => props.deleteTodo(props.idx)}>
    {props.todo}
  </li>
);

export default ListEntry;
