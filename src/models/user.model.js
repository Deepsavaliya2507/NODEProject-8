const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config=require('../config/config');

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      trim: true,
    },
    user_image: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
          if (data?.user_image) {
          data.user_image = `${config.base_url}user_image/${data.user_image}`;
          }
      },
  },
  }
);

// userSchema.pre("save", async function (next) {
//   var salt = bcrypt.genSaltSync(8);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model("users", userSchema);
module.exports = User;
