import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Category from "../Category";
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
      {portfolio.map((service) => (
        <li key={service.id} className={styles.list}>
          <Link href={`/news/${service.id}`} className={styles.link}>
            {service.thumbnail ? (
              <Image
                className={styles.image}
                src={service.thumbnail.url}
                alt=""
                width={service.thumbnail.width}
                height={service.thumbnail.height}
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
              <dt className={styles.service_name}>{service.serviceName}</dt>
              <dt className={styles.description}>{service.description}</dt>
              <dd className={styles.meta}>
                <p>開始時期：{ formatDate(`${service.startedAt}`) }</p>
                { service.terms !== undefined ? (
                  <p>開発期間：{service.terms}</p>
                ) : (<></>)}
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
