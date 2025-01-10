import { CarProps, FilterProps } from "@/types/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // const url =  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}`;
  const url =  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2499b6d8f6mshf74e4bedc1c36b6p128a94jsn84dad61ef311',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};
let result;
try {
	const response = await fetch(url, options);
 result = await response.json();
	// console.log(result);
} catch (error) {
	console.error(error);
}

return result

}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// api for calling images of car
// export  function GenerateCarImageUrl(car: CarProps, angle?: string) {
//   const url = new URL("https://cdn.imagin.studio/getimage");

//   const { make, model, year } = car;

//   url.searchParams.append("customer", "hrjavascript-mastery");
//   url.searchParams.append("make", make);
//   url.searchParams.append("modelFamily", model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("modelYear", `${year}`);
//   url.searchParams.append("angle", `${angle}`);

//   return `${url}`;
// }
