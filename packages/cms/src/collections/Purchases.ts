import { CollectionConfig } from 'payload/types'

const Purchases: CollectionConfig = {
    slug: 'Purchases',
    labels: {
        singular: 'Purchase',
        plural: 'Purchases',
    },
    fields: [
        //example text field
        {
            name: 'fieldName',
            label: 'fieldLabel',
            type: 'text',
        },
    ],
    admin: {
        useAsTitle: 'fieldName',
    },
    timestamps: true,
}

export default Purchases
