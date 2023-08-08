import express from "express";
import { resolve } from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(resolve('./build')))

app.get( '/*', (req, res) => {
    res.sendFile(resolve('./build/index.html'));
});

app.listen(PORT, () => {
    console.log('--------------------------------------------------')
    console.log(`Server start to listen on http://localhost:${PORT}`);
    console.log('--------------------------------------------------')
});
