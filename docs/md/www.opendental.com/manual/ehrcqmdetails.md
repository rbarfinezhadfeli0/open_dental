Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR CQM Calculation Details

See [EHR Dashboard](ehrdashboard1.html).

The CQMs reported by Open Dental list on the [Clinical Quality Measures 2014 window](ehrcqmreport.html). A CQM may be represented by several rows if the data is divided into different classifications (e.g. divided by age groups). You can drill down to the patient level for each calculation to see what is included in each denominator, numerator, exception, etc.

Double click a row to see calculation details.

![](images/ehrCqmEdit.gif)

Audit: [EHR Encounters](ehrencounters.html) included in the denominator, plus exclusions or exceptions.

* If Numerator = X then this encounter is included in the numerator.
* If Exclusion = X then this encounter meets exclusion criteria and is not counted in the final denominator value.
* If Exception = X, then a valid reason [EHR CQMs Not Performed](ehrnotperformed.html) was documented for this encounter and it is not included in the final denominator value.

Descriptions of each denominator, numerator, exception, or exclusion also show.

* Denominator: All patients calculated (had an eligible encounter).
* Numerator: All patients for whom the required action was performed (e.g. information recorded, intervention performed).
* Exclusions: Patients who had an eligible encounter but are excluded from the denominator for a valid reason (e.g. pregnancy). Valid exclusions vary by CQM. Pregnancy is usually documented in Vital Signs as an Exclusion from BMI.
* Exceptions: Patients who have a valid reason CQMs Not Performed documented for an eligible encounter. Exceptions are excluded from the performance rate calculation.
* Performance Not Met: The number of encounters for which CQM data was not entered. Denominator - Numerator - Exclusions - Exceptions
* Reporting Rate: The percentage of encounters for which CQM data was entered. Exclusions and exceptions are included in the numerator. (Numerator + Exceptions + Exclusions) divided by Denominator
* Performance Rate: The final CQM percentage that is reported. This number subtracts exclusions and exceptions from the denominator before calculating the percentage. Numerator divided by (Denominator - Exclusions - Exceptions)