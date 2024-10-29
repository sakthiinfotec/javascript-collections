import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// User model
interface User {
  id: number;
  username: string;
  password: string;
}

// In-memory user storage for simplicity
const users: User[] = [
  { id: 1, username: 'john', password: bcrypt.hashSync('password', 10) },
];

// Generate JWT token
const generateToken = (user: User) => {
  const payload = { userId: user.id, username: user.username };
  return jwt.sign(payload, process.env.SECRET_KEY!, { expiresIn: '1h' });
};

// Verify JWT token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    req.user = decoded as any;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

const app = express();
app.use(express.json());

// Register endpoint
app.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user: User = { id: users.length + 1, username, password: hashedPassword };
  users.push(user);
  res.send({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).send('Invalid username or password');

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) return res.status(400).send('Invalid username or password');

  const token = generateToken(user);
  res.send({ token });
});

// Protected endpoint
app.get('/protected', verifyToken, (req: Request, res: Response) => {
  res.send({ message: 'Hello, ' + req.user.username });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
