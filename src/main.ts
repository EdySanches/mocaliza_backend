import express from 'express'
import { category_c } from './models/category'

const app = express()

app.get('/category', (request, response) => {
	response.json({
		data: new Date(),
	})
})

app.listen(8000, () => {
	console.log('Server is running on port 8000!')
})
