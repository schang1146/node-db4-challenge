
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, ingredient_name: 'Rice'},
        {id: 2, ingredient_name: 'Bread'},
        {id: 3, ingredient_name: 'Bacon'},
        {id: 4, ingredient_name: 'Lettuce'},
        {id: 5, ingredient_name: 'Tomato'},
        {id: 6, ingredient_name: 'Ham'},
        {id: 7, ingredient_name: 'Cheese'},
      ]);
    });
};
