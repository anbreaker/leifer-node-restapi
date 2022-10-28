interface IEngine {
  nosql: Object;
  postgres: Object;
}

export const getProperties = (engineDB: Object) => {
  const data: IEngine = {
    nosql: {
      id: '_id',
    },
    postgres: {
      id: 'id',
    },
  };

  return data[engineDB as keyof typeof engineDB];
};
