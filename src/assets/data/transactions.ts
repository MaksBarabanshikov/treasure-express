import { v4 as uuidv4 } from 'uuid'

enum typeEnum {
  bonus = 'present',
  default = 'default',
}

export interface ITransaction {
  id: string,
  idUser: string,
  type: typeEnum,
  description: string[],
  created_at: string,
}

export const transactions: ITransaction[] = [
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.bonus,
    description: ['receives bonus', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.bonus,
    description: ['receives bonus', '1.12 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.bonus,
    description: ['receives bonus', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.bonus,
    description: ['receives bonus', '1.12 BNB', 'in level 34'],
    created_at: '11 hours',
  },
  {
    id: uuidv4(),
    idUser: 'ID 14224822',
    type: typeEnum.default,
    description: ['receives', '4 BNB', 'in level 34'],
    created_at: '11 hours',
  },
]
