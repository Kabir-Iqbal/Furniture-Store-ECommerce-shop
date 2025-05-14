import { defineType, defineField } from "sanity";

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "heading",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "price",
            title: "price",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "heading",
            }
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        }),
        defineField({
            name: 'priceWithoutDiscount',
            type: 'string',
            title: 'Price Without Discount',
            description: 'Original price before discount'
        }),
        defineField({
            name: 'rating',
            type: 'number',
            title: 'Rating',
            description: 'Rating of the product'
        }),
        defineField({
            name: 'ratingCount',
            type: 'number',
            title: 'Rating Count',
            description: 'Number of ratings'
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Add tags like "new arrival", "bestseller", etc.'
        }),
        defineField({
            name: 'sizes',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Add sizes like S , M , L , XL , XXL'
        }),
     
    ]
})