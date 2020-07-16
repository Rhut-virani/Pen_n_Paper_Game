const axios = require("axios");

const baseUrl = window.location.hostname.includes("localhost")
	? "http://localhost:8080"
	: "";

const Api = async () => {
	const url = baseUrl + "/boxdata";
	return await axios
		.get(url)
		.then((results) => {
      return results.data;
		})
		.catch((error) => {
      console.log(error);
      return [];
    });
};

export default Api;
