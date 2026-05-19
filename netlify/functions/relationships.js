exports.handler = async () => {
  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ljvJ8XsquiPVtzE8D7BIT4zE_-vor3pU4VTEG5u_G58cgqmBIh4tsoNyFRvSdzNFU-ZeMrw8vU9w/pub?output=csv');
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
