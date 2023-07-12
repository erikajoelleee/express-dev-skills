const skills = [
  { id: 125223, skill: "Learned HTML", done: true },
  { id: 127904, skill: "Learned CSS", done: true },
  { id: 139608, skill: "Learned JS", done: false },
  { id: 139608, skill: "Learned Express.js", done: false },
];

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;

  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);

  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
 Object.assign(skill, updatedSkill);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};
