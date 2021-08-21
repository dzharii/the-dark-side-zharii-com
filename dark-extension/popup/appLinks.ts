/// <reference path="lib.ts" />

namespace AppLinks {

    const links = [
        {href: 'https://the-dark-side.zharii.com/', text: 'True Dark Side' }
    ];
    console.log('Hello');
    const appLinks = Force.findOne('#appLinks');

    appLinks.innerHTML = `
    <h2>Links</h2>
    <ul>
        ${links.map(item => `<a href="${item.href}" target="_blank">${item.text}</a>`)}
    <ul>
    `;
}