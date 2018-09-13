import moment from 'moment'

const expenses = [
  {
    id: '1',
    description: 'Gumming',
    note: 'Shiz just keeps on...',
    amount: 350,
    createdAt: moment( 0 ).subtract( 4, 'days' ).valueOf()
  }, {
    id: '2',
    description: 'Yummy',
    note: 'Deluxe package espana',
    amount: 1790,
    createdAt: moment( 0 ).add( 4, 'days' ).valueOf()
  },
  {
    id: '3',
    description: 'So weak',
    note: 'meh',
    amount: 6000,
    createdAt: 10000
  }
];

export default expenses;