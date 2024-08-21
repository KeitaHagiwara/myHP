"use client";

import Link from 'next/link';
import Image from "next/image";
import {useState} from "react";
import cx from "classnames";
import styles from './index.module.css';

export default function Menu() {

  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <nav className={cx(styles.nav, isOpen ? styles.open: styles.close)}>
        <ul className={styles.items}>
          <li>
            <Link href="/" onClick={toggleNav}>トップ</Link>
          </li>
          <li>
            <Link href="/business" onClick={toggleNav}>事業内容</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={toggleNav}>ポートフォリオ</Link>
          </li>
          <li>
            <Link href="/news" onClick={toggleNav}>ニュース</Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleNav}>お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={toggleNav}>
          <Image src="close.svg" alt="閉じる" width="24" height="24" />
        </button>
      </nav>
      <button className={styles.button} onClick={toggleNav}>
        <Image src="menu.svg" alt="メニュー" width="24" height="24" />
      </button>
    </div>
  );
}
