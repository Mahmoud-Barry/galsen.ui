type PageProps = {
  params: { componentName: string };
};

export default function Page({ params }: PageProps) {
  return (
    <main className="">
      <section className="px-4 py-16 flex items-center justify-between sm:max-w-7xl sm:mx-auto">
        <hgroup className="space-y-0.5">
          <h1 className="text-2xl font-bold capitalize">
            {params.componentName}
          </h1>
          <p className="text-neutral-500">
            Les boutons sont des composants très utilisés au niveau des pages
            webs.
          </p>
        </hgroup>
      </section>
    </main>
  );
}
