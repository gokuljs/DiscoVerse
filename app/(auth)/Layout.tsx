import React from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className="h-full flex items-center justify-center"
      style={{
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
