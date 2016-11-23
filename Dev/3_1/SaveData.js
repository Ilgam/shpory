import User from './User';
import Pets from './Pet';
import Promis from "bluebird";
export  default async function SD(data){
    try {
        const user = new User(data.user)
        await user.save();
        const promisPet = data.pets.map((pet)=> {
            const petD = Object.assign({}, pet, {
                owner: user._id
            });
            return (new Pets(petD)).save()
        });
        console.log('sucsses')


        return {
            user,
            pets: await Promise.all(promisPet)
    }
} catch(err) {
    console.log("error1", err);
    throw err;

}
}