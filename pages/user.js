import Profil from "../components/Profile/Profil";
import HeaderUser from "../components/Header/HeaderUser";
import Layout from "../components/Layout/Layout";
import ListGame from "../components/Card/ListGame";
import Suwit from "../components/Card/Suwit";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions";

const User = ({ getProfil }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const username = Cookies.get("username");
    const login = Cookies.get("login");
    if (!login) {
      return router.push("/login");
    }
    dispatch(userAction(username));
  }, [router, dispatch]);

  return (
    <Layout pageTitle="Dashboard">
      <HeaderUser />
      <Profil />
      <ListGame />
      <Suwit />
    </Layout>
  );
};

export default User;
