const Joi = require("joi");

const UserData_AgePension_schema = (threshold) => {
  const schema = Joi.object({
    _id: Joi.string(), // Allow _id field
    UserEmail: Joi.string().email({ tlds: { allow: false } }),
    relationshipStatus: Joi.string(),
    wifeDOB: Joi.date(),
    husbandDOB: Joi.date(),
    gift: Joi.string(),
    giftExtended: Joi.string(),
    businessIncomeOptions: Joi.string(),
    benefits: Joi.string(),
    centreLinkBenefits: Joi.string(),
    centreLinkBenefitsWife: Joi.string(),
    husbandSavingsAccounts: Joi.string(),
    wifeSavingsAccounts: Joi.string(),
    husbandSuperAnnaution: Joi.string(),
    wifeSuperAnnaution: Joi.string(),
    husbandPension: Joi.string(),
    wifePension: Joi.string(),
    husbandPortfolio: Joi.string(),
    wifePortfolio: Joi.string(),
    husbandFunds: Joi.string(),
    wifeFunds: Joi.string(),
    rentOptions: Joi.string(),
    rentFrequency: Joi.string(),
    secondPropertyRentalIncome: Joi.string(),
    secondPropertyAnnualExpense: Joi.string(),
    yourOtherIncomeStream: Joi.string(),
    yourAnnualPension: Joi.string(),
    yourAnnualPensionWife: Joi.string(),
    yourAnnualDeductible: Joi.string(),
    yourAnnualDeductibleWife: Joi.string(),
    grossSalary: Joi.string(),
    grossSalaryWife: Joi.string(),
    workingIncome: Joi.string(),
    otherIncomeOptions: Joi.string(),
    overseasIncome: Joi.string(),
    overseasIncomeWife: Joi.string(),
    totalIncome1: Joi.string(),
    incomeThreshold1: Joi.string(),
    
  });
  return schema.validate(threshold);
};

module.exports = UserData_AgePension_schema;
