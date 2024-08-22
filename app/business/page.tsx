import Image from "next/image";
import { Business } from "@/app/_libs/microcms";
import styles from "./page.module.css";

const data: {
  contents: Business[]
} = {
  contents: [
    {
      id: "0",
      name: "業務委託",
      contents: "\
        これまでにフルスタックでの開発を行なってきた経験から、バックエンド・フロントエンド開発からインフラ構築まで、特定の分野に限らず横断的に進めることができます。<br />\
        また、実装（コーディング）だけでなく要件定義やシステム設計を行った経験もありますので、一人称で高い推進力を持ってプロジェクトを遂行します。<br /><br />\
        お客様とのコミュニケーションを大切にし、歩幅を合わせながら丁寧にかつ迅速にシステムやサービスを作り込んでいくことが自身の価値だと考えています。<br />\
        お客様にとって「安心できる開発担当者」となれるよう、日々精進して参ります。\
      ",
      image_path: "/business_outsourcing.png"
    },
    {
      id: "1",
      name: "ソフトウェア開発",
      contents: "\
        Web、PCデスクトップ、スマートフォンなど、マルチプラットフォームでのアプリ開発経験があり、条件・状況に応じたベストプラクティスを経験値として保持しています。<br />\
        お客様のご要望をヒアリングさせていただいた上で、最適な技術選定・システム設計をいたします。<br /><br />\
        「アイデアを聞き、想いを引き出し、形にする」ことが得意です。思いつきのレベルのでも結構ですので、お気軽にご相談ください。<br /><br />\
        ワクワクする想いを共に形にしていきましょう！\
      ",
      image_path: "/business_applications.png"
    },
  ],
};

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        {data.contents.map((business) => (
          <div key={business.id} className={styles.frame}>
            <h2 className={styles.title}>{business.name}</h2>
            <div className={styles.image_container}>
              <Image
                className={styles.image}
                src={business.image_path}
                alt={business.name}
                width={200}
                height={105}
              />
            </div>
            <div
              className={styles.contents}
              dangerouslySetInnerHTML={{
                __html: business.contents,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
