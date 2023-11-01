const quotes = [
    {
        quote: "인용구1",
        author: "작가1",
    },
    {
        quote: "인용구2",
        author: "작가2",
    },
    {
        quote: "인용구3",
        author: "작가3",
    },
    {
        quote: "인용구4",
        author: "작가4",
    },
    {
        quote: "인용구5",
        author: "작가5",
    },
    {
        quote: "인용구6",
        author: "작가6",
    },
    {
        quote: "인용구7",
        author: "작가7",
    },
    {
        quote: "인용구8",
        author: "작가8",
    },
    {
        quote: "인용구9",
        author: "작가9",
    },
    {
        quote: "인용구10",
        author: "작가10",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
