/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'

describe('Accessibility', () => {
  context('aria', () => {
    it('passes', () => {
      mount(
        <input
          type="text"
          aria-label={labelText}
          aria-required="true"
          onChange={onchangeHandler}
          value={inputValue}
          name="name"
        />,
      )
    })
  })
})
