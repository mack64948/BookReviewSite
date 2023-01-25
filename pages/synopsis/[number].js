import Layout from "../../components/Layout"
import { getAllChapterNumbers, getChapterData } from "../../lib/chapter-summaries";
import styles from "./synopsis.module.css";

export async function getStaticPaths(){
    const chapNumbers = getAllChapterNumbers();
    return  {
        paths: chapNumbers,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const chapterData = await getChapterData(params.number);
    return {
      props: {
        chapterData,
      
      },
    };
  }

export default function ChapterSummary({chapterData}) {
    return (
        <Layout>
          <section>
        <h2>Chapter-by-Chapter Synopsis</h2>
      
        
        </section>
         
          <section>
            <h2> {chapterData.title}</h2>
         
            <div dangerouslySetInnerHTML={{ __html: chapterData.contentHtml }} />

          </section>
       

        </Layout>
      );
}