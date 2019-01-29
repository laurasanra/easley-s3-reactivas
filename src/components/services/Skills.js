const URL = "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json";

const getSkills = () =>
  fetch(URL)
    .then(res => res.json());

export {
  getSkills,
};