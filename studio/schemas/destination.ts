export default {
    name: 'destination',
    title: 'Destination',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
  }