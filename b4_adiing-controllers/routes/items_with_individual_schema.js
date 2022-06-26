const items = require('../Items')

const getItemsOpts =  {
    schema: {
      reponse: {
          200: {
              type: 'array',
              items: {
                  type: 'object',
                  properties: {
                      id: { type: 'string'},
                      name: { type: 'string'}
                  }
              }
          }
      }
    }
 }
const getItemOpts =  {
    schema: {
      reponse: {
          200: {
              
                  type: 'object',
                  properties: {
                      id: { type: 'string'},
                      name: { type: 'string'}
               }
          }
      }
    }
 }

function itemRoutes(fastify, options, done) {

// GET ALL ITEMS
fastify.get('/items', getItemsOpts, (req, reply) => {
    // reply.send({ test:'Hello' })
    reply.send(items)
})

// ###  GET SINGLE ITEM
fastify.get('/items/:id', getItemOpts, (req, reply) => {
    // reply.send({ test:'Hello' })

    const {id }= req.params  
    
    const item = items.find(item => item.id === id)

    reply.send(item)
})

    done()
}

module.exports = itemRoutes