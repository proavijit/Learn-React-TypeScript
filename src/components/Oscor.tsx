import React from "react";

type OscorProps = {
  children: React.ReactNode;
}

const Oscor = (props: OscorProps) => {
  return (
    <div>
      {
        props.children
      }
    </div>
  );
};

export default Oscor;