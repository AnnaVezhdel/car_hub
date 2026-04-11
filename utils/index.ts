
export async function fetchCars() {
    const headers = {
    'x-rapidapi-key': '228bd7cc2dmshe4b8984f81a4c7dp11bb21jsn183b019d305c',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    'Content-Type': 'application/json'
    }


const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});

const result = await response.json();

return result;
}

export const calculateCarRent = (cylinders: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = cylinders * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};