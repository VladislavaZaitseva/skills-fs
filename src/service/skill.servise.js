const fs = require('fs');

const path = './storage/storage.json';

function getAllSkill() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id == id);
  if (!filtered.length) throw new Error('id not found');
  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  const item = {
    id: data.length + 1,
    title: title,
  };

  data.push(item);
  fs.writeFileSync(path, JSON.stringify(data));

  return data;
}

function deleteSkill(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  fs.writeFileSync(path, JSON.stringify(data));
  return filtered;
}

function putSkillUpdate(id, title) {
  const data = JSON.parse(fs.readFileSync(path));
  const item = { id, title };
  const filtered = data.filter(el => el.id != id);
  if (data.length == filtered.length) throw new Error('нет такого id');

  fs.writeFileSync(path, JSON.stringify(data));
  filtered.push(item);
  return filtered;
}

module.exports = { getAllSkill, createSkill, deleteSkill, putSkillUpdate, getSkillById };
