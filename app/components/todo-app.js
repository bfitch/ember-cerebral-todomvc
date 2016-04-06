import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import CerebralMixin from 'ember-cerebral/mixins/cerebral-mixin';

export default Ember.Component.extend(CerebralMixin, {
  cerebralProps() {
    return {
      todos: 'todos',
      activeFilter: 'activeFilter'
    }
  },

  layout: hbs`
    <section class="todoapp">
      {{x-header}}
      {{x-main todos=todos activeFilter=activeFilter}}
      {{x-footer todos=todos activeFilter=activeFilter}}
    </section>
    <footer class="info">
    	<p>Double-click to edit a todo</p>
    	<p>Created by <a href="http://todomvc.com">Brian Fitch</a></p>
    	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  `
});
