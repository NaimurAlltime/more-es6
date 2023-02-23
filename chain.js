const friends = [{name: 'sabbir', address: 'cumilla'}, {name: 'akash', address: 'shylet'}];
// console.log(friends);
// console.log(friends[0].address);

const info = [
    {
        name: 'jahid',
        address: {
            present: 'mirpur',
            permanent: 'gazipur'
        },
        qualification: [{
            ssc: 
                    {
                        passing_year: 2018,
                        gpa: 5.00
                    },
             hsc: 
                    {
                         passing_year: 2020,
                         gpa: 4.90
                     },
        }]
        
    }
];

// console.log(info);
// console.log(info[0].address);
// console.log(info[0].address.permanent);
// console.log(info[0].qualification[0]);
// console.log(info[0].qualification[0].hsc.gpa);

// Option chaining 
// console.log(info[0].address?.location);