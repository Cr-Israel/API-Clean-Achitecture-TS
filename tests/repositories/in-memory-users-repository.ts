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

  async update (id: User['_id'], updatedUser: User) {
    // const userIndex = this.items.findIndex((item) => item.email === updatedUser.email)

    // if (userIndex === -1) {
    //   throw new Error('User not found.')
    // }

    // this.items[userIndex].email = updatedUser.email
    // this.items[userIndex].name = updatedUser.name
    // this.items[userIndex].password = updatedUser.password

    const userIndex = this.items.findIndex((user) => user.id === id)

    if (userIndex === -1) {
      throw new Error('User not found.')
    }

    // Atualiza as informações do usuário com base no índice encontrado
    // this.items[userIndex] = {
    //   ...this.items[userIndex], // Mantém as informações existentes do usuário
    //   ...updatedUser // Atualiza com as novas informações
    // }
  }

  async create (user: User) {
    this.items.push(user)
  }
}
