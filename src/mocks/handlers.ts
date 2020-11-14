import { rest } from 'msw';
import { IEmployee } from '../services/ExternalService';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
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

    return res(
      ctx.status(200),
      ctx.json(emp),
    )
  }),
]