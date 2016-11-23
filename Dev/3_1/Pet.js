import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import _ from 'lodash';
const PetSchame = new Schema ({
    type: {
           type: String,
           emun: ['cat','dog'], //может быть только 'cat','dog'
           required: true,
    },
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId, // для обозначане что в этой строке будет id
        ref: 'User',                   // а это чей id
        required: true,
    },
}, {
    timestamps: true,                // будет показывать время ищменений
})
PetSchame.methods.toJSON= function(){  // выполница когда данные будут преобразовываться в JSON(можно когда в щбъект и тд)
    return _.pick(this, ['name', 'type', 'owner'])
}

export default mongoose.model('Pets', PetSchame);