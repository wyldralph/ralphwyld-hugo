export default async (event, context) => {
  const buildHookURL = 'https://api.netlify.com/build_hooks/6862785b01fb0b3c1238e3e5';

  try {
    const response = await fetch(buildHookURL, {
      method: 'POST'
    });

    if (!response.ok) {
      return new Response(`Build hook failed: ${response.statusText}`, {
        status: response.status
      });
    }

    return new Response('Build triggered successfully', { status: 200 });

  } catch (error) {
    return new Response(`Error triggering build: ${error.message}`, { status: 500 });
  }
};
