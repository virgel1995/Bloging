
const mongodbURL = process.env.MONGODB_URI

module.exports = function validateConfig (){


	if (!mongodbURL || mongodbURL == ""){
 err("Mongodb Connection Uri is allowed ")
}

	

}

function err(err) {
	return new Error(err);
};

