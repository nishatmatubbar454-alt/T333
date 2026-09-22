export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) {
        return response;
      }
      return await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    } catch (e) {
      return new Response("Not found", { status: 404 });
    }
  }
};
