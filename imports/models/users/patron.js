import { Class } from 'meteor/jagi:astronomy';
import {User} from "./user";

export const Patron = User.inherit({
    name: 'Patron',
    collection: new Meteor.Collection('patrons'),
    fields: {

    }
});
