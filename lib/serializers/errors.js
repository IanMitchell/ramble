function getFromCode(error) {
  switch (error.code) {
    case 'P2002':
      return error.meta.target.map((field) => ({
        field,
        message: 'This value must be unique!',
      }));
    default:
      return [
        {
          field: 'form',
          message: 'A problem was encountered',
        },
      ];
  }
}

export default function serialize(error) {
  switch (error.constructor.name) {
    case 'PrismaClientInitializationError':
    case 'PrismaClientKnownRequestError':
      return [
        {
          name: 'Database Error',
          message: 'Ramble was unable to connect to your database.',
        },
      ];
    case 'PrismaClientUnknownRequestError':
      return [
        {
          name: 'Database Error',
          message:
            'Ramble was unable to perform a database operation. Do you need to migrate?',
        },
      ];
    case '?':
      return getFromCode(error);
    default:
      console.error(error.constructor.name);
      return [
        {
          name: 'Error',
          message: error.message,
        },
      ];
  }
}
