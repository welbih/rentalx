import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  
  constructor(private speficiationsRepository: ISpecificationsRepository) {}
  
  execute({name, description}: IRequest) {
    
    const specificationAlreadyExists = this.speficiationsRepository.findByName(name);
    
    if(specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.speficiationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase };