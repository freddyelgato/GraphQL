import { ApolloServer, UserInputError,gql } from 'apollo-server';
import{v1 as uuid} from 'uuid';

const persons = [
    {
        name: "Freddy Moreira",
        phone: "0987654321",
        street: "Av. Amazonas 123",
        city: "Quito",
        id: 1
    },
    {
        name: "María López",
        phone: "0981234567",
        street: "Calle 10 de Agosto",
        city: "Guayaquil",
        id: 2
    },
    {
        name: "Carlos Gómez",
        phone: "0998765432",
        street: "Av. República 456",
        city: "Cuenca",
        id: 3
    },
    {
        name: "Ana Torres",
        phone: "0976543210",
        street: "Calle Bolívar 789",
        city: "Ambato",
        id: 4
    },
    {
        name: "Luis Martínez",
        phone: "0965432109",
        street: "Av. Simón Bolívar",
        city: "Loja",
        id: 5
    },
];

// Definición del esquema
const typeDefs = gql`

    type Address{
        street: String!
        city: String!
    }

    type Person {
        name: String!
        phone: String
        address: Address!
        id: ID!
        
    }

    type Query {
        personCount: Int!
        allPersons: [Person]!
        findPerson(name: String!): Person
    }

    type Mutation{
        addPerson(
            name: String!
            phone: String
            street: String!
            city: String!
        ):Person
    }
`;
// Resolvers para las consultas
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson:(root,args) =>{
            const{name}=args
            return persons.find(person => person.name == name)
        }
    },

    Mutation:{
        addPerson:(root,args)=>{
            if(persons.find(p=>p.name==args.name)){
                throw new UserInputError('Name must be unique',{
                    invalidArgs:args.name
                })

            }
            const person={...args,id: uuid()}
            persons.push(person)
            return person
        }
    },

    Person:{
        address: (root) => {
            return{
                street: root.street,
                city: root.city
            }
        }
    },
};

// Crear y configurar Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});