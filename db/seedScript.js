let str = `INSERT INTO listings (name)
            VALUES
            `;

for (let i = 0; i <= 100; i++) {
    str += `('random house ${i}'),
    `;
}

// let str = `
//         INSERT INTO photos (url, description, listing_id)
//         VALUES
//         `
// for (let i = 1; i < 1500; i++) {
//     let randNum = Math.floor(Math.random() * 100) + 1;
//     str += `('https://dummyimage.com/wxga/cc/00.jpg&text=${i}', 'random description ${i}', ${randNum}),
//     `;
// }
