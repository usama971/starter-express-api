const Joi = require("joi");

const UserData_AgePension_schema = (threshold) => {
  const schema = Joi.object({
    _id: Joi.string(), // Allow _id field
    UserEmail: Joi.string().email({ tlds: { allow: false } }),
    relationshipStatus: Joi.string(),
    wifeDOB: Joi.date(),
    husbandDOB: Joi.date(),
    ownHome: Joi.string(),
    homeLoan: Joi.string(),
    homeLoanAmount: Joi.string(),
    gift: Joi.string(),
    giftExtended: Joi.string(),
    husbandCars: Joi.string(),
    husbandHousehold: Joi.string(),
    husbandBoat: Joi.string(),
    husbandCaravan: Joi.string(),
    husbandOtherAssets: Joi.string(),
    wifeCars: Joi.string(),
    husbandSavingsAccounts: Joi.string(),
    husbandSuperAnnaution: Joi.string(),
    husbandPension: Joi.string(),
    husbandPortfolio: Joi.string(),
    husbandFunds: Joi.string(),
    wifeSavingsAccounts: Joi.string(),
    wifeSuperAnnaution: Joi.string(),
    wifeFunds: Joi.string(),
    wifePortfolio: Joi.string(),
    wifePension: Joi.string(),
    ownOtherProperty: Joi.string(),
    secondPropertyValue: Joi.string(),
    propertyLoan: Joi.string(),
    secondPropertyLoan: Joi.string(),
    rentOptions: Joi.string(),
    secondPropertyRentFrequency: Joi.string(),
    secondPropertyRentalIncome: Joi.string(),
    secondPropertyAnnualExpense: Joi.string(),
    gFatherIncomeStream: Joi.string(),
    gFatherCurrentAccountValue: Joi.string(),
    gFatherAnnualPension: Joi.string(),
    gFatherAnnualDeductible: Joi.string(),
    wifeGFatherCurrentAccountValue: Joi.string(),
    gFatherAnnualPensionWife: Joi.string(),
    gFatherAnnualDeductibleWife: Joi.string(),
    yourOtherIncomeStream: Joi.string(),
    yourAnnualPension: Joi.string(),
    yourAnnualDeductible: Joi.string(),
    yourAnnualPensionWife: Joi.string(),
    yourAnnualDeductibleWife: Joi.string(),
    workingIncome: Joi.string(),
    grossSalary: Joi.string(),
    grossSalaryWife: Joi.string(),
    otherIncomeOptions: Joi.string(),
    overseasIncome: Joi.string(),
    overseasIncomeWife: Joi.string(),
    businessIncomeOptions: Joi.string(),
    netAssets: Joi.string(),
    netProfit: Joi.string(),
    netAssetsWife: Joi.string(),
    netProfitWife: Joi.string(),
    fortnight: Joi.string(),
    fortnightAnnual: Joi.string(),
    ALower: Joi.string(),
    AHigher: Joi.string(),
    AAssessable: Joi.string(),
    AExcess: Joi.string(),
    ILower: Joi.string(),
    IHigher: Joi.string(),
    IAssessable: Joi.string(),
    IExcess: Joi.string(),
    
  });
  return schema.validate(threshold);
};

module.exports = UserData_AgePension_schema;
