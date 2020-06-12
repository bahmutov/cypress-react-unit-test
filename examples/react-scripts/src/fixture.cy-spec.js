/// <reference types="cypress" />
// we can directly import JSON fixture files
// from the local JSON file
import names from './names.json'
// and from the fixtures folder
import fixtureNames from '../cypress/fixtures/names.json'

describe('fixtures', () => {
  it('imports the array', () => {
    expect(names).to.deep.equal(['joe', 'mary'])
    expect(fixtureNames).to.deep.equal(['joe', 'mary'])
  })
})
