const url = process.env.NEXT_PUBLIC_GAME_URL;
const apikey = process.env.NEXT_PUBLIC_GAME_APIKEY;
const host = process.env.NEXT_PUBLIC_GAME_HOST;

export const getGames = async () => {
  const response = await fetch(`${url}/games`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apikey,
      "x-rapidapi-host": host,
    },
  });
  if (!response.ok) {
    throw new Error('Gagal mengirim pesan');
  }

  const data = await response.json();
  return data;
};

export const getGameDetails = async (id) => {
  const response = await fetch(`${url}/game?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apikey,
      "x-rapidapi-host": host,
    },
  });
  if (!response.ok) {
    throw new Error('Gagal mengambil detail game');
  }

  const data = await response.json();
  return data;
};
