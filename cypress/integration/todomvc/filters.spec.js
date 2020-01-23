/// <reference types= "cypress" />

const {
  navigate,
  addTodo,
  toggleTodo,
  showOnlyActiveTodos,
  showOnlyCompletedTodos,
  showAllTodos,
  validateNumberOfTodosShown
} = require ("../../page-objects/page-actions");

describe('Todo filtering', () => {
  beforeEach(() => {
    navigate()
    addTodo('Clean room')
    addTodo('Learn Js')
    addTodo('Use Cypress')
    toggleTodo(1)
  });

  it('Should filter active todos', () => {
    showOnlyActiveTodos()

    validateNumberOfTodosShown(2)
  });

  it('Should filter completed todos', () => {
    showOnlyCompletedTodos()

    validateNumberOfTodosShown(1)
  });

  it('Should filter all todos', () => {
    showAllTodos()

    validateNumberOfTodosShown(3)
  });
});
