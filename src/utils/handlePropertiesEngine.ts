export const getProperties = (engineDB: String) => {
  const data = {
    nosql: {
      id: '_id',
    },
    postgres: {
      id: 'id',
    },
  };

  return data[engineDB as keyof typeof data];
};
