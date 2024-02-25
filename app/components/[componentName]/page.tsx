import ComponentDetails from "@/components/galsenUiComponents/ComponentDetails";

type PageProps = {
  params: { componentName: string };
};

export default function Page({ params }: PageProps) {
  return (
    <main className="">
      <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
        <h1 className="text-2xl font-bold capitalize">{params.componentName}</h1>
        <p className="text-neutral-500">
          Les boutons sont des composants très utilisés au niveau des pages
          webs.
        </p>

        <div className="mt-16 space-y-12">
          <ComponentDetails title="Bouton Simple" />
          <ComponentDetails title="Bouton Pas Simple" />
        </div>
      </section>
    </main>
  );
}
