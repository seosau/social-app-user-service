import { User } from "../generated/user";

export function reflect (object: any): User {
    const result: User = {
        id: object.id,
        fullName: object.fullName,
        email: object.email,
        password: '',
        image: object.image,
        posts: [],
        likedPosts: [],
        createdAt: !!object.createdAt ? object.createdAt.toISOString() : '',
        updatedAt: !!object.updatedAt ? object.updatedAt.toISOString() : '',
        deletedAt: !!object.deletedAt ? object.deletedAt.toISOString() : '',
    }

    return result;
}