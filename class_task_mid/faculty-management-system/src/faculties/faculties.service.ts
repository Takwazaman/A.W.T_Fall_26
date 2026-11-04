import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>,
  ) {}

  async createFaculty(createFacultyDto: CreateFacultyDto) {
    const faculty = this.facultyRepository.create(createFacultyDto);
    return await this.facultyRepository.save(faculty);
  }
}