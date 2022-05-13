import React from "react";

interface SubmitButtonProps {
  title: string;
  status: boolean;
}

export const SubmitButton = ({ title, status }: SubmitButtonProps) => {
  return (
    <div>
      <button disabled={status} style={status ? buttonStyle : buttonStyleDis}>
        {title}
      </button>
    </div>
  );
};
const buttonStyleDis = {
  width: "100%",
  margin: "0 auto",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#36a2ef",
  color: "#000",
};

const buttonStyle = {
  width: "100%",
  margin: "0 auto",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#2C2E36",
  color: "#939393",
};
export default SubmitButton;
