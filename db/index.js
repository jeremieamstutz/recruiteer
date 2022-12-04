import fs from 'fs'

const data = fs.readFileSync('db/db.json')
const db = JSON.parse(data)

export function findAll() {
	return db.letters
}

export default {
	findAll,
}
