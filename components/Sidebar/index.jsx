import Link from "next/link";
import styles from  "./sidebar.module.css";

export default function Sidebar(){
    return (<aside className={styles.sidebar}>
        <ul>
          <li className={styles.sidebarLink} ><Link href="/">Home</Link></li>
          <li className={styles.sidebarLink}><Link href="/synopsis/">Synopsis</Link></li>
          <li className={styles.sidebarLink}><Link href="/analysis/">Analysis</Link></li>
          <li className={styles.sidebarLink}> <Link href="/author-info">Author Info</Link></li>
          <li className={styles.sidebarLink}> <Link href="/themes">Themes</Link></li>
          <li className={styles.sidebarLink}> <Link href="/symbolism-and-motifs">Symbolism and Motifs</Link></li>
          <li className={styles.sidebarLink}> <Link href="/essay-questions">Essay Questions</Link></li>
          <li className={styles.sidebarLink}> <Link href="/key-quotes">Key Quotes</Link></li>
          <li className={styles.sidebarLink}> <Link href="/film-adaptations">Film Adaptations</Link></li>
          <li className={styles.sidebarLink}> <Link href="/other-reviews">Other Reviews</Link></li>

        </ul>
    </aside>);
}