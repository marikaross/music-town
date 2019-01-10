import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  title: '',

  songCreationStarted: false,


  isAddButtonDisabled: computed('title', function() {
      return isEmpty(this.get('title'));
  }), 

  actions: {
    updateRating: function(params) {
      var song = params.item,
      rating = params.rating;

      song.set('rating', rating);
    },
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
    canCreateSong: computed('songCreationStarted', 'model.songs.[]', function() {
      return this.get('songCreationStarted') || this.get('model.songs.length');
    })
  }
});
