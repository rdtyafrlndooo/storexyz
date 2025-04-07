const fs = require('fs')

global.creator = 'Lylia-Xyz'// yourname
global.MONGO_DB_URI = "https://cloud.mongodb.com/v2/67f3c2865ce5ed4cfe8f24ff#/security/database" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "lyliaxyz25" //isi apa aja bebas
global.your_email = "radityaferlando98@gmail.com" //email
global.email_password = "bFq&H,4wE^*P8uT" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
