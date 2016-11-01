import config from '../config/environment';
import FixtureAdapter from 'ember-data-fixture-adapter';
import DS from 'ember-data';

var adapter;
if (config.environment === 'test') {
  adapter = FixtureAdapter.extend({});
} else {
  adapter = DS.RESTAdapter.extend({
    host: 'http://localhost:4000'
  });
}

export default adapter;
