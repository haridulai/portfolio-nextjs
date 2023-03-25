import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Harinder Dulai's Portfolio</title>
        <meta
          name="description"
          content="Hari Dulai - portfolio - Harinder Dulai"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Let's build an awesome portfolio</h1>
    </>
  );
}
