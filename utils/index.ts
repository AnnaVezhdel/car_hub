import { CarProps, FilterProps } from "@/types";


export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        "x-rapidapi-key": '228bd7cc2dmshe4b8984f81a4c7dp11bb21jsn183b019d305c',
        "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

    if (manufacturer?.trim()) url.searchParams.append("make", manufacturer);
    if (model?.trim()) url.searchParams.append("model", model);
    if (year) url.searchParams.append("year", `${year}`);
    if (fuel) url.searchParams.append("fuel_type", fuel);

    
    const response = await fetch(url.toString(), { headers });

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


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
    url.searchParams.append("customer", "img");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

return `${url}`;
};



