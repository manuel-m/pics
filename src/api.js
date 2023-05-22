import axios from "axios";

export async function searchImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 31Tx8nswwqzSkiKlYC5D-58FVqmHcOIGwH4WFiWbow0",
    },
    params: {
      query: term,
    },
  });

  
  return response.data.results;
}
