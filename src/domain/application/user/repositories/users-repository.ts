import { type User } from '../../../entities/user'

export abstract class UsersRepository {
  abstract findByEmail (email: string): Promise<User | null>
  abstract findAll (): Promise<User[]>
  abstract update (user: User): Promise<void>
  abstract remove (user: User): Promise<void>
  abstract create (user: User): Promise<void>
}
