import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Song = EmberObject.extend({
  title: '',
  band:'',
  rating: 0
});

export default Route.extend({
  model: function () {
    var blackDog = EmberObject.create({
      title: "Black Dog",
      band: "Led Zepplin",
      rating: 3
    });

    var yellowLedbetter = EmberObject.create({
      title: "Yellow LedBetter",
      band: "Pearl Jam",
      rating: 4
    });

    var pretender = EmberObject.create({
      title: "The Pretender",
      band: "Foo Fighters",
      rating: 2
    });

    return [blackDog, yellowLedbetter, pretender]
  }
});
