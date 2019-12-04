module.exports = {
    Query: {
        me: async (parent, args, context, info) => {
            return {name: "Basile", password: "123", data: 19};
        }
    },
    Mutation: {
        login: async (parent, args, context, info) => {
            return args.email;
        }
    }
};
