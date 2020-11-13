import { mountHook } from 'cypress-react-unit-test'
const { useCustomHook } = require('./customHook')

describe('useGroupKeys hook unit test', () => {
  it('Check Groups keys for String', () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    mountHook(() => useCustomHook()).then((result) => {
      console.log(result)
    })
  })
})
