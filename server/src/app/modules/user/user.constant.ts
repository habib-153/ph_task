export const USER_ROLE = {
    user: 'user',
    admin: 'admin'
} as const

export type TUserRole = keyof typeof USER_ROLE

export const DEFAULT_PROFILE_URL = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png';

export const USER_STATUS = {
    inProgress: 'in-progress',
    blocked: 'blocked'
} as const

export type TUserStatus = keyof typeof USER_STATUS;

export const UserSearchableFields = [
    'name',
    'email',
    'phone',
    'role',
    'status',
];