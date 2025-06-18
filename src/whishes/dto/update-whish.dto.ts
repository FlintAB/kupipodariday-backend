import { PartialType } from '@nestjs/mapped-types';
import { CreateWhishDto } from './create-whish.dto';

export class UpdateWhishDto extends PartialType(CreateWhishDto) {}
