import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {

  create({}: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository }