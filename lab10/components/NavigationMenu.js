import Link from 'next/link';

export default function NavigationMenu() {
  return (
    <nav className="bg-light p-3">
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/" className="text-dark">Strona Główna</Link>
        </li>
        <li className="list-group-item">
          <Link href="/about" className="text-dark">O mnie</Link>
        </li>
        <li className="list-group-item">
          <Link href="/interests" className="text-dark">Moje Zainteresowania</Link>
        </li>
        <li className="list-group-item">
          <Link href="/favorite" className="text-dark">Ulubiony Film</Link>
        </li>
        <li className="list-group-item">
          <Link href="/contact" className="text-dark">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
