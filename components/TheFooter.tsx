export default function TheFooter() {
  return (
    <footer className="mt-14">
      <div className="flex items-center justify-between sm:max-w-7xl sm:mx-auto pt-4 pb-8 border-t border-neutral-100 flex-col gap-2 sm:flex-row md:pt-8 md:pb-16">
        <span>&copy; Galsen UI. Tous droits réservés</span>
        <ul className="inline-flex items-center gap-2">
          {/* TODO: add correct links */}
          <li className="text-sm">Facebook</li>
          <li className="text-sm">Twitter</li>
          <li className="text-sm">Github</li>
        </ul>
      </div>
    </footer>
  );
}
