import { type User } from '../../../entities/user'

export abstract class UsersRepository {
  abstract findByEmail (email: string): Promise<User | null>
  abstract findAll (): Promise<User[]>
  abstract delete (user: User): Promise<void>
  abstract create (user: User): Promise<void>
}
