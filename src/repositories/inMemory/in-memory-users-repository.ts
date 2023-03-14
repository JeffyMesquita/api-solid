import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: '20f8bfb7-9838-4262-93f1-67c9939597cf',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) return null

    return user
  }
}

export { InMemoryUsersRepository }
