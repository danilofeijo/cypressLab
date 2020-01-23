/// <reference types="cypress" />

function navigate() {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
};

function addTodo(todoText) {
  cy.get('.new-todo', { timeout: 6000 }).type(todoText + '{enter}')
}

function toggleTodo(todoIndex) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

function clearCompleted() {
  cy.contains('Clear completed').click()
}

function showOnlyActiveTodos() {
  cy.contains('Active').click()
}

function showOnlyCompletedTodos() {
  cy.contains('Completed').click()
}

function showAllTodos() {
  cy.contains('All').click()
}

function validateNumberOfTodosShown(expectedNumberOfTodos) {
  cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
  
}

function validateTodoCompletedState(todoIndex, shouldBeCompleted) {
  const todoItem = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

  todoItem.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

function validateTodoText(todoIndex, expectedText) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
}

function validateToggleState(todoIndex, shouldBeToggled) {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

  label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}

module.exports = {
  navigate,
  addTodo,
  toggleTodo,
  clearCompleted,
  showOnlyActiveTodos,
  showOnlyCompletedTodos,
  showAllTodos,
  validateNumberOfTodosShown,
  validateTodoCompletedState,
  validateTodoText,
  validateToggleState
}
