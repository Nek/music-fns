import isOctave from './'

describe('isOctave', () => {
  it('should return true when interval is Octave', () => {
    expect(isOctave(12)).toBe(true)
  })

  it('should return false when interval is not Octave', () => {
    expect(isOctave(0)).toBe(false)
  })
})
