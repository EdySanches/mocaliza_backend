import express from 'express'
import { database_c } from './database/database'

const app = express()

app.get('/category', (request, response) => {
	response.json({
		data: new Date(),
	})
})

app.listen(8000, async () => {

	console.log('Server is running on port 8000!')

	const db = database_c.get_instance()
	console.log(new Date(), "main -- instancia banco:", db )

})
