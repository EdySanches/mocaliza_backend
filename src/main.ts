import express from 'express'
import { category_c } from './models/category'

const app = express()

app.get('/category', (request, response) => {
	response.json({
		data: Date.now(),
	})
})

app.listen(8000, () => {
	const c = category_c.from(1, 'Cars', true, new Date(), new Date())
	console.log(c)
	console.log('Server is running on port 8000!')
})
