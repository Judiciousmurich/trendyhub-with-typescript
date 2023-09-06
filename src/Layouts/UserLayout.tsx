import React, { ReactNode } from "react";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="user-layout overflow-hidden">
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
