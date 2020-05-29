# example: react-snapshots

> Component testing with snapshots using [cypress-plugin-snapshots](https://github.com/meinaart/cypress-plugin-snapshots)

Note: run `npm install` in this folder to symlink `cypress-react-unit-test` dependency.

```shell
npm install
npm run cy:open
# or just run headless tests
npm test
```

Example component taken from [Snapshot Testing React Components with Jest](https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest)

See [cypress/component/PositiveCounter-spec.js](cypress/component/PositiveCounter-spec.js) and saved snapshots in [cypress/component/**snapshots**/](cypress/component/__snapshots__/PositiveCounter-spec.js.snap).
