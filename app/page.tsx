import CarCard from "@/components/CarCard";
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import { fetchCars } from "@/utils";
import { FilterProps, HomeProps } from "@/types/types";

export default async function Home({searchParams} :HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
console.log(allCars)

const isDataEmpty  = !Array.isArray(allCars) || allCars.length < 1 || !allCars 
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container ml-10">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />
        </div>

{!isDataEmpty ? (
  <section>
    <div>
      {allCars.map((car)=>(
        <CarCard car={car}/>
      ))}
    </div>
  </section>
): (
  <div>
    <h2>Error in page.tsx</h2>
    
  </div>
)}

      </div>
    </main>
  );
}
