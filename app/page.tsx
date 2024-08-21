import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
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
          <h2 className={styles.newsTitle}>ごあいさつ</h2>
          <p>test</p>
          {/* <NewsList news={data.contents} />
          <div className={styles.newsLink}>
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div> */}
        </div>

        <div className={styles.container}>
          <h2 className={styles.newsTitle}>ミッション</h2>
          <div>test</div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.newsTitle}>価値</h2>
          <div>test</div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.newsTitle}>会社概要</h2>
          <div>test</div>
        </div>

      </section>
    </>
  );
}
