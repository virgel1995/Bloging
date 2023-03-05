const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === "post-thumbnail") {
			cb(null, 'public/uploads/postThumbnail')
		} else if (file.fieldname === "profilePics") {
			cb(null, 'public/uploads/users')
		} else if (file.fieldname === "post-image") {
			cb(null, 'public/uploads/posts')
		}

	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
	}
})

const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: (req, file, cb) => {
		const types = /jpeg|jpg|png|gif/
		const extName = types.test(path.extname(file.originalname).toLowerCase())
		const mime = types.test(file.mimetype)

		if (extName && mime) {
			cb(null, true)
		} else {
			cb(new Error('Only support image file'))
		}
	}

})

module.exports = upload