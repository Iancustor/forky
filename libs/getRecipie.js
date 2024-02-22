const url = "https://burgers-hub.p.rapidapi.com/burgers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d093550120msh1f46a1a65a7bcb2p16b94djsn3bfeaa64baca",
    "X-RapidAPI-Host": "burgers-hub.p.rapidapi.com",
  },
};

export default async function getRecipie() {
  try {
    const response = await fetch(url, options);
    const recipie = await response.text();
    return recipie;
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}
