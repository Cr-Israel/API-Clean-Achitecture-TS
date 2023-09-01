import { User } from '../../../entities/user'
import { type UsersRepository } from '../repositories/users-repository'

interface RegisterUserUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUserUseCase {
  constructor (
    private readonly usersRepository: UsersRepository
  ) {}

  async execute ({
    name,
    email,
    password
  }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseReponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('Email in use, choose another.')
    }

    const user = User.create({
      name,
      email,
      password
    })

    await this.usersRepository.create(user)
  }
}
