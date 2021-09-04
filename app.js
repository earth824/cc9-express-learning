const path = require('path');
const express = require('express');
const app = express();

// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   req.test = 'TEstTEst';
//   next();
//   // res.send('<h1>Welcome to my First Express Web App</h1>');
// });

// app.use((req, res, next) => {
//   // req.user = findUser(); // find user in database
//   console.log('Middleware 2');
//   // if (req.user) next();
//   // else res.status(400).json({ messgae: 'user is not found' });
//   // res.send('<h1>Second App.use</h1>');
// });

// app.use((req, res, next) => {
//   const { payee, amount } = req.body;
//   if (!payee) {
//     res.status(400).json({ messgae: 'Payee is required' });
//   } else if (!amount || isNaN(amount) || amount < 0) {
//     res.status(400).json({ messgae: 'Invalid amount' });
//   } else {
//     next();
//   }
// });

// app.post('/transaction', (req, res) => {
//   // perfor create
// });

// app.put('/transaction', (req, res) => {
//   // perfor update
// });

// app.get('/', (req, res) => {
//   console.log('Middleware GET /');
//   res.send('<h1>This is Root path</h1>');
// });

// app.get('/about', (req, res) => {
//   console.log('Middleware GET /about');
//   res.send('<h1>This is About Page</h1>');
// });

// app.post('/create-something', (req, res) => {
//   res.send('This is method post, path: /create-something');
// });

// app.put('/users/update', (req, res) => {
//   res.send('This is method put, path: /users/update');
// });

// app.post('/', (req, res) => {
//   res.send('This is method post of root path');
// });

// app.post('/', (req, res) => {
//   res.send('This is second method post of root path');
// });

// app.delete('/', (req, res) => {
//   res.status(400).send({ message: 'Delete method', title: 'Test status 400' });
// });

// console.log(path.resolve('./'));
// console.log(path.join(path.resolve('./'), 'pages/index.html'));
// console.log(__dirname);
// console.log(__filename);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/login.html'));
// });

// app.post('/post-login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/login.html'));
// });

// app.use((req, res, next) => {
//   console.log(req.user);
//   // after finding user in DB
//   req.user = { id: 1, email: 'john@amial.com' };
//   req.role = 'Admin'
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.user);
// });

// app.get('/users/profile', (req, res, next) => {});
// app.get('/users/birthInfo', (req, res, next) => {});
// app.post('/users/create', (req, res, next) => {});
// app.put('/users/change-password', (req, res, next) => {});
// app.patch('/users/disable', (req, res, next) => {});
// app.delete('/users/delete', (req, res, next) => {});

// app.get('/products', (req, res, next) => {});
// app.post('/products', (req, res, next) => {});
// app.put('/products', (req, res, next) => {});
// app.delete('/prosucts', (req, res, next) => {});

const router = express.Router();
router.get('/profile', (req, res, next) => {}); // GET /users/profile     xxx GET /profile
router.post('/create', (req, res, next) => {}); // POST /users/create      xxx POST /create

app.use('/users', router);
app.use(
  '/bookings',
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {}
);

const productRouter = express.Router();
productRouter.get('/', (req, res, next) => {
  // GET /products
  throw new Error('Throw error from GET /products');
  // throw new CustomError('Throw error from GET /products', 400);
  // next('errrrrrr');
});
productRouter.post('/', (req, res, next) => {
  try {
    // connected to database  to create new product
    // asynchronous operation
  } catch (err) {
    next(err);
  }
});
productRouter.put('/', (req, res, next) => {});
productRouter.delete('/', (req, res, next) => {});

app.use('/products', productRouter);

app.use((req, res, next) => {});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ aaaaaaa: err.message });
});

app.listen(8888, () => console.log('server running on port 8888'));
