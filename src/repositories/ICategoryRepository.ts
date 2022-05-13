import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./PostgresCategoriesRepository";


interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository }