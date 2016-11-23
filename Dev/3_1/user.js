import mongoose from 'mongoose';
import _ from 'lodash';
var Schema = mongoose.Schema;

const UserShame = new Schema ({
        name: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,                // будет показывать время ищменений
    })

UserShame.methods.toJSON= function(){  // выполница когда данные будут преобразовываться в JSON(можно когда в щбъект и тд)
    return _.pick(this, ['name'])
}
// UserShame.methods.toObject= function(){  // выполница когда данные будут преобразовываться в Jбъект(можно когда в щбъект и тд)
//     return {
//         name : "prefix_" + this.name    // будет добавлять слово перфикс к юзернейму
//     }
// }

export default mongoose.model('User', UserShame);