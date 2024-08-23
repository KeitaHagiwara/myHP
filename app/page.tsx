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
          src="/header_image/map-of-the-world.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.message}>
        <div className={styles.container}>
          <TitleFrame title="メッセージ"/>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: "”ファーストペンギン”<br />\
              集団で行動するペンギンの群れの中から、天敵がいるかもしれない海へ、魚を求めて最初に飛びこむ1羽のペンギンのことを指します。転じて、その“勇敢なペンギン”のように、リスクを恐れず初めてのことに挑戦するベンチャー精神の持ち主を、敬意を込めて「ファーストペンギン」と呼びます。<br /><br />\
              この言葉を聞いた時、そんな精神に魅力を感じましたし、自分もそうありたいと思いました。<br />\
              その一方で、疑問にも思いました。<br /><br />\
              <div style='background: whitesmoke; border-radius: 10px; padding: 20px; font-size:14px;'>\
              そのペンギンは、挑戦の先に一体何を求めたのか？<br />\
              </div><br />\
              と。答えは「飢え」だと思います。自らの空腹を満たすために飛び込むのです。<br />\
              だとすれば、<br /><br />\
              <div style='background: whitesmoke; border-radius: 10px; padding: 20px; font-size:14px;'>\
                私も空腹を満たすために、見たこともない広い海に果敢に飛び込んで行きたい<br />\
                でもそれは、自分自身の空腹ではなく誰かの空腹を満たすためでありたい<br />\
                そんな想いを持って自分の限界にチャレンジしていくエンジニアであり続けたい<br />\
              </div><br />\
              そのチャレンジが、自らの「飢え」を満たしてくれるものだと確信しています。<br />\
              ",
            }}
          />
          {/* <NewsList news={data.contents} />
          <div className={styles.newsLink}>
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div> */}
        </div>

        <div className={styles.container}>
          <TitleFrame title="Value" />
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: "エンジニアとは「モノづくりだ」と言われることが多いです。<br />\
              現に、私が就職活動を通して会ってきた人事担当は総じてそのように発言していましたし、実際の職場でも<span style='font-weight: bold;'>モノづくりのエンジニア</span>としての働き方を数多く見てきました。<br /><br />\
              エンジニアはモノづくりの仕事。確かにそれは間違いないし、その働き方は否定されるものではありません。<br />\
              しかしエンジニアの魅力を語る際、それはあまりにも表面的で、言い得ているとは思えないのです。<br /><br />\
              私は、エンジニアとは<span style='font-weight: bold;'>”アーティスト”</span>であるべきだと思っています。<br />\
              たとえ同じようなシステムであっても、高い技術力により作られたものは細部までもが美しく、強い想いを持って作られたものには魂が宿ります。そんなものを、私はこれまで作り上げてきたと自負しております。<br />\
              真っ白なキャンバスに理想の景色を描いていくように、お客様と一緒に素晴らしい未来を創造していくことが、エンジニアとしての私のミッションであり、唯一無二の価値だと思っています。<br />\
              ",
            }}
          />
        </div>

        <div className={styles.container}>
          <TitleFrame title="会社概要" />
          <CompanyOverview />
        </div>

      </section>
    </>
  );
}
