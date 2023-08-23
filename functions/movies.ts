import { type Handler } from '@netlify/functions';
import {} from 'dotenv/config';

const handler: Handler = async (event) => {
  let queryparams = '';
  const api_key = process.env['API_KEY'];

  for (const key in event.queryStringParameters) {
    queryparams += `${key}=${event.queryStringParameters[key]}&`;
  }

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${api_key}&${queryparams}`
  );

  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ data: json }),
  };
};

export { handler };
