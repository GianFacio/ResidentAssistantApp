import { Material } from './materials.model';
export interface StudentInterface {
  firstName: string,
  lastName: string,
  room: string,
  phone: string,
  grade: string,
  materials: Material[]
}
