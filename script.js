let d;

d=new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1666962049745);

d = Math.floor(Date.now() / 1000);

console.log (d)