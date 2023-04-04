import type { PageServerLoad } from './$types';
import { getContent } from '@builder.io/sdk-svelte';
import { BUILDER_API_KEY } from '$env/static/private';

export const load = (async ({ route, url }) => {
//   const urlPath = route.id+ '/';
    const urlPath = url.toString();

  // fetch your Builder content
  const content = await getContent({
    model: 'page',
    apiKey: '30899338d4704c5e9b4ec7b2e3862d48',
    userAttributes: {
      urlPath,
    },
  });

  // return content from `getContent()`
  return {
    content,
  };
}) satisfies PageServerLoad;