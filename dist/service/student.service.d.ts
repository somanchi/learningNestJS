import { CreateStudentDto } from 'src/inputs/create-student.dto';
import { Model } from 'mongoose';
import { UpdateStudentDto } from 'src/inputs/update-student.dto';
import { IStudent } from 'src/models/student.interface';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<IStudent>);
    createStudent(createStudentDto: CreateStudentDto): Promise<IStudent>;
    updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent>;
    getAllStudents(): Promise<IStudent[]>;
    getStudent(studentId: string): Promise<IStudent>;
    deleteStudent(studentId: string): Promise<IStudent>;
}
