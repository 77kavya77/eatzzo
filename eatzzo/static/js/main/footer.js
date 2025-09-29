// Create the footer element
const footer = document.createElement('footer');

// Create the paragraph element with copyright and links
const footerText = document.createElement('p');
footerText.innerHTML = '© 2025 EatZzo • <a href="/eatzzo/templates/public/ourstory.html">About</a> • <a href="/eatzzo/templates/account/help.html">Help</a> • <a href="#">Privacy</a> • <a href="#">Terms</a>';

// Append the paragraph to the footer
footer.appendChild(footerText);

// Create style element
const style = document.createElement('style');
style.textContent = `
footer {
    background-color: #fff;
    padding: 2px;
    text-align: center;
    font-family: Arial, sans-serif;
    border-top: 1px solid #e7e7e7;
    margin-top: 40px;
}

footer p {
    margin: 0;
    color: #555;
    font-size: 14px;
}

footer a {
    color: #555;
    text-decoration: none;
    margin: 0 5px;
}

footer a:hover {
    text-decoration: underline;
    color: #333;
}

@media only screen and (max-width: 1024px) {
    footer {
        display: none;
    }
}
`;

// Add elements to document
document.head.appendChild(style);
document.body.appendChild(footer);