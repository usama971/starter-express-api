const Mongoose = require('mongoose');


const UserData_CSHC = new Mongoose.Schema({

    UserEmail: {
        type: String
    },
    // Calculators Data  
    relationshipStatus: {
        type: String,
    },
    wifeDOB: {
        type: Date,
    },
    husbandDOB: {
        type: Date,
    },
    husbandDividendIncome: {
        type: String,
        require: false
    },
    wifeDividendIncome: {
        type: String,
        require: false
    },
    husbandFunds: {
        type: String,
    },
    wifeFunds: {
        type: String,
        require: false
    },
    husbandInterest: {
        type: String,
    },
    wifeInterest: {
        type: String,
        require: false
    },
    // page #3

    rentOptions: {
        type: String,
        require: false
    },
    //Combined Field
    rentFrequency: {
        type: String,
    },
    secondPropertyRentalIncome: {
        type: String,
    },
    secondPropertyAnnualExpense: {
        type: String,
    },
    // page #3 end

    // page #4
    yourOtherIncomeStream: {
        type: String,
    },
    yourAnnualPension: {
        type: String,
    },
    yourAnnualPensionWife: {
        type: String,
    },
    // page #4 end

    // page #5 
    workingIncome: {
        type: String,
        require: false
    },
    grossSalary: {
        type: String,
    },
    grossSalaryWife: {
        type: String,
        require: false
    },
    // page #5 end

    // page #6 
    otherIncomeOptions: {
        type: String
    },
    overseasIncome: {
        type: String
    },
    overseasIncomeWife: {
        type: String
    },
    yourAnnualPensionWife: {
        type: String,
        require: false
    },
    // page #6 end

    // page #7
    accountBasedPensionOptions: {
        type: String,
        require: false
    },
    husbandPensionAccountBased: {
        type: String
    },
    wifePensionAccountBased: {
        type: String,
        require: false
    },
    // page #7 end 


    //Result Data
    totalIncome: {
        type: String
    },
    threshold: {
        type: String
    },
    //Result Data
    
})

module.exports = Mongoose.model("UserData_CSHC", UserData_CSHC)