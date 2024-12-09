import 'bootstrap/dist/css/bootstrap.min.css';
// /app/webpage/page.js
import Header from '@components/Header';
import NavigationMenu from '@components/NavigationMenu';

export default function Webpage() {
  return (
    <div className="container">
      <Header title="Witaj na mojej stronie!" />
      <NavigationMenu />
      <h2 className="my-4 text-center text-primary">Przeglądaj sekcje mojej strony!</h2>
      <p className="text-center">Kliknij na poniższe linki, aby przejść do odpowiednich sekcji:</p>
    </div>
  );
}