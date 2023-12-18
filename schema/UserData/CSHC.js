const Joi = require("joi");

const UserData_AgePension_schema = (threshold) => {
  const schema = Joi.object({
    _id: Joi.string(), // Allow _id field
    UserEmail: Joi.string().email({ tlds: { allow: false } }),
    relationshipStatus: Joi.string(),
    wifeDOB: Joi.date(),
    husbandDOB: Joi.date(),
    husbandDividendIncome: Joi.string(),
    wifeDividendIncome: Joi.string(),
    husbandFunds: Joi.string(),
    wifeFunds: Joi.string(),
    husbandInterest: Joi.string(),
    wifeInterest: Joi.string(),
    rentOptions: Joi.string(),
    rentFrequency: Joi.string(),
    secondPropertyRentalIncome: Joi.string(),
    secondPropertyAnnualExpense: Joi.string(),
    yourOtherIncomeStream: Joi.string(),
    yourAnnualPension: Joi.string(),
    yourAnnualPensionWife: Joi.string(),
    workingIncome: Joi.string(),
    grossSalary: Joi.string(),
    grossSalaryWife: Joi.string(),
    otherIncomeOptions: Joi.string(),
    overseasIncome: Joi.string(),
    overseasIncomeWife: Joi.string(),
    yourAnnualPensionWife: Joi.string(),
    accountBasedPensionOptions: Joi.string(),
    husbandPensionAccountBased: Joi.string(),
    wifePensionAccountBased: Joi.string(),
    totalIncome: Joi.string(),
    threshold: Joi.string()
    
  });
  return schema.validate(threshold);
};

module.exports = UserData_AgePension_schema;
