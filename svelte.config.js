import preprocess from "svelte-preprocess";
import netlify from "@sveltejs/adapter-netlify"; //<--- 추가

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: netlify(), //<--- 추가
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
