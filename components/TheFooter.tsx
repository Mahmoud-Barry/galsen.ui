export default function TheFooter() {
  return (
    <footer className="text-xs">
      <div className="px-4 pt-4 pb-8 border-t border-neutral-100 flex flex-col gap-2 items-center justify-between sm:flex-row sm:max-w-2xl sm:mx-auto md:pt-8 md:pb-16">
        <span>&copy; Galsen UI. Tous droits réservés</span>
        <ul className="inline-flex items-center gap-2">
          {/* TODO: add correct links */}
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Github</li>
        </ul>
      </div>
    </footer>
  );
}
