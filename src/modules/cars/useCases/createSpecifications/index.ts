import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }