import express, { Request, Response} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';
import api from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", api);

(
    async () => {
        try {
            await sequelize.authenticate();
            console.log("Connetected to the database!");
        } catch(error) {
            console.error("Unable to connect to the database: ", error);
        }
    }
) ();

app.get("/", (req: Request, res: Response) => {
    res.json(
        {
            message: "Server is running!"
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})