import Route from '@ember/routing/route';
import Song from 'music-town/models/song';

export default Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },

  resetController: function(controller) {
    controller.set('songCreationStarted', false);
  },

  actions: {
    didTransition: function() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');
      var song = Song.create({title: title, band: band});
      band.get('songs').pushObject(song);
      controller.set('title', '')
    },
    
  } 
});