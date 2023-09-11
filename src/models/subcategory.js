const mongoose = require("mongoose");
const subcategorySchema = new mongoose.Schema(
    {
        subcategory_name : {
            type : String,
            trim : true,
        },
        subcategory_description : {
            type : String,
            trim : true,
        },
        category : {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Subcategory = mongoose.model("Subcategory" , subcategorySchema);
module.exports = Subcategory;