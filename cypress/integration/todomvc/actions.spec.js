/// <reference types= "cypress" />

const {
  navigate,
  addTodo,
  toggleTodo,
  clearCompleted,
  validateNumberOfTodosShown,
  validateTodoCompletedState,
  validateTodoText,
  validateToggleState
} = require ("../../page-objects/page-actions");

describe('Todo actions', () => {

  beforeEach(() => {
    navigate()
    addTodo('Clear room')
  });

  it('Should navigate to the ToDoMVC App', () => {
    cy.url().should('eq', 'http://todomvc-app-for-testing.surge.sh/')
    cy.location().should((loc) => {
      expect(loc.protocol).to.eq('http:')
      expect(loc.host).to.eq('todomvc-app-for-testing.surge.sh')
      expect(loc.pathname).to.eq('/')
      expect(loc.href).to.eq('http://todomvc-app-for-testing.surge.sh/')
    })
  });

  it('Should add a new todo to the list', () => {
    validateTodoText(0, 'Clear room')
    validateToggleState(0, false)
  });

  it('Should mark a todo as completed', () => {
    toggleTodo(0)

    validateTodoCompletedState(0, true)
  });

  it('should clear completed todos', () => {
    toggleTodo(0)
    clearCompleted()

    validateNumberOfTodosShown(0)
  });
});
