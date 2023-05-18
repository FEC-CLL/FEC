import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import QandAContainer from '../QandAContainer';
import AddQuestion from '../AddQuestion';
import AddAnswer from '../AddAnswer';
import Search from '../Search';
import Question from '../Question';
import Answer from '../Answer';

const answerData = {
  question: '644820',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 5992147,
      body: 'NICEEEE',
      date: '2023-05-16T00:00:00.000Z',
      answerer_name: 'pwang0407',
      helpfulness: 2,
      photos: [
        {
          id: 5348665,
          url: 'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/ck9jcwl2ip5pxwwh9bxf.png',
        },
        {
          id: 5348667,
          url: 'https://res.cloudinary.com/pwang0407/image/upload/v1684265361/mgwoudwzztquzxnfj9qn.png',
        },
        {
          id: 5348666,
          url: 'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/l1f0bvpkjhvsmlazui5t.jpg',
        },
        {
          id: 5348668,
          url: 'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/am58tigkg9bzx3ulxoyk.png',
        },
      ],
    },
    {
      answer_id: 5992109,
      body: 'THIS could be sick',
      date: '2023-05-15T00:00:00.000Z',
      answerer_name: 'sand',
      helpfulness: 1,
      photos: [
        {
          id: 5348624,
          url: 'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/yw8xlca7ssaw6is4upn8.jpg',
        },
        {
          id: 5348625,
          url: 'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/bgozogy9p81fvrho7fzy.jpg',
        },
      ],
    },
    {
      answer_id: 5992111,
      body: 'lets try?',
      date: '2023-05-15T00:00:00.000Z',
      answerer_name: 'asd',
      helpfulness: 0,
      photos: [
        {
          id: 5348626,
          url: 'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193563/azjqt7fyxguhc949zsyk.jpg',
        },
      ],
    },
    {
      answer_id: 5992118,
      body: 'asdf',
      date: '2023-05-16T00:00:00.000Z',
      answerer_name: 'Seller',
      helpfulness: 0,
      photos: [],
    },
    {
      answer_id: 5992121,
      body: 'grind',
      date: '2023-05-16T00:00:00.000Z',
      answerer_name: 'dies',
      helpfulness: 0,
      photos: [
        {
          id: 5348633,
          url: 'https://res.cloudinary.com/daakpfwlp/image/upload/v1684200081/ggx67xjwopgsnctzabo2.jpg',
        },
      ],
    },
  ],
};

const product = {
  id: 40347,
  campus: 'hr-rfp',
  name: "Slacker's Slacks",
  slogan: 'Comfortable for everything, or nothing',
  description: "I'll tell you how great they are after I nap for a bit.",
  category: 'Pants',
  default_price: '65.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: '99% Cotton 1% Elastic',
    },
    {
      feature: 'Cut',
      value: 'Loose',
    },
  ],
};

const data = {
  product_id: '40347',
  results: [
    {
      question_id: 644820,
      question_body: 'Are these shoes gonna make my feet look bigger?',
      question_date: '2023-01-30T00:00:00.000Z',
      asker_name: 'sturdyboat210',
      question_helpfulness: 42,
      reported: false,
      answers: {
        5992104: {
          id: 5992104,
          body: 'sadf',
          date: '2023-05-15T00:00:00.000Z',
          answerer_name: '1234',
          helpfulness: 0,
          photos: [],
        },
        5992109: {
          id: 5992109,
          body: 'THIS could be sick',
          date: '2023-05-15T00:00:00.000Z',
          answerer_name: 'sand',
          helpfulness: 1,
          photos: [
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/yw8xlca7ssaw6is4upn8.jpg',
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193289/bgozogy9p81fvrho7fzy.jpg',
          ],
        },
        5992111: {
          id: 5992111,
          body: 'lets try?',
          date: '2023-05-15T00:00:00.000Z',
          answerer_name: 'asd',
          helpfulness: 0,
          photos: [
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684193563/azjqt7fyxguhc949zsyk.jpg',
          ],
        },
        5992118: {
          id: 5992118,
          body: 'asdf',
          date: '2023-05-16T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 0,
          photos: [],
        },
        5992121: {
          id: 5992121,
          body: 'grind',
          date: '2023-05-16T00:00:00.000Z',
          answerer_name: 'dies',
          helpfulness: 0,
          photos: [
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684200081/ggx67xjwopgsnctzabo2.jpg',
          ],
        },
        5992124: {
          id: 5992124,
          body: 'what what',
          date: '2023-05-16T00:00:00.000Z',
          answerer_name: 'jack',
          helpfulness: 0,
          photos: [
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684211115/f2wooczazxaxw5hent8w.jpg',
            'https://res.cloudinary.com/daakpfwlp/image/upload/v1684211116/fue95r9dxtbp0qnxkjzo.jpg',
          ],
        },
        5992146: {
          id: 5992146,
          body: 'sdf',
          date: '2023-05-16T00:00:00.000Z',
          answerer_name: 'pwang0407',
          helpfulness: 0,
          photos: [
            'https://res.cloudinary.com/pwang0407/image/upload/v1684265276/msoxvjj6zjoxicjzm78d.jpg',
          ],
        },
        5992147: {
          id: 5992147,
          body: 'NICEEEE',
          date: '2023-05-16T00:00:00.000Z',
          answerer_name: 'pwang0407',
          helpfulness: 2,
          photos: [
            'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/ck9jcwl2ip5pxwwh9bxf.png',
            'https://res.cloudinary.com/pwang0407/image/upload/v1684265361/mgwoudwzztquzxnfj9qn.png',
            'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/l1f0bvpkjhvsmlazui5t.jpg',
            'https://res.cloudinary.com/pwang0407/image/upload/v1684265362/am58tigkg9bzx3ulxoyk.png',
          ],
        },
      },
    },
  ],
};

describe('Questions Component', () => {
  const testData = {
    id: 40347,
  };

  it('should render title', () => {
    render(<QandAContainer product={testData} />);
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });

  it('should render 2 questions on first load', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    render(<QandAContainer product={testData} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    await waitFor(() => screen.getByText('Q:'));

    expect(screen.getByText('Q:')).toBeInTheDocument();
  });

  it('should render modal on add a question button click', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    const { container } = render(<QandAContainer product={testData} />);

    const button = container.getElementsByClassName('imageButton')[0];
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
  });

  it('should render 2 answers on first load', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
      data: answerData,
    }));
    render(<QandAContainer product={testData} />);
    await waitFor(() => screen.getByText('A:'));

    expect(screen.getByText('A:')).toBeInTheDocument();
  });

  it('should render modal on add answer button click', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    const { container } = await render(<QandAContainer product={testData} />);

    await waitFor(() => {
      const button = container.getElementsByClassName('addAnswerButton')[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });
    expect(screen.getByText('Submit your Answer')).toBeInTheDocument();
  });

  it('should test AddQuestion', async () => {
    render(<AddQuestion
      product={product}
      addQuestion={() => {}}
      show
      setShowDialog={() => {}}
    />);
    const body = await screen.getByPlaceholderText('Why did you like the product or not?');
    const email = await screen.getByPlaceholderText('Example: jack@email.com');
    const nickname = await screen.getByPlaceholderText('Example: jackson11!');

    const button = await screen.getByText('Submit');

    expect(button).toBeInTheDocument();

    fireEvent.change(body, { target: { value: 'a' } });
    fireEvent.change(email, { target: { value: 'a' } });
    fireEvent.change(nickname, { target: { value: 'a' } });

    const clicked = fireEvent.click(button);

    expect(clicked).toBe(true);
  });

  it('should test AddAnswer', async () => {
    const { container } = render(<AddAnswer
      product={product}
      addAnswer={() => {}}
      show
      setShowDialog={() => {}}
      question={data.results[0]}
    />);
    const body = await container.getElementsByClassName('modal-textArea')[0];
    const email = await screen.getByPlaceholderText('Example: jack@email.com');
    const nickname = await screen.getByPlaceholderText('Example: jack543!');

    const fileInput = await container.getElementsByClassName('file-input')[0];
    const button = await screen.getByText('Submit');

    expect(button).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();

    fireEvent.change(body, { target: { value: 'a' } });
    fireEvent.change(email, { target: { value: 'a' } });
    fireEvent.change(nickname, { target: { value: 'a' } });
    fireEvent.click(fileInput);

    const clicked = fireEvent.click(button);

    expect(clicked).toBe(true);
  });

  it('should filter results on search bar change', async () => {
    render(<Search
      filter={() => {}}
    />);
    const searchBar = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    fireEvent.change(searchBar, { target: { value: 'are' } });
  });

  it('should add to helpfulness count on yes button click', async () => {
    render(<Question
      product={product}
      question={data.results[0]}
      questionHandler={() => {}}
    />);
    const answerIsHelpful = await screen.getByText('Yes');
    expect(answerIsHelpful).toBeInTheDocument();
    fireEvent.click(answerIsHelpful);
    // expect(43).toBeInTheDocument();
    // expect answers.length to be + 2;
  });

  it('should report question on report button click', async () => {
    render(<Answer
      answer={answerData.results[0]}
      helpfulHandler={() => {}}
      reportHandler={() => {}}
    />);
    const answerIsReported = await screen.getByText('Report');
    expect(answerIsReported).toBeInTheDocument();
    fireEvent.click(answerIsReported);
  });

  it('should expand answers on see more answers click', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
      data: answerData,
    }));
    render(<QandAContainer product={testData} />);
    await waitFor(() => screen.getByText('A:'));

    const showMoreAnswers = await screen.getByText('See More answers');
    expect(showMoreAnswers).toBeInTheDocument();

    fireEvent.click(showMoreAnswers);
  });

  it('should collapse answers on see more answers click', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
      data: answerData,
    }));
    render(<QandAContainer product={testData} />);
    await waitFor(() => screen.getByText('A:'));

    const showMoreAnswers = await screen.getByText('See More answers');
    fireEvent.click(showMoreAnswers);

    await waitFor(() => {
      const collapseAnswers = screen.getByText('Collapse answers');
      expect(collapseAnswers).toBeInTheDocument();
      fireEvent.click(collapseAnswers);
    });
  });
});
