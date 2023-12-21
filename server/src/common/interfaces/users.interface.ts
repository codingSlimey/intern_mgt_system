class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  hashedRT?: string;
  hashedPassword: string;
  role: 'user' | 'admin';
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Student extends User{
  studentNo: number;
}

export interface Coordinator extends User {
  department: string;
}

export interface Superviser extends User {
  position: string;
  companyId: number;
}