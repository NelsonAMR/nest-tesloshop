import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilter.helper';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log('hola');
    if (!file) {
      console.log('File is not provided');
      throw new BadRequestException('Valid Image is not provided');
    }
    console.log('File received:', file);
    return file;
  }
}
