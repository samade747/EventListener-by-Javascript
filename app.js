const paragraph = "This is a paragraph. It is a very long, long paragraph. It contains many sentences that are long. Long sentences are bad. Make sentences short again. Short sentences are easier to read. They are also easier to write."

const para = document.querySelector('p');

para.textContent = paragraph.slice(0, 10) + '...';