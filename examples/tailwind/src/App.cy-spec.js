/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from './App'

describe('Tailwind App', () => {
  it('is stylish', () => {
    mount(<App />)
  })
})
