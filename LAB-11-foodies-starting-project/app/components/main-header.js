import Link from 'next/link';
import styles from './main-header.module.css';
import Logo from './Logo';

export default function MainHeader() {
  return (
    <header className={styles.header}>
        <Logo />
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share a Meal</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
