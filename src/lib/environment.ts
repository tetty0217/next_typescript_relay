import {Environment, Network, RecordSource, Store} from 'relay-runtime';

export const fetchQuery = (operation: any, variables: any) => {
  return fetch(process.env.RELAY_ENDPOINT as string, {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response: Response) => {
    if (response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json()
  });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
