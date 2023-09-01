import { InMemoryUsersRepository } from 'tests/repositories/in-memory-users-repository'
import { RegisterUserUseCase } from './register-user'
import { beforeEach, describe, expect, it } from 'vitest'

let inMemoryUsersRepository: InMemoryUsersRepository

let sut: RegisterUserUseCase

describe('Register User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()

    sut = new RegisterUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to register a new user', async () => {
    const result = await sut.execute({
      name: 'Israel',
      email: 'doe@example.com',
      password: 'teste123'
    })

    expect(result).toBe(true)
    expect(result.value).toEqual({
      user: inMemoryUsersRepository.items[0]
    })
  })
})
