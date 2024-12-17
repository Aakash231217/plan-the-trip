export default {
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'destination',
        title: 'Destination',
        type: 'reference',
        to: [{ type: 'destination' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Travel Date',
        type: 'date',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'guests',
        title: 'Number of Guests',
        type: 'number',
        validation: (Rule) => Rule.required().min(1),
      },
      {
        name: 'message',
        title: 'Special Requests',
        type: 'text',
      },
      {
        name: 'status',
        title: 'Booking Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Confirmed', value: 'confirmed' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        initialValue: 'pending',
      },
    ],
  }