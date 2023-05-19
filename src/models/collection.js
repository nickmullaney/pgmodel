`use strict`;
// This class replaces all your CRUD operations but has to use SQL functionality
class Collection {
  constructor(model) {
    this.model = model;
  }

  // This sequelize functionality lives here
  // can make a route model that abstracts all of this too

  async create(data) {
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (e) {
      console.error('We have a ModelInterface create error', e);
      return e;
    };
  };

  // creates a default of null if I don't enter in an ID
  // This finds 1 or finds all based on if else
  async read(id=null) {
    try {
      if(id){
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }else{
        const allRecords = await this.model.findAll();
        return allRecords;
      }
    } catch (e) {
      console.error('We have a ModelInterface create error', e);
      return e;
    };
  };
};
module.exports = Collection;