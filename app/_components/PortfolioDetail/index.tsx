import Link from 'next/link';
import Image from 'next/image';
import type { Portfolio } from '@/app/_libs/microcms';
import DateCareer from "@/app/_components/DateCareer";
import styles from './index.module.css';

type Props = {
  data: Portfolio;
};

export default function PortfolioDetail({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.serviceName}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <DateCareer startedAt={data.startedAt} terms={data.terms} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
