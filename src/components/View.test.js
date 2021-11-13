import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';

jest.mock("../services/articleServices")

const fakeArticles = [
{
    id:"asdfa",
    headline: "article stuff",
    author: null,
    summary: "summary I guess",
    body: "wowowow",
    image: null,
    createdOn: null
},

{
    id:"aaaaa",
    headline: "article stuff",
    author: null,
    summary: "summary I guess",
    body: "wowowow",
    image: null,
    createdOn: null
},

{
    id:"bbbbb",
    headline: "article stuff",
    author: null,
    summary: "summary I guess",
    body: "wowowow",
    image: null,
    createdOn: null
}
]

test("renders zero articles without errors", async () => {
    render(<View/>)
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(fakeArticles)

    render(<View articles={fakeArticles}/>)

    const articlesFound = await screen.findAllByText(/article/i)
    expect(articlesFound).toHaveLength(1);


});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.