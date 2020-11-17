import { Router } from 'express';


const routes = Router();

routes.get('/', (req, res) =>{
    return res.send('server running in port 3000...')
});

export default routes;