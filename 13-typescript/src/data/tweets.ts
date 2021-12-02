type Tweet = {
  id: string;
  text: string;
  createAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweet: Tweet[] = [
  {
    id: "1",
    text: "typescript study",
    createAt: new Date(),
    name: "byung",
    username: "julius",
  },
  {
    id: "2",
    text: "typescript is hard",
    createAt: new Date(),
    name: "byung",
    username: "julius",
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweet;
}
