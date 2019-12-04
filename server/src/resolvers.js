module.exports = {
    Query: {
        me: async (parent, args, context, info) => {
            return "Basile";
        }
    },
    Mutation: {
        login: async (parent, args, context, info) => {
            return "Basile";
        }
    }
};
