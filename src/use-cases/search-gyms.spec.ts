import { InMemoryGymsRepository } from '@/repositories/inMemory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'JavaScript Gyms',
      description: 'A JavaScript Gym',
      phone: null,
      latitude: -20.9398483,
      longitude: -48.4887321,
    })

    await gymsRepository.create({
      title: 'TypeScript Gyms',
      description: 'A TypeScript Gym',
      phone: null,
      latitude: -20.9398483,
      longitude: -48.4887321,
    })

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gyms' }),
    ])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript Gyms ${i}`,
        description: `A JavaScript Gym ${i}`,
        phone: null,
        latitude: -20.9398483,
        longitude: -48.4887321,
      })
    }
    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gyms 21' }),
      expect.objectContaining({ title: 'JavaScript Gyms 22' }),
    ])
  })
})
