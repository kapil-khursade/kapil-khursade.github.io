import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="flex relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <ExclamationTriangleIcon aria-hidden="true" className="size-6" color="red"/>
            This portfolio is under construction.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Hey, I'm Kapil, Software Developer.
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            A fullstack developer with solid foundations in design. passionate
            about crafting seamless user experiences I thrive at the
            intersection of creativity and functionality.
          </p>
        </div>
      </div>
  );
}

export default Home;
