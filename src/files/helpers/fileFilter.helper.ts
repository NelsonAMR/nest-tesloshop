export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) {
    return callback(new Error('File is not provided'), false);
  }
  const fileExtension = file.originalname.split('.').pop();
  const allowedExtensions = ['jpg', 'jpeg', 'png'];

  if (fileExtension && allowedExtensions.includes(fileExtension)) {
    return callback(null, true);
  }

  console.log('Invalid file type:', fileExtension);

  callback(new Error('Invalid file type'), false);
};
