import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen, waitFor } from 'react-dom';
import LambdaHeader from './LambdaHeader';


const fakeArticle = {
    id:7,
    headline: "article stuff",
    author: "me",
    summary: "summary I guess",
    body: "wowowow",
    image: null,
    createdOn: null
}

test("renders component without errors", async () => {
    
    
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.