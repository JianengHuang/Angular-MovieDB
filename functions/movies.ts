import { type Handler } from '@netlify/functions';
import { environment } from 'src/environments/environment';

const handler: Handler = async (event) => {
  const s = event.queryStringParameters?.['s'] ?? 'batman';

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${environment.api_key}&s=${s}`
  );

  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ data: json }),
  };
};

export { handler };
