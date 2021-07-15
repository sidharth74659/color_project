const mongoose = require('mongoose')

// colors : 
const userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    colors: {
        unsorted: { type: [String] },

        public: {
            primary: { type: [String] },
            secondary: { type: [String] }
        },

        private: {
            projectOne: { type: [String] }
        }
    }

})

const model = mongoose.model("User", userSchema);

module.exports = model

