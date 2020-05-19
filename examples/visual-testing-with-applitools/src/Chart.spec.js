/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { CustomTheme } from './Chart'

describe('Chart', () => {
  it('shows the chart', () => {
    mount(<CustomTheme />)
  })
})
