const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";

export const fetchBreeds = () => {
  const apiUrl = new URL(endpointUrl);
  if(!apiUrl) {
    return {
      error: "Invalid URL"
    };
  }
  return fetch(apiUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Error fetching data");
      }
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      return {
        error: err.message || "Error fetching data"
      }
    });
};