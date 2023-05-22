import axios from "axios";

export async function searchImages() {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 31Tx8nswwqzSkiKlYC5D-58FVqmHcOIGwH4WFiWbow0",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);

  return response;
}
