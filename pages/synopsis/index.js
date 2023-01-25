import styles from "./synopsis.module.css";
import { getSortedSynopsisData } from "../../lib/chapter-summaries";
import Layout from "../../components/Layout";
import Link from "next/link";
export async function getStaticProps() {
    const allSynopsesData = getSortedSynopsisData();
    return {
      props: {
        allSynopsesData,
      },
    };
  }

export default function SynopsisIndex({allSynopsesData}){
    return (<Layout>
      <section>
        <h2>Chapter-by-Chapter Synopsis</h2>
      
        <ul className={styles.list}>
        {
            allSynopsesData.map(({number,title}) => {
                return <Link href={`/synopsis/${number}`}><li className={styles.listItem} key={number}>
                    {number}</li></Link>;
            })
        }
        </ul>
        </section>

        <section>
          <p>
        Ishigami is a math teacher at a local high school. His main passion in life is math, which he studies constantly. While an undergraduate student at Imperial University, Ishigami is a veritable math genius who is full of promise. After graduating, however, Ishigami's parents become sick, requiring that he stay home and find a steady job to support them, which forces him to abandon his ambitions of becoming a university researcher. As a result, he must settle for life as a high school teacher, which involves a monotonous morning commute in which he passes a menagerie of homeless people and other defeated individuals who, like him, are without hope and resigned to their fate.
        </p>
          <br/>
        <p>
Unable to achieve his goals in mathematics and feeling dispirited by the difficult cirumstances that have reduced him to a seemingly meaningless and unfulfilling existence, Ishigami prepares to commit suicide. As he prepares to end his life, though, an unexpected visitor rings his doorbell. It is a woman who introduces herself as Yasuko Hanaoka. She, along with her daughter Misato, are to be his new neighbors. Smitten by Yasuko's beauty and charm, Ishigami is possessed of a new zest for life, with Yasuko becoming the raison d'etre for his existence. Even if it means being unacknowledged by Yasuko in most of his daily life, Ishigami nonetheless is content merely to be an acquaintance whom Yasuko greets at the lunch box restuarant where she works.
</p>
<br/>
<p>
One day, however, Ishigami will hear a disturbance in Yasuko's apartment next door. Knocking at her door and inquiring about the matter personally, he soon discovers, through his extraordinary powers of observation and mathematical deduction, that Yasuko, with the help of her daughter Misato, has strangled her ex-husband Togashi in a moment of passion and now fears for her future. Worried that she and possibly her daughter will be charged with murder, Yasuko seems hopelessly resigned to a fate of life imprisonment.
</p>
<br/>
<p>
Feeling that Yasuko has saved him from potential suicide, Ishigami is ready to return the favor and make himself ready at her disposal. He offers to help her dispose of the body and establish an alibi that will help her maintain her innocence while not totally eliminating all suspicion. Beyond this, however, Ishigami carefully designs a cover-up that will cleverly mislead the police so as to prevent them from gathering enough conclusive evidence to bring charges against Yasuko.
</p>
<br/>
<p>
Detective Kusanagi, the officer in charge of the case, is mystified by all the gaping holes and incongruities of the case. The police officers propose various theories in which Yasuko is either an accomplice to or directly responsible for the murder of her ex-husband Togashi. No matter how hard they try, however, the detectives are unable to provide a comprehensive theory that will fit all the facts of the case. Each of their theories suffers from damning inconsistencies that make their conjectures implausible and hopelessly far-fetched.
</p>
<br/>
<p>
Desperate for some fresh insight into the case, Kusanagi turns to his long-time friend and former classmate, Yukawa, an assistant professor of physics at Imperial University, better known among the police by his nickname "Detective Galileo" for his genius in solving crime cases, who enjoys helping Kusanagi solve police cases despite the jokes that he frequently makes at the expense of Kusanagi's inferior intellect. While discussing the case, Yukawa comes to realize that the primary suspect in the case, Yusako, has a neighbor who happens to be a former classmate, Ishigami, whom he remembers being a veritable genius for whom math was the be-all and end-all of his existence.
</p>
<br/>
<p>
Torn between his empathy for his old friend Ishigami and his duty to help Kusanagi solve a crime, Yukawa finds himself in a dilemma in which considerations of reason and logic come into conflict with feelings of empathy and compassion. In the course of the investigation, Yukawa will come to realize that Ishigami has done much more than simply help Yusako devise a clever alibi and cover up a murder. Ishigami has made a disturbing sacrifice that will cause Yukawa to struggle with a moral dilemma and internal emotional conflict in which he will be forced to choose between helping an old friend and exposing an uncomfortable truth that will satisfy the demands of justice.
</p>
<br/>
<p>
One of Keigo Higashino's most suspenseful novels, Devotion of Suspect X is a story about a murder mystery that never ceases to keep its reader engaged with its fast-paced narrative and compelling characters. Much like the anime series Death Note, it is a story in which two geniuses on opposite sides of the law use their uncanny logical ability to try to antipicate each other's next move and become victorious in a battle of wits. If you enjoy jigsaw-like plots that challenge your intellect and tempt you to propose theories and make predictions about what happens next, then Devotion of Suspect X is definitely a book worth adding to your summer reading list.
</p>    </section>
    </Layout>);
}