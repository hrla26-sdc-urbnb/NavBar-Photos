// let str = `INSERT INTO listings (name)
//             VALUES
//             `;

// for (let i = 0; i <= 100; i++) {
//     str += `('random house ${i}'),
//     `;
// }

let str = `
        INSERT INTO photos (url, description, listing_id)
        VALUES
        `;
for (let i = 1; i < 1500; i += 1) {
  const randIdNum = Math.floor(Math.random() * 100) + 1;
  const photoUrls = [
    'https://s3-us-west-1.amazonaws.com/dudemanppl/ae4d12fb-3bca-419e-94ca-36930d412140.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/aa113035-4e83-4d58-961b-473b552018ff.jpg', 'https://s3-us-west-1.amazonaws.com/dudemanppl/98e712ac-96c9-46dd-8fea-652f95a13d20.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/943b7cfa-2449-420f-9f74-e8718fa6c1b3.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/8e202d03-5fdf-49d6-b1ab-09c3a73aefc8.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/8ce41194-0809-4208-b778-2c6f23faef69.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/8a615363-1bfa-434e-9b6d-91ea2a5fff81.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/849b015b_original.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/7e5919bc-c173-4c88-b421-a675436bd437.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/7bf1e479-027a-43eb-b91d-00149fcf9573.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/7605bcaf-f306-4aba-8bc1-d8267d5fd237.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/711eef97-46bc-4a52-a589-92a29a63b974.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/6e24d0ce-b16a-4b3d-acd8-b26249043971+(1).jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/6a4e53db-aa8a-462f-b3ce-9a9ce666ab1e.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/680c62f3-0ce7-4d08-b049-0a81df1ec1b6.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/66e891d7-6d0e-4462-8d60-c22dc03ff9d8.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/608e5069-0187-4ce9-abde-215891b8f940.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/5f645f65-2d26-4301-ab7a-d421485b99b5.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/5a54b0c3-7802-43c7-8597-8bcd426f0d49.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/55f901bd-d723-4ed0-963c-06b85b8a754e.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/50e4d336_original.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/4e31f57f-41d0-4df0-b0c4-8a58347007a5.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/455fa86c-eccd-4d24-8687-37aa62892ee9.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/44f807a7-f598-4de0-9df6-a21c6872bed4.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/41787737-5584-4242-9d90-18993f1a6a7c.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/3c0a64df-d151-4f0b-9b38-153a3ba6c636.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/39dbac08-144b-4718-b4a2-5a83216af683.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/372934f5-c06f-4fa6-bd50-ff0469081c9e.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/2d9e6776-5c24-4d30-913f-5a9fc4172d1d.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/0b696ba0-fb6d-4ec7-806a-2d37605b98ee.jpg',
    'https://s3-us-west-1.amazonaws.com/dudemanppl/055a34f3-5aab-4ae2-b6e0-a757df788ac8.jpg'];

  const randPhotNum = Math.floor(Math.random() * 31);
  const randPhotoUrl = photoUrls[randPhotNum];
  str += `('${randPhotoUrl}', 'random description ${i}', ${randIdNum}),
    `;
}
