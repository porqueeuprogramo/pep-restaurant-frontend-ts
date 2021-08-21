import { users } from '@mocks/users'

export default async function getUsers({ query: { id } }: any, res: any) {
    console.log('LOG ~ file: [id].ts ~ line 4 ~ id', id);
    res.status(200).json(users.find(user => user.name === id))
}
