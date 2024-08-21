import styles from "./index.module.css";

type Props = {
  title: string;
};

export default function TitleFrame({ title }: Props) {
  return (
    <h2 className={styles.frame}>
      - {title} -
    </h2>
  );
}
