// Content Component
import React from "react";
import TopBar from "../TopBar/TopBar";

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
        overflowY: "scroll",
      }}
    >
      <TopBar />
      <div
        style={{
          padding: "2rem 2rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Content;
