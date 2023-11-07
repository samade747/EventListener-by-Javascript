// // const paragraph = "This is a paragraph. It is a very long, long paragraph. It contains many sentences that are long. Long sentences are bad. Make sentences short again. Short sentences are easier to read. They are also easier to write."

// // const para = document.querySelector('p');

// // para.textContent = paragraph.slice(0, 10) + '...';

// // const button = document.querySelector('button');
// // const plus = document.querySelector('#plus');
// // const minus = document.querySelector('#minus');



// // function showMore() {
// //     para.textContent = paragraph;
// //     button.textContent = "Show Less";
// //     button.setAttribute('onclick', 'showLess()');
// // }



// // function showLess() {
// //     para.textContent = paragraph.slice(0, 10) + " ...";
// //     button.textContent = "Show More";
// //     button.setAttribute('onclick', 'showMore()');
// // }


// // button.addEventListener('click', showMore);
// // button.addEventListener('click', showLess);
// // // button.setAttribute('onclick', 'showMore()');






// // // button.addEventListener('click', (event) => {
// // //     console.log(event.target)
// // //     event.currentTarget.textContent = 'see less'
// // // })



// // // button.addEventListener('click', function (event){
// // //     event.currentTarget.textContent = 'see less'
// // // })

// const paragraph = "This is a paragraph. It is a very long, long paragraph. It contains many sentences that are long. Long sentences are bad. Make sentences short again. Short sentences are easier to read. They are also easier to write.";

// const para = document.querySelector('p');

// para.textContent = paragraph.slice(0, 10) + '...';

// const button = document.querySelector('button');

// function showMoreOrLess() {
//     if (button.textContent === "Show More") {
//         para.textContent = paragraph;
//         button.textContent = "Show Less";
//     } else {
//         para.textContent = paragraph.slice(0, 10) + " ...";
//         button.textContent = "Show More";
//     }
// }

// button.addEventListener('click', showMoreOrLess);


const paragraph = "This is a paragraph. It is a very long, long paragraph. It contains many sentences that are long. Long sentences are bad. Make sentences short again. Short sentences are easier to read. They are also easier to write.";

const para = document.querySelector('p');

para.textContent = paragraph.slice(0, 10) + '...';

const button = document.querySelector('button');

let isShowingMore = false;

function toggleShowMore() {
    if (isShowingMore) {
        para.textContent = paragraph.slice(0, 10) + '...';
        button.textContent = 'See More';
    } else {
        para.textContent = paragraph;
        button.textContent = 'Show Less';
    }

    isShowingMore = !isShowingMore;
}

button.addEventListener('click', toggleShowMore);
