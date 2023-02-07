import React from 'react';

function Alert(props) {
  /* const capitalize = word => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };*/
  return (
    <div>
      <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {props.alert.typ}</strong> {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
