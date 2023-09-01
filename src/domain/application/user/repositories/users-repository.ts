import { type User } from '../../../entities/user'

export abstract class UsersRepository {
  abstract findByEmail (email: string): Promise<User | null>
  abstract findAll (): Promise<User[]>
  abstract update (id: User['_id']): Promise<void>
  abstract remove (id: User['_id']): Promise<void>
  abstract create (user: User): Promise<void>
}
