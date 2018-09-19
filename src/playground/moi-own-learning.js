import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gumming',
    note: 'Shiz just keeps on...',
    amount: 350,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '2',
    description: 'Yummy',
    note: 'Deluxe package espana',
    amount: 1790,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'So weak',
    note: 'meh',
    amount: 6000,
    createdAt: 10000
  }
];

const someExpenses = [{
    description: '1 - yo and another one',
    note: 'yo and here we go',
    amount: 19110,
    createdAt: 19150
  }, {
    description: '2 - the second settings',
    note: 'go for a second time fam',
    amount: 22000,
    createdAt: 29150
}];

const result = [
  ...expenses, ...someExpenses
];

console.log( result );
