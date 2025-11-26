Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Procedure Code Time Units

Procedures that use scaling units can be entered and tracked using Time Units.

For [Canada](canada.html) users, in the [Treatment Plan Module](treatmentplan.html), click **Ins Rem**.

![](images/canadaProcTimeUnitsRem.png)

Alternatively, in the [Account Module](account.html), click **Ins Rem**.

![](images/youtubeLogo.png) See our webinar: [Setting Up and Tracking Procedure Time Units](https://youtu.be/NZaggmVwFbo)

To calculate time units, the following must be set

* The procedure code has must have a time unit value. See Procedure Code Time Units below.
* The insurance plan must have an other benefit entered to track units. See Time Unit Benefit below.

Quantity used and remaining updates as completed procedures in the category are added to claims.

## Procedure Code Time Units

Ensure each [Procedure Code](procedurecodeedit.html) being tracked has a Time Unit entered.

![](images/canadaProcTimeUnits.png)

## Time Unit Benefit

For each insurance plan tracking time units, enter a [Benefit](benefitinforowview.html) using the example below as a guide.

![](images/canadaTimeUnitBenefit.png)

* **Category**: Something other than none
* **Type**: Limitations
* **TimePeriod**: Calendar Year or Service Year
* **Quantity**: Greater than 0 (this should match the time unit values covered by the plan)
* **Qualifier**: Number of Services
* **Coverage Level**: Individual or Family