
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_id: 'rowValue1', ingredient_id: 99},
        {id: 2, recipe_id: 'rowValue2', ingredient_id: 99},
        {id: 3, recipe_id: 'rowValue3', ingredient_id: 99}
      ]);
    });
};
