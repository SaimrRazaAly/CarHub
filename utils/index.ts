export async function fetchCars() {
    const headers = {
      "X-Api-Key": "emfj0AxC2oUqJ4kvdW4I9Q==lyeaJRsB4gJva7HV",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    try {
      // Set the API URL and parameters
      const apiUrl = `https://api.api-ninjas.com/v1/cars?limit=2&model=camry`;
  
      // Make the fetch call with headers
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });
  
      // Handle HTTP response errors
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
  
      // Parse the JSON response
      const result = await response.json();
      console.log(result); // Optional: Log the result for debugging
      return result;
    } catch (error:any) {
      console.error('Error fetching car data:', error.message);
      throw error; // Rethrow error for caller to handle if necessary
    }
  }
  