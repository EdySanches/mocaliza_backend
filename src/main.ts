import express, { Request, Response } from 'express'
import { database_c } from './database/database'
import { repository_brands_c } from './repositories/repo_brands'
import { repository_categories_c } from './repositories/repo_category'

const app = express()

app.get('/categories', async (req: Request, res: Response) => {

	let retorno
	const db_categories = new repository_categories_c()
	if (req?.query?.id_category) {
		const cat = { id: req?.query?.id_category }
		retorno = await db_categories.readOne(cat)
	}
	else {
		retorno = db_categories.readAll() 
	}
	res.json({
		status: 200,
		data: retorno,
	})
})
app.post('/categories', async (req: Request, res: Response) => {
	const db_categories = new repository_categories_c()
	const category = {
		name: req?.query?.name,
		active: true
	}
	
	const retorno = await db_categories.create(category)

	res.json({
		status: 201,
		data: retorno,
	})
})
app.put('/categories', async (req: Request, res: Response) => {
	const db_categories = new repository_categories_c()
	const retorno = await db_categories.update(req.body)
	
	res.json({
		status: 202,
		data: new Date(),
	})
})
app.delete('/categories', async (req: Request, res: Response) => {
	const db_categories = new repository_categories_c()
	const retorno = await db_categories.delete(req.body)
	
	res.json({
		status: 202,
		data: new Date(),
	})
})

// TODO desenvolver crud de brands
app.get('/brands', async (req: Request, res: Response) => {

	let retorno
	const db_brands = new repository_brands_c()
	if (req?.query?.id_brand) {
		const id = parseInt(req?.query?.id_brand as string) 
		retorno = await db_brands.readOne(id)
	}
	else {
		retorno = await db_brands.readAll() 
	}
	res.json({
		status: 200,
		data: retorno,
	})
})
app.post('/brands', async (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const brand = {
		name: req?.query?.name
	}
	
	const retorno = await db_brands.create(brand)

	res.json({
		status: 201,
		data: retorno,
	})
})
app.put('/brands', async (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const id = parseInt(req?.query?.id_br as string)
	const br = {
		name: req?.query?.name
	}
	const retorno = await db_brands.update(id, br)
	
	res.json({
		status: 202,
		data: retorno,
	})
})
app.delete('/brands', async (req: Request, res: Response) => {
	const db_brands = new repository_brands_c()
	const id = parseInt(req?.query?.id_br as string)
	const retorno = await db_brands.delete(id)
	
	res.json({
		status: 202,
		data: retorno,
	})
})


app.listen(8000, async () => {

	console.log('Server is running on port 8000!')

	const db = database_c.get_instance()
	await db.sync()
	// console.log(new Date(), "main -- instancia banco:", db )

})




