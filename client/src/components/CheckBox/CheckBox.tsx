// CheckBox Component
import { useState } from "react";

const CheckBox = ({ selectAll, setSelectAll }: any) => {
  const [checkboxState, setCheckboxState] = useState<string>("false");

  const checkboxValue = selectAll ? selectAll : checkboxState;

  console.log(checkboxState);

  return (
    <button
      style={{
        all: "unset",
        width: "1.4rem",
        height: "1.4rem",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "0.4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "0.3s",
      }}
      value={checkboxState}
      onClick={(e) => {
        const { target } = e;
        setCheckboxState(
          (target as HTMLButtonElement).value === "false" ? "true" : "false"
        );
        if (setSelectAll) {
          setSelectAll(
            (target as HTMLButtonElement).value === "false" ? "true" : "false"
          );
        }
      }}
    >
      <div
        style={
          checkboxState === "true" || selectAll === "true"
            ? {
                width: "0.65rem",
                height: "0.65rem",
                borderRadius: "0.2rem",
                backgroundColor: "#514af880",
              }
            : { display: "none" }
        }
      ></div>
    </button>
  );
};

export default CheckBox;
