exports.handler = async () => {
  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQBMw7x7DPnPtGn3C1Fw6vdW7JVG1JOzVIuMwq1YZkyPwFE5B4lg16inRUY8ESZ_KJTHfvusnIUfvvn/pub?output=csv');
    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
      },
      body: text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
