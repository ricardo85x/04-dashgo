import { createServer, Factory, Model, Response, ActiveModelSerializer } from "miragejs"

import faker from "faker"

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() { 

    const server =  createServer({

        serializers: {
            application: ActiveModelSerializer
        },
         
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i:number) {
                    return `User ${i+1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt(i) {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server){
            server.createList('user', 200)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750; // ms
            this.get('/users', function(schema, request) {
                const { page = 1 , perPage = 10 } = request.queryParams;

                const total = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(perPage);
                const pageEnd = pageStart + Number(perPage);

                const users =  this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)


                return new Response(
                    200,
                    {
                        'x-total-count': total.toString()
                    }, 
                    {
                        users
                    } 
                )  
                 
            })
            this.get('/users/:id')
            this.post('/users')
            this.namespace = ''
        //    this.passthrough()
        // DEBUG MIRAGE
        }
    })

    return server; 
}