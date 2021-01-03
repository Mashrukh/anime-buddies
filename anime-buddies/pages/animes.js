import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import Auth from "../components/Auth";
import { useRouter } from "next/router";
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Animes</title>
      </Head>
      <p>View some animes here!</p>
    </div>
  );
}
