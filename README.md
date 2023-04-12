# Svelte web with Builder.io Integration

This is a branch of [main](https://github.com/benedictgs/svelte-web/tree/main) with Svelte + [Builder.io](https://github.com/BuilderIO/builder)

This will not be on hiatus, as the integration are broken. 

## Builder integration

There is a problem in [integrating the page](https://www.builder.io/c/docs/integrating-builder-pages) from the main documentation as the routing in new sveltekit are changed. 
For correct integration checkout the [examples.](https://github.com/BuilderIO/builder/tree/main/examples/svelte/sveltekit)

## Recreating the project

 Clone this repo `gh repo clone benedictgs/svelte-web`, checkout the branch,  and install the node module with `npm install`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
