import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { handleError } from './middlewares/error.middlewares';
import { connect } from './db/mongo.db';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth/', authRoutes);
app.use('/api/user/', userRoutes);

app.use(handleError);

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
})();
