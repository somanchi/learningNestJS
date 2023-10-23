import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './controller/health.controller';
import { StudentController } from './controller/student.controller';
import { StudentSchema } from './models/student.schema';
import { StudentService } from './service/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [HealthController, StudentController],
  providers: [StudentService],
})
export class AppModule {}
