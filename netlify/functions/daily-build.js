export default async (event, context) => {
  const buildHookURL = 'https://api.netlify.com/build_hooks/6862785b01fb0b3c1238e3e5';

  try {
    const response = await fetch(buildHookURL, {
      method: 'POST'
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `Build hook failed: ${response.statusText}`
      };
    }

    return {
      statusCode: 200,
      body: 'Build triggered successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error triggering build: ${error.message}`
    };
  }
};