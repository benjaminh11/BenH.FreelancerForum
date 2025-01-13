//first set arrays for name/occupation/price
const names = ["Ben", "Nancy", "Taylor", "Ira", "Gleyber"];
const occupations = [
  "Programmer",
  "Writer",
  "Doctor",
  "Teacher",
  "Entertainer",
];
const rates = [20, 40, 60, 80, 100];
const maxListings = 50;

//create initial array with objects for each freelancer
const listings = [
  {
    name: "Nancy",
    occupation: "writer",
    rate: 20,
  },
  {
    name: "Ben",
    occupation: "entertainer",
    rate: 40,
  },
];

//next we nust create a function that updates the data or state of the listings

//set cap for how many listings
function addListing() {
  if (listings.length >= maxListings) {
    clearInterval(addListingIntervalId);
  }
  //randomize names
  const name = names[Math.floor(Math.random() * names.length)];
  //randomize occupation
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  //randomize rate
  const rate = rates[Math.floor(Math.random() * rates.length)];
  listings.push({ name, occupation, rate });
}

//get averages of rates
function getMean() {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < listings.length; i++) {
    sum += listings[i].rate;
    count += 1;
  }
  return sum / count;
}

//create render function
function render() {
  //grab reference to our html element
  const freelancerList = document.querySelector("#freelancers");
  //create html that goes inside our reference from our listing array
  const freelancerElements = listings.map((listing) => {
    const freelancerElements = document.createElement("li");
    const textAdd =
      (freelancerElements.innerText = ` ${listing.name}, ${listing.occupation}, $${listing.rate}`);
    return freelancerElements;
  });
  freelancerList.replaceChildren(...freelancerElements);

  // grab reference to our average rate html element
  const averageDisplay = document.querySelector("#average-rate");
  //create html that holds our aaverage rate number
  const averageElements = document.createElement("li");
  averageElements.innerText = `The average rate is $${getMean().toFixed(2)}`;
  averageDisplay.replaceChildren(averageElements);
}

const addListingIntervalId = setInterval(() => {
  addListing();
  render();
}, 1000);

render();
