import {IResolvers} from 'graphql-tools';
import {AuthenticationError} from 'apollo-server'
import mongoose from 'mongoose';
import User from './../models/user.model'

const fodmap = require("./../../fodmap.json");

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        fodMap(parent, args, context, info) {
            return {
                code: "0",
                success: true,
                message: "Success",
                data: fodmap
            }
        },
        crises(parent, args, context, info) {
            console.log(args.token);
            return {
                code: "0",
                success: true,
                message: "Success",
                data: [{date: Date, intensity: 1}, {date: Date, intensity: 5}, {date: Date, intensity: 7}, {
                    date: Date,
                    intensity: 3
                }, {date: Date, intensity: 9}, {date: Date, intensity: 3}]
            }
        },
        widget(parent, args, context, info) {
            return {
                code: "0",
                success: true,
                message: "Success",
                data: [
                    {
                        name: "Fodmap",
                        desc: "",
                        image: "https://images.emojiterra.com/twitter/v12/512px/1f346.png",
                        tags: ["food", "validation"]
                    },
                    {
                        name: "Sophrologie",
                        desc: "La sophrologie est une méthode psychocorporelle utilisée comme technique thérapeutique ou vécue comme une philosophie de vie",
                        image: " https://cdn.icon-icons.com/icons2/1576/PNG/512/3561857-bedroom-emoji-emoticon-rest-sleep-sleeping_107895.png",
                        tags: ["Sommeil"]
                    }
                    ,
                    {
                        name: "Sophrologie",
                        desc: "La sophrologie est une méthode psychocorporelle utilisée comme technique thérapeutique ou vécue comme une philosophie de vie",
                        image: " https://cdn.icon-icons.com/icons2/1576/PNG/512/3561857-bedroom-emoji-emoticon-rest-sleep-sleeping_107895.png",
                        tags: ["Sommeil"]
                    }
                ]
            }
        },
        userFromToken(parent, args, context, info) {
            console.log(args.token);
            return {
                code: "0",
                success: true,
                message: "Success",
                data: {
                    firstName: "Romain",
                    lastName: "Urinou",
                    avatar: undefined,
                    sex: "Homme",
                    age: 20,
                    token: args.token,
                    job: "Etudiant",
                }
            }
        },
        async singIn(parent, args, context, info) {
            let New = new User({
                firstName: args.firstName,
                lastName: args.lastName,
                password: args.password,
                email: args.email,
                sex: args.sex,
                age: args.age,
                job: args.job
            });
            let element;
            try {
                element = await New.save();
            } catch (e) {
                console.error(e.errmsg);
                return {
                    code: e.code.toString(),
                    success: false,
                    message: e.errmsg,
                }
            }
            console.log(element);
            return {
                code: "0",
                success: true,
                message: "Success",
                data: {token: element._id}
            };
        },
        async login(parent, args, context, info) {
            const element = await User.findOne({email: args.email, password: args.password});
            console.log(element);
            User.find(function (error, element) {
                console.log(element);
            });
            if (element == null) {
                console.log("Not found");
                return {
                    code: "1",
                    success: false,
                    message: "Not found",
                };
            }
            return {
                code: "0",
                success: true,
                message: "Success",
                data: {token: element._id}
            };
        },
    },
};
export default resolverMap;
