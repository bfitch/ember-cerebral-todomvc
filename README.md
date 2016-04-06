# Ember-Cerebral TodoMVC

A TodoMVC fulx implementation using [Cerebral](http://www.cerebraljs.com/) and Ember.

![TodoMVC](https://dl.dropboxusercontent.com/u/6599249/todomvc.png "Ember-Cerebral TodoMVC")

- Provides a mixin to bind cerebral store data to computed properties on Ember Components.

```js
import hbs from 'htmlbars-inline-precompile';
import CerebralMixin from 'ember-cerebral/mixins/cerebral-mixin';

export default Ember.Component.extend(CerebralMixin, {
  cerebralProps() {
    return {
      currentlyEditingTodoIds: 'currentlyEditingTodoIds'
    }
  },

  isEditing: Ember.computed('currentlyEditingTodoIds', 'todo', function() {
    return this.get('currentlyEditingTodoIds').includes(this.get('todo.id'));
  }),

  layout: hbs`
    <li>
      <input type="checkbox">
			{{#if isEditing}}
				{{edit-todo todo=todo}}
			{{/if}}
    </li>
  `
});
```
- Co-locates templates with their backing components (React style) using `htmlbars-inline-precompile`.
- `GET api/todos` and `POST api/todo/:id` endpoints are mocked using [Ember CLI MIRAGE](http://www.ember-cli-mirage.com/) to demonstrate ajax requests.

### Thanks

Thanks to Toran Billups (@toranb) who's [screencast](https://vimeo.com/160234990) on [ember-redux](https://github.com/toranb/ember-redux) inspired this integration.

----------------

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

