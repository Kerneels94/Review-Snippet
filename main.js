// Dom elements
const nextButton = document.querySelector('[data-key="next"]');
const prevButton = document.querySelector('[data-key="prev"]');
const randomButton = document.querySelector('[data-key="random"]');
const heading = document.querySelector('[data-key="heading"]');
const image = document.querySelector('[data-key="image"]');
const job = document.querySelector('[data-key="job"]');
const description = document.querySelector('[data-key="description"]');
const wrapper = document.querySelector(".wrapper");

// array of people

const reviews = [
  {
    img: "./assets/james.jpg",
    name: "James",
    job: "Front end developer",
    description: "Works with the UI",
  },
  {
    img: "./assets/serrah.jpg",
    name: "Serrah",
    job: "Back end developer",
    description: "Works with the backend",
  },
  {
    img: "./assets/owin.jpg",
    name: "Owin",
    job: "Designer",
    description: "Works with the designs",
  },
  {
    img: "./assets/owin.jpg",
    name: "Bronwin",
    job: "Designer Two",
    description: "Works with the designs",
  },
];

// First item on page load
let counter = 0;

const firstPerson = () => {
  let personOne = reviews[counter];
  heading.textContent = personOne.name;
  image.src = personOne.img;
  job.textContent = personOne.job;
  description.textContent = personOne.description;
};

window.addEventListener("DOMContentLoaded", firstPerson);

// Generate random person
const showPerson = (person) => {
  const item = reviews[person];
  heading.textContent = item.name;
  image.src = item.img;
  job.textContent = item.job;
  description.textContent = item.description;
};

// Next person
nextButton.addEventListener("click", () => {
  // When clicked increment counter
  counter++;
  //   If the last person is reached set the counter to 0
  if (counter > reviews.length - 1) {
    counter = 0;
  }
  showPerson(counter);
});

// Previous person
prevButton.addEventListener("click", () => {
  counter--;
  //   if counter is < 0 => Set the counter - to the last person
  if (counter < 0) {
    counter = reviews.length - 1;
  }
  showPerson(counter);
});

// Random person
randomButton.addEventListener("click", () => {
  counter = Math.floor(Math.random() * reviews.length);
  showPerson(counter);
});
