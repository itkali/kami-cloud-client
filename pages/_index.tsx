import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import AuthPage from "@/pages/dashboard/auth";

export default function Home() {
    return (
        <>
            <Head>
                <title>Kami-Cloud | Облачное хранилище</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <AuthPage />
            </main>
        </>
    );
}
