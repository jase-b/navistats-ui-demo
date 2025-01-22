import { today, toDayjs } from 'utils/date';

export const dateRangeShortcuts = {
    thisMonth: {
        text: 'This Month',
        start: today.startOf('month'),
        end: today,
    },
    lastMonth: {
        text: 'Last Month',
        start: today.subtract(1, 'month').startOf('month'),
        end: today.subtract(1, 'month').endOf('month'),
    },
    thisQuarter: {
        text: 'This Quarter',
        start: toDayjs().startOf('quarter'),
        end: today,
    },
    lastQuarter: {
        text: 'Last Quarter',
        start: toDayjs().subtract(1 , 'quarter').startOf('quarter'),
        end: toDayjs().startOf('quarter'),
    },
    thisYear: {
        text: 'This Year',
        start: toDayjs(`Jan 1, ${today.year()}`),
        end: today,
    },
    lastYear: {
        text: 'Last Year',
        start: today.subtract(1, 'year').startOf('year'),
        end: today.subtract(1, 'year').endOf('year')
    },
    last12Months: {
        text: 'Last 12 Months',
        start: today.subtract(1, 'year'),
        end: today 
    }
};