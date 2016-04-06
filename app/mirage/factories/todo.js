import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  completed: faker.random.boolean,

  title(i) {
    return `Todo ${i + 1}`;
  }
});
