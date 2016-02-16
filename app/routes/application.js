import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('foo');
      //.catch(error => {
      //// error is 'true' because of https://github.com/simplabs/ember-simple-auth/blob/1.0.1/addon/mixins/data-adapter-mixin.js#L100 :(
      //debugger;
    //});
  },

  actions: {
    error(error) {
      // error is 'true' because of https://github.com/simplabs/ember-simple-auth/blob/1.0.1/addon/mixins/data-adapter-mixin.js#L100 :(
      console.error(`Error: ${error}`);
      debugger;
    }
  }
});
