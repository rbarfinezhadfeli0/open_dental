Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Clinical Quality Measure Descriptions

See [EHR Dashboard](ehrdashboard1.html).

The nine [EHR Clinical Quality Measures](ehrcqm.html) (CQMs) tracked and reported by Open Dental are described below. CQM denominators are based on eligible Encounters. Also see [EHR Report Clinical Quality Measures (CQMs)](ehrcqmreport.html).

## #68 Document Current Meds

Percentage of encounters for patients aged 18 years and older for which the EP attests to documenting a list of current medications to the best of his/her knowledge and ability.

**Calculation Info:** Document Current Medications

* Denominator: Patients 18 or older at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: For each encounter, provider must attest that the patient's Medication List is current ([Medical Window](medical.html), Current Meds Documented). See [EHR Attest Medications Documented](ehrcqmcurrentmeds.html).
* If a valid reason [EHR CQMs Not Performed](ehrnotperformed.html) is documented, the encounter will be excluded from the numerator and denominator.

## #69 Preventive Care and Screening: Body Mass Index (BMI) Screening and Follow-Up

Percentage of patients aged 18 years and older with a documented BMI during an encounter or during the previous six months, AND when the BMI is outside of normal parameters, a follow-up plan is documented during the encounter or during the previous six months of the encounter.

**Calculation Info:** There are two BMI Screening and Follow-Up calculations based on age.

* Denominator
  + BMI Screening and Follow-Up, 65+: Patients 65 or older at the start of the reporting period with an eligible encounter during the reporting period.
  + BMI Screening and Follow-Up, 18-64: Patients aged 18 to 64 at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who meet the following criteria.
  + Have height and weight entered (during encounter or in previous six months).
  + If BMI is outside of normal parameters, an intervention must also be documented. See [EHR Interventions](ehrinterventions.html).
* If there is a documented Exclusion from BMI exam due to pregnancy, the encounter is excluded from the calculation.
* If a valid Reason Not Performed is documented, the encounter is excluded from the calculation.

## #74 Primary Caries Prevention Intervention as Offered by Primary Care Providers, including Dentists

Percentage of children, age 0-20 years, who received a fluoride varnish application during an eligible encounter in the reporting period. Calculations are divided into 4 age categories:

**Calculation Info:** There are four Caries Prevention calculations based on age.

* Denominator
  + Caries Prevention, 0-20: Patients 0 - 19 at the start of the reporting period with an eligible encounter during the reporting period.
  + Caries Prevention, 0-5: Patients 0 - 5 at the start of the reporting period with an eligible encounter during the reporting period.
  + Caries Prevention, 6-12: Patients 6 - 12 at the start of the reporting period with an eligible encounter during the reporting period.
  + Caries Prevention, 13-20: Patients 13 - 20 at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who have a completed fluoride procedure during the reporting period (D1208, D1206, D5986).

## #75 Children Who Have Dental Decay or Cavities

Percentage of children, ages 0-20, who have had a diagnosis of caries with an eligible code within the reporting period.

**Calculation Info:** Child Dental Decay, 0-20

* Denominator: Patients 0 - 19 at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who have a [Problem](problemmaster.html) with eligible [SNOMED CT Codes](snomedct.html) (used by CQM 75), added to their [Problem List](problempatient.html).

## #127 Pneumonia Vaccination Status for Older Adults

Percentage of patients 65 years of age and older, with an eligible encounter during the reporting period, who have ever received a pneumococcal vaccine. See [EHR Vaccine Data](ehrvaccine.html)

.

**Calculation Info:** Pneumococcal Vaccination, 65+

* Denominator: Patients age 65 and older at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who had a pneumococcal vaccination with qualified code administered, or a history of the vaccination documented, before or during the reporting period.

## #138 Preventive Care and Screening: Tobacco Use: Screening and Cessation Intervention

Percentage of patients aged 18 years and older who were screened for tobacco use one or more times within 24 months AND who received cessation counseling intervention if identified as a tobacco user.

Calculation Info: Tobacco Cessation Intervention

* Denominator: Patients 18 or older at the start of the reporting period with an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who meet the following criteria.
  + Have a smoking assessment recorded within 24 months of the reporting period end date.
  + If assessed as a tobacco user, an Intervention for tobacco cessation is documented. See [EHR Interventions](ehrinterventions.html).
* If a valid Reason Not Performed is documented, the patient will be excluded from the calculation.

## #147 Preventive Care and Screening: Influenza Immunization

Percentage of patients aged 6 months and older seen for a visit between October 1 and March 31 who received an influenza immunization OR who reported previous receipt of an influenza immunization.

**Calculation Info**: Influenza Immunization, 6 months+

* Denominator: Patients 6 months+ at the start of the reporting period with eligible influenza encounter between October 1 of the year before the measurement period and March 31 of the measurement period and an eligible encounter during the reporting period.
* Numerator: Patients in the denominator who received an influenza vaccination during the reporting period, or reported previous receipt of the vaccination during the encounter. See [Enter Vaccine Data](ehrvaccine.html).
* If a valid [Reason Not Performed](ehrnotperformed.html) is documented, the patient will be excluded from the calculation.

## #155 Weight Assessment and Counseling for Nutrition and Physical Activity for Children and Adolescents

Percentage of patients 3-17 years of age, who had eligible encounters during the reporting period, and who had evidence of the following:

* BMI Assessment: Height, weight, and body mass index (BMI) percentile documented.
* Nutritional Counseling
* Physical Activity Counseling

**Calculation Info**: Calculations are further categorized by age (3-17, 3-11, 12-17). Patients with a documented Exclusion from BMI exam due to pregnancy are excluded.

* Denominators:
  + For 3-17 measures: Patients 3 - 16 at the start of the reporting period with an eligible encounter during the reporting period.
  + For 3-11 measures: Patients 3 - 11 at the start of the reporting period with an eligible encounter during the reporting period.
  + For 12-17 measures: Patients 3 - 16 at the start of the reporting period with an eligible encounter during the reporting period.
* Numerators:
  + BMI Assessment: Patients in the denominator with entries of height, weight, and BMI percentile during reporting period. See [Enter Vital Sign](vitalsignsenter.html)s.
  + Nutritional Counseling: Patients in the denominator who had a nutritional counseling intervention documented.
  + Physical Activity Counseling: Patients in the denominator who had a physical activity intervention documented.

## #165 Controlling High Blood Pressure

Percentage of patients 18-85 years of age who had a diagnosis of hypertension and whose blood pressure was adequately controlled (<140/90mmHg) during the reporting period.

CQM numerator affected when a hypertension Problem with an eligible SNOMED CT code (used by CQM 165) is added to the patient's Problem List.

**Calculation Info:** Controlling High BP

* Denominator: Patients 18-84 at the start of the reporting period with an eligible encounter during the reporting period who also have a diagnosis of hypertension in their Problem List that starts before or within the first 6 months of the start of the reporting period.
* Numerator: Patients in the denominator whose blood pressure was recorded during the most recent eligible encounter, and the results were diastolic < 90 mmHg and systolic < 140 mmHg. See Enter Vital Signs.
* If patient is pregnant the encounter is excluded from the calculation.