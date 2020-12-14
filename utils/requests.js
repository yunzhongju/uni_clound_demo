export default function optionDB(options) {
	const db = uniCloud.database();
	let collection = db.collection(options.collection)
	let where = options.where ? options.where : {}
	let type = options.type ? options.type : "get"
	return new Promise((resolve, reject) => {
		if (type == "get") {
			collection.where(where).get().then(res => {
					if (res.success) {
						resolve(res.result)
					}
				})
				.catch(err => {
					reject(err)
				})
		} else if (type == 'add') {
			let result = collection.add(options.data)
			resolve(result)
		} else if (type == 'remove') {
			let res = collection.where(options.where).remove()
			resolve(res.result)
		} else if (type == 'update') {
			let update = collection.where(options.where).update(options.data)
			resolve(update.result)
		}
	})
}
