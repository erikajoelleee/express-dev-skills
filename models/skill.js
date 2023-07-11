const skills = [
  { id: 2000, skill: "finished school", done: true },
  { id: 2016, skill: "got diploma", done: true },
  { id: 2023, skill: "software engineer", done: false },
];

function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  module.exports = {
    getAll,
    getOne
  };
  