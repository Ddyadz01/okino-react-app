export const getFilms = async () => {
  const data = await fetch('https://api.kinopoisk.dev/v1.3/movie?limit=50', {
    headers: {
      'X-API-KEY': '9HNDD8V-1X4M2T0-JNHV7SP-CRMMECN',
      // MT1ZHPJ-RVQ4PT4-JD925SK-DM55KV0
    },
    cache: 'force-cache',
  }).then((res) => res.json());
  return data.docs;
};
