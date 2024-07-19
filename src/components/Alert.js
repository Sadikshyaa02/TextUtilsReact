// src/components/Alert.js
import React from 'react';

function Alert({ alert }) {
  return (
    <div style={{height:'50px'}}>
    {alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )}
    </div>
  );
}

export default Alert;
