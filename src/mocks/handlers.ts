import { rest } from 'msw';
import { IEmployee } from '../services/ExternalService';

const sleepHelper = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const handlers = [
  rest.get('http://www.somewhere.com/api/users', async (req, res, ctx) => {
    let emp: IEmployee[] = [
      {
        id: 1,
        name: 'bob',
        email: 'bob@bob.com'
      },
      {
        id: 2,
        name: 'jane',
        email: 'jane@bob.com'
      },
    ];

    await sleepHelper(2000);

    return res(
      ctx.status(200),
      ctx.json(emp),
    )
  }),
]