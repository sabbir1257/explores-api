const user = {id: 1, name: 'Sabbir Sarker', job: 'actor'};
// JavaSeript Object Notation
const stringifiend = JSON.stringify(user);
// console.log(user);
// console.log(stringifiend);


/* 
{ id: 1, name: 'Sabbir Sarker', job: 'actor' }
{"id":1,"name":"Sabbir Sarker","job":"actor"}
*/


const shop = {
    owner: 'Usman',
    address: {
        street: 'mirpur',
        city: 'dhaka',
        country: 'Bangladas'
    },
    products:['laptop', 'mic', 'monitor', 'keyboad'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);