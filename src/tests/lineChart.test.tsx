import lineChart from '@graphs/lineChart';

describe('LineChart', ()=>{
  test('should return an element',()=>{

    const element = lineChart([1,2,3])
    expect(element).toBeDefined()
  })
})