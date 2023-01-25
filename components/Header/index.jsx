import styles from "./header.module.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return (<header className={styles.header}>
        <div className={styles.headerLeft}>
        <Image
            src="/images/woman-reading.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Amazing Book Reviews Logo"
            style={{
                borderRadius: "10px",
                marginRight: "20px"
            }}
        />
            
            Amazing Book Reviews
        </div>

        <nav className={styles.headerRight}>

            <Link className={styles.navlink} href="/about">About</Link>
            <Link className={styles.navlink} href="/contact">Contact</Link>
            <Link className={`${styles.navLink} ${styles.navlinkLast}`} href="/register">Register</Link>
        </nav>
    </header>);
}