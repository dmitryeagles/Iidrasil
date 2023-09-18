export type User = {
    id: string
    firstName: string
    lastName: string
    imageUrl: string
    roleId: string
    phoneNumber?: string
}

export type UserEdit = {
    firstName: string
    lastName: string
    imageUrl: string
    phoneNumber?: string
}