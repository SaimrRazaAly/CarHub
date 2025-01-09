import { CarProps } from "@/types/types";

export async function fetchCars() {
  const headers = {
    "X-Api-Key": "emfj0AxC2oUqJ4kvdW4I9Q==lyeaJRsB4gJva7HV",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    // Set the API URL and parameters
    const apiUrl = `https://api.api-ninjas.com/v1/cars?&model=civic`;

    // Make the fetch call with headers
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });
    console.log(response)

    // Handle HTTP response errors
    if (!response.ok) {
      console.log(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const result = await response.json();
    console.log(result); // Optional: Log the result for debugging
    return result;
  } catch (error) {
    console.log("Error fetching car data:");
    throw error; // Rethrow error for caller to handle if necessary
  }
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
export  function GenerateCarImageUrl(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  
  const { make, model, year } = car;
  
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}

