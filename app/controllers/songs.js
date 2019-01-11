import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';

import Controller from '@ember/controller';

export default Controller.extend({
  title: '',

  isAddButtonDisabled: computed('title', function() {
      return isEmpty(this.get('title'));
  })
});
