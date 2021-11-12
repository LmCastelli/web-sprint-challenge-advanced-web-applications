import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import articleService from '../services/articleServices';
import Article from './Article';
import { render, screen, waitFor } from '@testing-library/react';
import LambdaHeader from './LambdaHeader';



const fakeArticle = {
    id:"asdfa",
    headline: "article stuff",
    author: null,
    summary: "summary I guess",
    body: "wowowow",
    image: null,
    createdOn: null
}


test('renders without error', ()=>{
    render(<Article article={fakeArticle}/>)
});

test('renders headline, author from the article when passed in through props', async()=> {
    render(<Article article={fakeArticle}/>);

    const headline = await screen.findByTestId('headline');
    expect(headline).toBeInTheDocument();

    const author = await screen.findByTestId('author');
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', async ()=> {
    render(<Article article={fakeArticle} />);

    const otherAuthor = await screen.queryByAltText("Associated Press");
    expect(otherAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {

    const fakeDelete = jest.fn();

    render(<Article article={fakeArticle} handleDelete={fakeDelete} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    // await waitFor(()=> {
    //     expect(fakeDelete).toHaveBeenCalled();
    // })


    
});

//Task List:
//1. Complete all above tests. Create test article data when needed.