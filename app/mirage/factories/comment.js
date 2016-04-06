import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  body: faker.lorem.paragraph
});
