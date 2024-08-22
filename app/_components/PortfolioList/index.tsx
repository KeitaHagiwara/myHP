import Image from "next/image";
import Link from "next/link";

import DateCareer from "@/app/_components/DateCareer";

import styles from "./index.module.css";
import { Portfolio } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  portfolio: Portfolio[];
};

export default function PortfolioList({ portfolio }: Props) {
  if (portfolio.length === 0) {
    return <p>ポートフォリオがありません</p>;
  }
  return (
    <ul>
      {portfolio.map((portfolio) => (
        <li key={portfolio.id} className={styles.list}>
          <Link href={`/portfolio/${portfolio.id}`} className={styles.link}>
            {portfolio.thumbnail ? (
              <Image
                className={styles.image}
                src={portfolio.thumbnail.url}
                alt=""
                width={portfolio.thumbnail.width}
                height={portfolio.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.service_name}>{portfolio.serviceName}</dt>
              <dt className={styles.description}>{portfolio.description}</dt>
              <dd className={styles.meta}>
                <DateCareer startedAt={portfolio.startedAt} terms={portfolio.terms} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
