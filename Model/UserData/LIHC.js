const Mongoose = require('mongoose');


const UserData_LIHC = new Mongoose.Schema({

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
    gift: {
        type: String,
        require: false
    },
    giftExtended: {
        type: String,
        require: false
    },

    //Page 2
    businessIncomeOptions: {
        type: String,
        require: false
    },
    //Page 2 End

    benefits: {
        type: String,
        require: false
    },
    centreLinkBenefits: {
        type: String,
    },
    centreLinkBenefitsWife: {
        type: String,
        require: false
    },
    // page #3

    //Combined Field
    husbandSavingsAccounts: {
        type: String,
    },
    wifeSavingsAccounts: {
        type: String,
        require: false
    },
    husbandSuperAnnaution: {
        type: String,
    },
    wifeSuperAnnaution: {
        type: String,
        require: false
    },
    // page #3 end

    // page #4
    husbandPension: {
        type: String,
    },
    wifePension: {
        type: String,
    },
    // page #4 end

    // page #5 
    husbandPortfolio: {
        type: String,
    },
    wifePortfolio: {
        type: String,
        require: false
    },
    // page #5 end

    // page #6 
    husbandFunds: {
        type: String
    },
    wifeFunds: {
        type: String,
        require: false
    },
    // page #6 end


    // page #7 
    rentOptions: {
        type: String,
        require: false
    },
    // page #7 end

    rentFrequency: {
        type: String
    },
    secondPropertyRentalIncome: {
        type: String
    },
    secondPropertyAnnualExpense: {
        type: String
    },
    yourOtherIncomeStream: {
        type: String,
        require: false
    },
    yourAnnualPension: {
        type: String
    },
    yourAnnualPensionWife: {
        type: String
    },
    yourAnnualDeductible: {
        type: String
    },
    yourAnnualDeductibleWife: {
        type: String
    },
    grossSalary: {
        type: String
    },
    grossSalaryWife: {
        type: String
    },
    workingIncome: {
        type: String,
        require: false
    },
    otherIncomeOptions: {
        type: String,
        require: false
    },
    overseasIncome: {
        type: String
    },
    overseasIncomeWife: {
        type: String
    },


    //Result Data
    totalIncome1: {
        type: String
    },
    incomeThreshold1: {
        type: String
    },
    //Result Data

})

module.exports = Mongoose.model("UserData_LIHC", UserData_LIHC)