/// <reference types= "cypress" />

const {
  navigate,
  addTodo,
  toggleTodo
} = require ("../../page-objects/page-actions");

describe('Visual Validation', () => {
  before(() => {
    navigate()
  });

  beforeEach(() => {
    cy.eyesOpen({
      appName: 'TAU Todo',
      batchName: 'TAU Todo Hey!',
      browser: [
        {name: 'chrome', width: 1366, height: 768},
        {name: 'firefox', width: 1366, height: 768},
        {deviceName: 'iPhone X'}
      ]
    })
  });

  afterEach(() => {
    cy.eyesClose()
  });

  it('Should validate todo page layout', () => {
    cy.eyesCheckWindow('empty todo list')
    
    addTodo('Clean room')
    addTodo('Learn Js')
    cy.eyesCheckWindow('two todos')

    toggleTodo(0)
    cy.eyesCheckWindow('mark as completed')
  });
});
