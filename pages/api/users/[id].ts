import { users } from '@mocks/users'

export default async function getUsers({ query: { id } }: any, res: any) {
    return res.status(200).json(users.find(user => user.name === id))
}
