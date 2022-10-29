import { Block } from "payload/types";

const Quote: Block = {
    slug: 'quote',
    imageURL: 'http://localhost:3000/media/quote.png',
    imageAltText: 'Quote Block',
    fields: [
        {
            name: 'quote',
            type: 'textarea',
        },
        {
            name: 'author',
            type: 'text',
        },
    ]
}
export default Quote