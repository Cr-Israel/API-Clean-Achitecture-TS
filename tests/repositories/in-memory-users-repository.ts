import { type User } from '../../src/domain/entities/user'

export class InMemoryUsersRepository {
  public items: User[] = []

  async findByEmail (email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create (user: User) {
    this.items.push(user)
  }
}
