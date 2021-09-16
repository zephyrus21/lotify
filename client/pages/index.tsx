import type { NextPage } from "next";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Home: NextPage = () => {
  const router = useRouter();
  const code = router.query.code;

  return code ? <Dashboard code={code} /> : <Login />;
};

export default Home;
