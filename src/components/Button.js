import React from "react";

function Button({ className = "", children = "Get Started" }) {
  return (
    <a
      href="/"
      className={`${className}  bg-brightBlue text-white rounded-full baseline md:inline`}>
      {children}
    </a>
  );
}

export default Button;
