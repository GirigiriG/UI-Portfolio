import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  const [hideAlert, setHideAlert] = useState(false);

  const alertComponent = (childNode: ReactNode) => {
    return (
      <div
        className="alert alert-primary"
        onClick={() => setHideAlert(!hideAlert)}
      >
        {childNode}
      </div>
    );
  };

  return (
    <>
      {hideAlert ? (
        <span onClick={() => setHideAlert(!hideAlert)}>Show</span>
      ) : (
        alertComponent(children)
      )}
    </>
  );
};

export default Alert;
