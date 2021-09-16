import React from "react";
import useAuth from "../hooks/useAuth";

interface DashboardProps {
  code: string | string[];
}

const Dashboard: React.FC<DashboardProps> = ({ code }) => {
  const token = useAuth(code);
  return <h1>{code}</h1>;
};

export default Dashboard;
