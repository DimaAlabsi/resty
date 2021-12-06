import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Result from '../components/results';
import Form from '../components/form';

describe('form area testing',()=>{
    it('there is a button on the form ', async () => {
        let apiFunction = jest.fn();
        render(<Form handleApiCall={apiFunction} />);
        const button = screen.getByTestId('button-test');
        expect(button).toBeInTheDocument();
        
    });
it('render soccer api', async () => {
    const fetchApi = await fetch ('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=qBtcBcP37MprbusGp0LIvnGVxNnshocrWIEPr2xLQmeTgEJMnMgDD11YiOXs');
    
  render(<Result resultTest={fetchApi}/>);
  
    expect(fetchApi).toBeTruthy();
  });

})
