export default function TheNavbar() {
  return (
    <header className="mt-8 md:mt-16">
      <nav className="px-4 flex items-center justify-between sm:max-w-2xl sm:mx-auto">
        {/* TODO: add logo */}
        <span>LOGO</span>
        <ul className="inline-flex items-center gap-3">
          {/* TODO: add correct links */}
          <li>Accueil</li>
          <li>Composants</li>
        </ul>
      </nav>
    </header>
  );
}
