import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { compare } from 'bcryptjs'
import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
