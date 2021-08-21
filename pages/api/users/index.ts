import { users } from '@mocks/users'

export default async function getUsers(req: any, res: any) {
    res.status(200).json(users)
}
