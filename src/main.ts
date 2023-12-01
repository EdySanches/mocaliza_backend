import express, { Request, Response } from 'express'
import { database_c } from './database/database'
import { repository_brands_c } from './repositories/repo_brands'

const app = express()

app.get('/category', (req: Request, res: Response) => {
	res.json({
		data: new Date(),
	})
})

// TODO desenvolver crud de brands
app.get('/brands', (req: Request, res: Response) => {

	let retorno
	const db_brands = new repository_brands_c()
	if (req?.query?.id_brand) {
		retorno = db_brands.readOne(req.query.id_brand)
	}
	else {
		retorno = db_brands.readAll() 
	}
	res.json({
		status: 200,
		data: retorno,
	})
})
app.post('/brands', (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const retorno = db_brands.create(req.body)

	res.json({
		status: 201,
		data: retorno,
	})
})
app.put('/brands', (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const retorno = db_brands.update(req.body)
	
	res.json({
		status: 202,
		data: new Date(),
	})
})
app.delete('/brands', (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const retorno = db_brands.delete(req.body)
	
	res.json({
		status: 202,
		data: new Date(),
	})
})


app.listen(8000, async () => {

	console.log('Server is running on port 8000!')

	const db = database_c.get_instance()
	await db.sync()
	console.log(new Date(), "main -- instancia banco:", db )

})




