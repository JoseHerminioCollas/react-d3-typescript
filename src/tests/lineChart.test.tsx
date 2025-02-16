import React from 'react';
import { render, screen } from '@testing-library/react';
import lineChart from '../lineChart';

describe('LineChart', ()=>{
  test('should return an element',()=>{

    const element = lineChart([1,2,3])
    expect(element).toBeDefined()
  })
})