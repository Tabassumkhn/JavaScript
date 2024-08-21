const URL = "https://cat-fact.herokuapp.com/facts/random";

const getFact = async () => {
  console.log("Getting data .....");
  let response = await fetch(URL);
  console.log(response.status); // json format
  console.log;
};
