// Content Component
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        flex: "1",
        boxSizing: "border-box",
        padding: "2rem 2rem",
        overflowY: "scroll",
      }}
    >
      {children}
    </div>
  );
};

export default Content;
