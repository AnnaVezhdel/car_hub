import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const getString = (param: string | string[] | undefined): string => {
    if (Array.isArray(param)) return param[0] || "";
    return param || "";
  };

  const getNumber = (
    param: string | string[] | undefined,
  ): number | undefined => {
    const value = Array.isArray(param) ? param[0] : param;
    if (!value) return undefined;

    const parsed = Number(value);
    return isNaN(parsed) ? undefined : parsed;
  };

  const filters = await searchParams;

  const allCars = await fetchCars({
    manufacturer: getString(filters?.manufacturer),
    year: getNumber(filters?.year),
    fuel: getString(filters?.fuel),
    limit: getNumber(filters?.limit),
    model: getString(filters?.model),
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 flex w-full justify-between items-center flex-wrap gap-6">
          <SearchBar />
          <div className="p-6 flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <CarCard
                  key={`${car.make}-${car.model}-${car.year}`}
                  car={car}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
