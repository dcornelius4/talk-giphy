const BASE_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI';

export default function makeApiURL(messageSingleTerm) {
    const url = new URL(BASE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('q', messageSingleTerm);
    console.log('function url', url.toString());
    return url.toString();
}