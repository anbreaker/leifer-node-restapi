import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    const pathStorage = `${__dirname}/../storage`;

    callBack(null, pathStorage);
  },

  filename: function (req, file, callBack) {
    const extension = file.originalname.split('.').pop();

    const filename = `file-${Date.now()}.${extension}`;

    callBack(null, filename);
  },
});

export const uploadMiddleware = multer({
  storage,
});
