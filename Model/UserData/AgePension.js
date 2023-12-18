const Mongoose = require('mongoose');


const UserData_Age_Pension = new Mongoose.Schema({

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
    ownHome: {
        type: String,
        require: false
    },
    homeLoan: {
        type: String,
        require: false
    },
    homeLoanAmount: {
        type: String,
    },
    gift: {
        type: String,
        require: false
    },
    giftExtended: {
        type: String,
        require: false
    },

    // page #3

    husbandCars: {
        type: String,
    },
    //Combined Field
    husbandHousehold: {
        type: String,
    },
    husbandBoat: {
        type: String,
    },
    husbandCaravan: {
        type: String,
    },
    husbandOtherAssets: {
        type: String,
    },

    //Combined Field
    // wife
    wifeCars: {
        type: String,
        require: false
    },



    // page #3 end


    // page #4
    husbandSavingsAccounts: {
        type: String,
    },
    husbandSuperAnnaution: {
        type: String,
    },
    husbandPension: {
        type: String,
    },
    husbandPortfolio: {
        type: String,
    },
    husbandFunds: {
        type: String,
    },
    // wife
    wifeSavingsAccounts: {
        type: String,
        require: false
    },
    wifeSuperAnnaution: {
        type: String,
        require: false
    },
    wifeFunds: {
        type: String,
        require: false
    },
    wifePortfolio: {
        type: String,
        require: false
    },
    wifePension: {
        type: String,
        require: false
    },
    // page #4 end

    // page #5 
    ownOtherProperty: {
        type: String,
        require: false
    },
    secondPropertyValue: {
        type: String,
    },
    propertyLoan: {
        type: String,
        require: false
    },
    secondPropertyLoan: {
        type: String,
    },
    rentOptions: {
        type: String,
        require: false
    },
    secondPropertyRentFrequency: {
        type: String
    },
    secondPropertyRentalIncome: {
        type: String
    },
    secondPropertyAnnualExpense: {
        type: String
    },
    gFatherIncomeStream: {
        type: String,
        require: false
    },
    gFatherCurrentAccountValue: {
        type: String
    },
    gFatherAnnualPension: {
        type: String
    },
    gFatherAnnualDeductible: {
        type: String
    },
    //wife
    wifeGFatherCurrentAccountValue: {
        type: String,
        require: false
    },
    gFatherAnnualPensionWife: {
        type: String,
        require: false
    },
    gFatherAnnualDeductibleWife: {
        type: String,
        require: false
    },

    loanOnFunds:{
        type: String,
        require: false
    },
    husbandInvestmentLoan:{
        type: String
    },
    wifeInvestmentLoan:{
        type: String
    },


    // page #5 end

    // page #6 
    yourOtherIncomeStream: {
        type: String
    },
    yourAnnualPension: {
        type: String
    },
    yourAnnualDeductible: {
        type: String
    },
    yourAnnualPensionWife: {
        type: String,
        require: false
    },
    yourAnnualDeductibleWife: {
        type: String,
        require: false
    },
    // page #6 end

    // page #7
    workingIncome: {
        type: String
    },
    grossSalary: {
        type: String
    },
    grossSalaryWife: {
        type: String,
        require: false
    },
    // page #7 end 


    // page #8
    otherIncomeOptions: {
        type: String
    },
    overseasIncome: {
        type: String
    },
    overseasIncomeWife: {
        type: String,
        require: false
    },
    // page #8 end


    // page #9
    businessIncomeOptions: {
        type: String
    },
    netAssets: {
        type: String
    },
    netProfit: {
        type: String
    },
    netAssetsWife: {
        type: String,
        require: false
    },
    netProfitWife: {
        type: String,
        require: false
    },
    // page #9 end


    //Result Data
    fortnight: {
        type: String
    },
    fortnightAnnual: {
        type: String
    },
    
    ALower: {
        type: String
    },
    AHigher: {
        type: String
    },
    AAssessable: {
        type: String
    },
    AExcess: {
        type: String
    },

    ILower: {
        type: String
    },
    IHigher: {
        type: String
    },
    IAssessable: {
        type: String
    },
    IExcess: {
        type: String
    }
    //Result Data
    
})

module.exports = Mongoose.model("UserData_Age_Pension", UserData_Age_Pension)