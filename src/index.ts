import app from './config/express';
import vars from './config/vars'

const { PORT } = vars

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})