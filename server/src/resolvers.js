module.exports = {
    Query: {
        me: async (parent, args, context, info) => {
            return {name: "Basile", password: "123", data: 19};
        },
        foodMap: async (parent, args, context, info) => {
            console.log(args.token);
            return {
                code: "0",
                success: true,
                message: "success",
                data: [{aliment: "Courge", trigger: 10}, {aliment: "Endive", trigger: 90},
                    {aliment: "Crabe", trigger: 20}, {aliment: "Oignon", trigger: 70},
                    {aliment: "Flan", trigger: 30},]
            }
        },
    },
    Mutation: {
        login: async (parent, args, context, info) => {
            return args.email;
        }
    }
};
