import { Category } from "../../model/Category";
import { ICategoryRepository } from "../ICategoryRepository";


export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoryRepository{

  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      return CategoriesRepository.INSTANCE = new CategoriesRepository();
    } else {
      return CategoriesRepository.INSTANCE;
    }
  }

  create({ name, description }: ICreateCategoryDTO): void {        
    const category = new Category();
    
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)

    return category;
  }
}

export { CategoriesRepository }