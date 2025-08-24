import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) {
    return callback(new BadRequestException('File is not provided'), false);
  }

  const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
  const allowedExtensions = ['jpg', 'jpeg', 'png'];

  if (fileExtension && allowedExtensions.includes(fileExtension)) {
    return callback(null, true);
  }

  return callback(new BadRequestException('Invalid file type'), false);
};
