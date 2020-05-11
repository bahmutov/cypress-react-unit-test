import React from 'react'
import { mount } from 'cypress-react-unit-test'
import MaterialUIPickers from './DatePicker'

describe('Material UI date picker', () => {
  it('works', () => {
    mount(<MaterialUIPickers />)
    cy.get('#date-picker-inline').should('have.value', '08/18/2014')
    cy.percySnapshot('Datepicker initial')

    cy.get('button[aria-label="change date"]').click()
    cy.get('.MuiPickersBasePicker-container').should('be.visible')
    cy.percySnapshot('Datepicker opened')
  })
})
