import express from 'express'
let app = express()
let PORT = process.env.PORT || 3000


app.get('*', (req, res)=>{
	res.render('index.html');
});



app.listen(PORT , function(){
	console.log(`magic is happening on port ${PORT}`)
});