import { client } from "@/sanity/lib/client";

export const getProducts = async()=> {

    const data2 = await client.fetch(`*[_type == "product"]{
        heading,
        price,
        "slug": slug.current,
        "image": image.asset-> url
    }`)


    // const data = await client.fetch(`*[_type == "product" && slug.current == $slug]{
    //       heading,
    //       price,
    //       "slug": slug.current,
    //       "image": image.asset-> url
    //   }`, { slug })
return []


}