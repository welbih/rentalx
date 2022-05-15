import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./implementations/CategoriesRepository";


interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository }