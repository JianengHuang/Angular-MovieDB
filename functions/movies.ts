import { type Handler } from '@netlify/functions';
import { environment } from 'src/environments/environment';

const handler: Handler = async (event) => {
  const t = event.queryStringParameters?.['t'] ?? 'batman';

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${environment.api_key}&t=${t}`
  );

  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ movies: json }),
  };
};

export { handler };
