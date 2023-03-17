import { InMemoryGymsRepository } from '@/repositories/inMemory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'JavaScript Gyms',
      description: 'A JavaScript nearby Gym',
      phone: null,
      latitude: -20.9398483,
      longitude: -48.4887321,
    })

    await gymsRepository.create({
      title: 'TypeScript Gyms',
      description: 'A TypeScript far Gym',
      phone: null,
      latitude: -20.9073112,
      longitude: -48.6526786,
    })

    const { gyms } = await sut.execute({
      userLatitude: -20.9398477,
      userLongitude: -48.4875392,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gyms' }),
    ])
  })
})
