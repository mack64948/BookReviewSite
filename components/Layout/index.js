import Sidebar from "../Sidebar";
import Header from "../Header";
import Head from 'next/head';
import styles from "./layout.module.css"
import React from "react";

export default function Layout({children}){
    return (<div>
        <Head>
            <title>Amazing Book Reviews</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Philosopher&family=Faustina"
                rel="stylesheet"
            />
    
        </Head>
        <Header></Header>
       
        <div className={styles.container}>
            <Sidebar></Sidebar>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </div>);
}