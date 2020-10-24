import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(req, file, callback) {
      const fileName = `${Date.now()}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
