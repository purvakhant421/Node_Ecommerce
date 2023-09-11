const mongoose = require("mongoose");
const subchildcategorySchema = new mongoose.Schema(
    {
        subchildcategory_name : {
            type : String,
            trim : true,
        },
        subchildcategory_description : {
            type : String,
            trim : true,
        },
        subcategory : {
            type: mongoose.Types.ObjectId,
            ref: "Subcategory"
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

const Subchildcategory = mongoose.model("Subchildcategory" , subchildcategorySchema);
module.exports = Subchildcategory;