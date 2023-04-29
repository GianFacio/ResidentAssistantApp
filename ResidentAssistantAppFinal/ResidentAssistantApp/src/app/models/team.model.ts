import { Material } from './materials.model';

export interface Team {
  teamId: number,
  month: string,
  budget: string,
  teamTime: string,
  meeting: string,
  materials: Material[]
}
