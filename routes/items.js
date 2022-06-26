// const items = require('../Items')

const { getItems, getItem } = require('../controllers/items')

// Abstracting repeated parts of schema

const commonItemSchema = {
    type: 'object',
    properties: {
        id: { type: 'string'},
        name: { type: 'string'}
    }
}

const getItemsOpts =  {  
    schema: {
      reponse: {
          200: {
              type: 'array',
              items: commonItemSchema
            //   {
            //       type: 'object',
            //       properties: {
            //           id: { type: 'string'},
            //           name: { type: 'string'}
            //       }
            //   }
          },
      },
    },
    handler: getItems
    // function (req, reply) {
    //     // reply.send({ test:'Hello' })
    //     reply.send(items)
    // }
 }   
const getItemOpts =  {
    schema: {
      reponse: {
          200: commonItemSchema
        //   {
              
        //           type: 'object',
        //           properties: {
        //               id: { type: 'string'},
        //               name: { type: 'string'}
        //        }
        //   }
      },
    },
    handler: getItem
    // function (req, reply) {
    //     // reply.send({ test:'Hello' })
    
    //     const {id }= req.params  
        
    //     const item = items.find(item => item.id === id)
    
    //     reply.send(item)
    // }
 }

function itemRoutes(fastify, options, done) {

// GET ALL ITEMS
fastify.get('/items', getItemsOpts)
// fastify.get('/items', getItemsOpts, (req, reply) => {
//     // reply.send({ test:'Hello' })
//     reply.send(items)
// })

// ###  GET SINGLE ITEM
fastify.get('/items/:id', getItemOpts)
// fastify.get('/items/:id', getItemOpts, (req, reply) => {
//     // reply.send({ test:'Hello' })

//     const {id }= req.params  
    
//     const item = items.find(item => item.id === id)

//     reply.send(item)
// })

    done()
}

module.exports = itemRoutes