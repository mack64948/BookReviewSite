import Layout from "../../components/Layout"
import { getAllChapterNumbers, getChapterData } from "../../lib/chapter-analyses";

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
            <h2> {chapterData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: chapterData.contentHtml }} />

          </section>
       

        </Layout>
      );
}