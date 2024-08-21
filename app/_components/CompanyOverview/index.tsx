import Link from "next/link";
import styles from "./index.module.css";

const data: {
  contents: {
    company_name: string;
    postal_code: string;
    address: string;
    manager_name: string;
    capital: string;
  }
} = {
  contents: {
    company_name: "未定",
    postal_code: "〒000-0000",
    address: "未定",
    manager_name: "未定",
    capital: "1,000,000円",
  }
}

export default function TitleFrame() {
  return (
    <div className={styles.frame}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <th className={styles.th}>会社名</th>
            <td className={styles.td}>{data.contents.company_name}</td>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.th}>住所</th>
            <td className={styles.td}>
              {data.contents.postal_code}
              <br />
              {data.contents.address}
            </td>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.th}>代表者</th>
            <td className={styles.td}>{data.contents.manager_name}</td>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.th}>資本金</th>
            <td className={styles.td}>{data.contents.capital}</td>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.th}>連絡先</th>
            <td className={styles.td}>
              <Link href="/contact" className={styles.link}>お問い合わせページ</Link>からご連絡ください
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
