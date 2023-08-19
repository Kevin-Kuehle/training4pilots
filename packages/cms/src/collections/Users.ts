import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        // add field role to distinguish between admin and user
        {
            name: 'role',
            label: 'Role',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
            defaultValue: 'user',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
        },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    ],
}

export default Users
