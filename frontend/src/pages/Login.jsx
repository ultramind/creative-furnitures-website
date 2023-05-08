import React from "react";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

const Login = () => {
  const title = "Login";
  return (
    <Layout>
      <Breadcrumb title={title} />
    </Layout>
  );
};

export default Login;
