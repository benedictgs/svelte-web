# Svelte web with React Chart component Branch

This is a branch of [main](https://github.com/benedictgs/svelte-web/tree/main) with Svelte + React component chart from nivo (powered by D3)


## React component compatibility

I am using a small adapter from [jpinho/svelte-react-kit](https://github.com/jpinho/svelte-react-kit) explained [more on this article.](https://pandemicode.dev/using-react-within-your-svelte-applications-3b1f2a75aefc). 

This use react DOM Render on top of svelte. 

For other alternative, there is [svelte-preprocessor-react](https://www.npmjs.com/package/svelte-preprocess-react) explained in this [article.](https://bfanger.medium.com/combining-react-and-svelte-in-a-single-app-interop-6f78aed96ce2)

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
