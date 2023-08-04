# sanity-plugin-enhanced-groups

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-enhanced-groups
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {myPlugin} from 'sanity-plugin-enhanced-groups'

export default defineConfig({
  //...
  plugins: [myPlugin({})],
})
```

## License

[MIT](LICENSE) © William Iommi

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.


### Release new version

Run ["CI & Release" workflow](https://github.com/williamiommi/sanity-plugin-enhanced-groups/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.