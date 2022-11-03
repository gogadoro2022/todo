import React from 'react';

export default function Header({ status, changeStatus }) {

  return (
    <ul>
      {status.map((eachStatus, index) => <li key={index}>
        <button
          onClick={() => changeStatus(eachStatus)}
        >
          {eachStatus}
        </button>
      </li>)}
    </ul>
  );
}

