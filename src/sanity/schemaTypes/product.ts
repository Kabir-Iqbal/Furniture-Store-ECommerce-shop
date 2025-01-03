import { defineType, defineField } from "sanity";

export default defineType({
    name : "product",
    title : "Product",
    type : "document",
    fields : [
        defineField({
            name : "heading",
            title : "Name",
            type : "string",
        }),
        defineField({
            name : "price",
            title : "Rs.",
            type : "string",
        }),
        defineField({
            name : "slug",
            title : "slug",
            type : "slug",
            options : {
                source : "heading",
            }
        }),
        defineField({
            name : "image",
            title : "Image",
            type : "image",
            options : {
                hotspot : true,
            }
        })
    ]
})