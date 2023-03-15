import { Gym } from '@prisma/client'
import { GymsRepository } from '../gym-repository'

class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string): Promise<Gym | null> {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) return null

    return gym
  }
}

export { InMemoryGymsRepository }