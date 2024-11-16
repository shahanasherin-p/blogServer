const jsonServer=require('json-server')

const blogServer=jsonServer.create()

const router=jsonServer.router("db.json")

const middleware=jsonServer.defaults()

const PORT = 3000 || process.env.PORT

blogServer.use(middleware)
blogServer.use(router)

blogServer.listen(PORT,()=>{
    console.log(`blog Server is started running at port ${PORT} and waiting for client request`);
    
})