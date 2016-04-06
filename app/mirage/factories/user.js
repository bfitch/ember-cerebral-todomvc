import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  avatar: faker.internet.avatar,
  email: faker.internet.email
});
