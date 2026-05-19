exports.handler = async () => {
  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTOgalT2fwgYSba4pzOxEfkhje0u3gEi6zwTksCcWzagBYMUgKAg4vO8I4Jke0MPA/pub?gid=1808076565&single=true&output=csv');
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
