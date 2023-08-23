import { type Handler } from '@netlify/functions';
import { environment } from 'src/environments/environment';

const handler: Handler = async (event) => {
  let queryparams = '';

  for (const key in event.queryStringParameters) {
    queryparams += `${key}=${event.queryStringParameters[key]}&`;
  }

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${environment.api_key}&${queryparams}`
  );

  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ data: json }),
  };
};

export { handler };
