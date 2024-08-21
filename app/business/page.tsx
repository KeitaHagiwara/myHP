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
      contents: "業務委託を行います。",
      image_path: "/business_outsourcing.png"
    },
    {
      id: "1",
      name: "ソフトウェア開発",
      contents: "ソフトウェア開発を行います。",
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
            <p className={styles.contents}>{business.contents}</p>
          </div>
        ))}
      </div>
    </>
  );
}
