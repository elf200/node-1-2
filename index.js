const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const USERS = [
    {
        id: 1,
        name: 'Alex',
        surname: 'Melqonyan',
        email: 'alex123@bk.ru',
        password: '1234',
        age: 50
    },
    {
        id: 2,
        name: 'Ando',
        surname: 'Melqonyan',
        email: 'ando123@bk.ru',
        password: '1234',
        age: 50
    },
    {
        id: 3,
        name: 'Vahe',
        surname: 'Melqonyan',
        email: 'vahe123@bk.ru',
        password: '1234',
        age: 50
    },
    {
        id: 4,
        name: 'Narek',
        surname: 'Melqonyan',
        email: 'narek123@bk.ru',
        password: '1234',
        age: 50
    },
    {
        id: 5,
        name: 'Gagik',
        surname: 'Melqonyan',
        email: 'gag123@bk.ru',
        password: '1234',
        age: 50
    }
]

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const getUser = (id) => {
    const user = USERS.find((user) => user.id === id);

    return user;
}

// const email = 'gag123@bk.ru';
// const password = '1234';

// const user = getUser(email, password);

// if(!user) {
//     const data = {
//         success: false,
//         data: null,
//     }
//     console.log('user >>>', data);
// } else {
//     const data = {
//         success: true,
//         data: user,
//     }
//     console.log('user >>>', data);
// }

const userId = '3';

const user = getUser(userId);

if(!user) {
    const data = {
        success: false,
        data: null,   
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});