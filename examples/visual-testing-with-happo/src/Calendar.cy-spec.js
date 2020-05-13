/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Calendar from './Calendar'

describe('Calendar heatmap', () => {
  it('random data', () => {
    mount(<Calendar />)
  })
})
