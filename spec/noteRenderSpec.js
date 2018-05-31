describe('notes', function() {
  it('equals', function() {
    expect(1).toEqual(1)
  })
  it('does not equal', function() {
    expect(1).toEqual(2)
  })
})
describe('arrays', function() {
  it('can do arrays', function() {
    expect([1]).toEqual([1])
  })
  it('errors arrays', function() {
    expect([1]).toEqual([2])
  })
})
