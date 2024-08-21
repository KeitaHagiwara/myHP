import styles from "./page.module.css";
import Image from "next/image";
import TitleFrame from "@/app/_components/TitleFrame";
import CompanyOverview from "@/app/_components/CompanyOverview";

// import { getNewsList } from "@/app/_libs/microcms";
// import { TOP_NEWS_LIMIT } from "@/app/_constants";

// import NewsList from "@/app/_components/NewsList";
// import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {

  // const data = await getNewsList({
  //   limit: TOP_NEWS_LIMIT,
  // });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニー</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <div className={styles.container}>
          <TitleFrame title="ご挨拶"/>
          <p>現在、作成中です。</p>
          {/* <NewsList news={data.contents} />
          <div className={styles.newsLink}>
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div> */}
        </div>

        <div className={styles.container}>
          <TitleFrame title="Mission" />
          <p>現在、作成中です。</p>
        </div>

        <div className={styles.container}>
          <TitleFrame title="Value" />
          <p>現在、作成中です。</p>
        </div>

        <div className={styles.container}>
          <TitleFrame title="会社概要" />
          <CompanyOverview />
        </div>

      </section>
    </>
  );
}
