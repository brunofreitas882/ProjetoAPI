// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  nome: string;
  telefone: string;
  email: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {nome: 'John Doe', telefone: '1234567890', email: 'jhondoe@email.com'},
    {nome: 'Jane Doe', telefone: '9879877944', email: 'janedoe@email.com'},
    {nome: 'Carlos Vasconcelos', telefone: '9871454655',email:'cvvasconcelos.com'},
    {nome: 'Maria', telefone: '94754114654', email:'maria@emaol.com'}
  ]);
}
