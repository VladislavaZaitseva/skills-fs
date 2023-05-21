function isValidSkillId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error('должна быть цифра');
  if (id < 0) throw new Error('id не может быть отрицательным');
  next();
}

function isValidSkillTitle(req, res, next) {
  const { title } = req.body;

  if (!title) throw new Error('your title is empty');
  if (!isNaN(title)) throw new Error('your title is number');

  next();
}

module.exports = { isValidSkillId, isValidSkillTitle };
