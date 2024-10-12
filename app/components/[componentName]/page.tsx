// "use client";

import ErrorMessage from "@/components/Error/ErrorMessage";
import ComponentDetails from "@/components/galsenUiComponents/ComponentDetails";

import { promises as fs } from "fs";
import { serialize } from 'next-mdx-remote/serialize'
import RemoteMdxWrapper from "@/components/Mdx/RemoteMdxWrapper";


type PageProps = {
  params: { componentName: string };
};

// TODO: I'll be back to refactor: Because components should not handle logic
export default async function Page({ params }: PageProps) {
  /**
   * Read all the files located inside "componentName" folder
   *
   * For example, "componentName" can be "forms" folder located inside public/ui
   */
  let files;
  try {
    files = await fs.readdir(
      process.cwd() + `/public/ui/${params.componentName}/`,
      "utf8",
    );
  } catch (error) {
    return (
      <ErrorMessage message="Veuillez vérifier si cette catégorie de composants existe." />
    );
  }

  //! Get only html files so that we can display the code
  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  //! Get only the .mdx files so that we can display the component description
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  if (mdxFiles.length === 0) {
    return (
      <ErrorMessage message="Aucun description trouvée pour ce composant." />
    );
  }

  //! Get the first .mdx file (or handle the case for multiple .mdx files)
  const componentDescriptionFile = mdxFiles[0]; // or whatever logic you prefer

  // The description of each component is located in a file with ".txt" extension
  // const componentDescriptionFile = files.find((file) => file.endsWith(".mdx")) as string;
  // Now we can read the content inside the component description file
  // const componentDescription = await fs.readFile(
  //   process.cwd() +
  //   `/public/ui/${params.componentName}/${componentDescriptionFile}`,
  //   "utf8",
  // );

  
  //! Read the content inside the component description file
  const componentDescription = await fs.readFile(
    process.cwd() + `/public/ui/${params.componentName}/${componentDescriptionFile}`,
    "utf8"
  );

  // Serialize the MDX content
  const mdxSource = await serialize(componentDescription);

  return (
    <main className="">
      <section className="px-4 py-16 sm:max-w-7xl sm:mx-auto">
        <h1 className="text-2xl font-bold capitalize">
          {params.componentName}
        </h1>
        <RemoteMdxWrapper mdxSource={mdxSource} />
        <div className="mt-16 space-y-12">
          {htmlFiles.length ? (
            htmlFiles.map((file: string) => (
              <ComponentDetails
                key={file}
                category={params.componentName}
                file={file}
              />
            ))
          ) : (
            <p>Empty</p>
          )}
        </div>
      </section>
    </main>
  );
}
