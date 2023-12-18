const Mongoose = require('mongoose');


const Adviser_Table = new Mongoose.Schema({

  adviserName: {
    type: String
  },

  Password: {
    type: String
  },

  CompanyName: {
    type: String
  },

  Designation: {
    type: String
  },
  
  CompanyAddress: {
    type: String
  },
  
  CompanyEmail: {
    type: String
  },
  
  CompanyPhone: {
    type: String
  },
  
  DOJ: {
    type: String
  },

  Package: {
    type: String
  },

  Opt: {
    type: String
  },

  SoftDelete: {
    type: Number,
    require:false
  },
  RefreshToken: {
    type: String,
    default:"",
    require:false
  },
  role: {
    type: String,
    default:"1984",
    require:false
  },
  Domain:{
  type: String,
  require: true,
  }

})

module.exports = Mongoose.model("Advisers", Adviser_Table)