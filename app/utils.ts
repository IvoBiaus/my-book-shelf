export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getIdFromKey = (key: string) => key.split("/")[2];
