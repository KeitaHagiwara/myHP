import styles from "./index.module.css";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  startedAt: string;
  terms?: string;
};

export default function DateCareer({ startedAt, terms }: Props) {
  return (
    <span className={styles.date}>
      <p>開始時期：{ formatDate(`${startedAt}`) }</p>
      { terms !== undefined ? (<p>開発期間：{terms}</p>) : (<></>)}
    </span>
  );
}
