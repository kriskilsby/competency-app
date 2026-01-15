import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Employee } from '../employees/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
