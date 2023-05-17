// import { render, screen, waitFor } from '@testing-library/react';
// import React from 'react';
// import axios from 'axios';

// const data = {
//   "question": "644820",
//     "page": 1,
//     "count": 5,
//     "results": [
//       {
//           "answer_id": 5992147,
//           "body": "NICEEEE",
//           "date": "2023-05-16T00:00:00.000Z",
//           "answerer_name": "pwang0407",
//           "helpfulness": 2,
//           "photos": [
//               {
//                   "id": 5348665,
//                   "url": "https://res.cloudinary.com/pwang0407/image/upload/v1684265362/ck9jcwl2ip5pxwwh9bxf.png"
//               },
//               {
//                   "id": 5348667,
//                   "url": "https://res.cloudinary.com/pwang0407/image/upload/v1684265361/mgwoudwzztquzxnfj9qn.png"
//               },
//               {
//                   "id": 5348666,
//                   "url": "https://res.cloudinary.com/pwang0407/image/upload/v1684265362/l1f0bvpkjhvsmlazui5t.jpg"
//               },
//               {
//                   "id": 5348668,
//                   "url": "https://res.cloudinary.com/pwang0407/image/upload/v1684265362/am58tigkg9bzx3ulxoyk.png"
//               }
//           ]
//       },
//       {
//           "answer_id": 5992109,
//           "body": "THIS could be sick",
//           "date": "2023-05-15T00:00:00.000Z",
//           "answerer_name": "sand",
//           "helpfulness": 1,
//           "photos": [
//               {
//                   "id": 5348624,
//                   "url": "https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/yw8xlca7ssaw6is4upn8.jpg"
//               },
//               {
//                   "id": 5348625,
//                   "url": "https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/bgozogy9p81fvrho7fzy.jpg"
//               }
//           ]
//       },
//       {
//           "answer_id": 5992111,
//           "body": "lets try?",
//           "date": "2023-05-15T00:00:00.000Z",
//           "answerer_name": "asd",
//           "helpfulness": 0,
//           "photos": [
//               {
//                   "id": 5348626,
//                   "url": "https://res.cloudinary.com/daakpfwlp/image/upload/v1684193563/azjqt7fyxguhc949zsyk.jpg"
//               }
//           ]
//       },
//       {
//           "answer_id": 5992118,
//           "body": "asdf",
//           "date": "2023-05-16T00:00:00.000Z",
//           "answerer_name": "Seller",
//           "helpfulness": 0,
//           "photos": []
//       },
//       {
//           "answer_id": 5992121,
//           "body": "grind",
//           "date": "2023-05-16T00:00:00.000Z",
//           "answerer_name": "dies",
//           "helpfulness": 0,
//           "photos": [
//               {
//                   "id": 5348633,
//                   "url": "https://res.cloudinary.com/daakpfwlp/image/upload/v1684200081/ggx67xjwopgsnctzabo2.jpg"
//               }
//           ]
//       }
//     ]
// }

// jest.mock('axios');
// axios.get.mockResolvedValue({ data: data});

// describe('Question', () => {
//   const testData = {
//     question_id: 644820,
//   }

//   it('should render answer', () => {
//     render(<Question product={} question={} />)
//   })
// })

