const skills = [
  { id: 1994, skill: "year born", done: true },
  { id: 2004, skill: "best year ever", done: true },
  { id: 1987, skill: "best decade", done: false },
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
  