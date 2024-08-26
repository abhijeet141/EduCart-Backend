import Hashing from 'crypto';

export function Hash(param: string){
    return Hashing.createHash('sha256').update(param).digest('hex')
}