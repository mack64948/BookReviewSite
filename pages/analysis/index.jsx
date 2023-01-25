import { getSortedAnalysesData } from "../../lib/chapter-analyses";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "./analysis.module.css"

export async function getStaticProps() {
    const allAnalysesData = getSortedAnalysesData();
    return {
      props: {
        allAnalysesData,
      },
    };
  }

export default function AnalysisIndex({allAnalysesData}){
    return (<Layout>
      <section>
        <h2>Chapter-by-Chapter Analysis</h2>
      
        <ul className={styles.list}>
        {
            allAnalysesData.map(({number,title}) => {
                return <Link href={`/analysis/${number}`}><li className={styles.listItem} key={number}>
                    {number}</li></Link>;
            })
        }
        </ul>
        </section>
    </Layout>);
}