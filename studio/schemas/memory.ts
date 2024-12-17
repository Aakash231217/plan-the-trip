export default {
    name: 'memory',
    title: 'Memory',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
    ],
  }