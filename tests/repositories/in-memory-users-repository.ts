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

  async findAll () {
    return this.items
  }

  async delete (user: User) {
    const itemIndex = this.items.findIndex((item) => item.id === user.id)

    this.items.splice(itemIndex, 1)
  }

  async create (user: User) {
    this.items.push(user)
  }
}
