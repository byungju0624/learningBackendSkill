let tweets = [
  {
    id: "1",
    text: "화이팅",
    createAt: Date.now().toString(),
    name: "BOb",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "화이팅",
    createAt: Date.now().toString(),
    name: "byungju",
    username: "byungju",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function getAll() {
  return tweets;
}
export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}
export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}
export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}
export async function updateById(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}
export async function deleteById(id) {
  return tweets.filter((tweet) => tweet.id !== id);
}
