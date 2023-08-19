import { CollectionConfig } from 'payload/types'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Customers: CollectionConfig = {
    slug: 'Customer',
    admin: {
        useAsTitle: 'someField',
    },
    fields: [
        {
            name: 'email',
            label: 'E-Mail',
            type: 'text',
            required: true,
        },
        {
            name: 'password',
            label: 'Password',
            type: 'text',
            required: true,
        },
        {
            name: 'createdAt',
            label: 'Created At',
            type: 'date',
            required: true,
            defaultValue: () => new Date(),
            hidden: true,
        },
        {
            name: 'lastLoginAt',
            label: 'Last Login At',
            type: 'date',
            required: false,
            hidden: true,
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: [
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
            ],
            defaultValue: 'active',
            required: true,
        },
        {
            name: 'purchases',
            label: 'Purchases',
            type: 'relationship',
            relationTo: 'Purchases',
            hasMany: true,
        },
    ],
}

export default Customers
