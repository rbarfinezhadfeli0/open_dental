Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Canada Insurance Plans

For [Canada](canada.html) users, in the [Family Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7family.html), double-click an [Insurance Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplan.html).

![](images/canadianInsPlan.png)

The Edit Insurance Plan window looks slightly different in Canada than it does for other countries. The key difference is terminology; all insurance plan fields are in the same place. Notable differences are highlighted in orange and discussed below.

* **Dependant Code**: A 2-digit code assigned to the family member on the plan. Required by some carriers/plans.
* **EDI Code**: The 6-digit carrier ID number. Required for electronic claims.
* **Plan Number**: Also known as Policy Number, Contract Number, or Group Number.
* **Div. No.**: Division number. Required by some carriers/plans.
* **Plan Type**: Typically Category Percentage for nearly all Canadian insurance plans.
* **Fee Schedule**: See below for entering fee schedules for different plan types.
* **Subscriber ID**: Also known as Certificate Number or Member Number.
* **Assignment of Benefits (pay provider)**: When checked, insurance sends payments to provider. When unchecked, payments are sent to the patient. Unchecking box also turns off the automatic download of EOBs for the subscriber (when in use in [Clearinghouses](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7clearinghouses.html)).
* **Request Electronic Benefits**: Eligibility requests are not currently supported.
* **Benefit Information**: To see recommended insurance categories for Canada, see [Canada Insurance Categories](canadainscatsetup.html). To set up time units, see [Canada Procedure Code Time Units](canadaproctimeunits.html).

Note: Some Canadian insurance carriers may combine the division number, subscriber ID, and dependant code into a single string of text, (e.g., UTM876543211-01) where the letters (UTM) are the Div. No., the numbers before the hyphen (876543211) are the subscriber ID and the numbers after the hyphen (01) are the Dependant Code. The hyphen is not entered.

## Other Ins Info Tab

The Other Ins Info tab includes the Coordination of Benefits rules and Exclusion rules.

![](images/canadianInsPlanOtherInsInfo.png)

The Other Ins Info tab will be the same in Canada as it is for other countries, see [Insurance Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplan.html). However, some notable recommendations are discussed below.

* **COB Rule**: Click to choose the [Coordination of Benefits ( COB )](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7cob.html) rule. *Standard* is the recommended default for Canadian offices.
* **Exclusions**: Click to choose the insurance plan's exclusion rule. *Use UCR Fee* is the recommended default for Canadian offices, especially if HSO plans are used.

## Canadian Tab

The Canadian tab hosts additional Canada-specific settings.

![](images/canadianInsPlanInfoSection.png)

* **Plan Flag**: Usually left blank, but used to indicate one of three kinds of Provincial Medical Plans:
  + A = Newfoundland MCP Plan
  + V = Veteran's Affairs Plan
  + N = NIHB
* **Is Provincial Medical Plan**: If Plan Flag indicates a Provincial Medical Plan, check the box. If it is blank, uncheck the box.
* **Diagnostic and Institution codes**: Only required if Plan Flag is set to A.

## Plan Examples

Below are some examples of setting up insurance depending on the insurance plan and region.

**General Setup**

![](images/canadaInsPlanGeneral.png)

The general setup is the most common. All fee on procedures show the provider's fees (usually the province fees). The patient is responsible for anything not covered by insurance.

* Set the Plan Type to *Category Percentage*.
* Leave the Fee Schedule as *None*.

**Charge Difference**

![](images/canadaInsPlanDifference.png)

All fees on procedures show the provider's fees (usually the province fees), but the out-of-network fee guide is used for estimates. Percentages are based off the out-of-network fee guide. The patient is responsible for the difference between the two fees and anything not covered by insurance.

* Set the Plan Type to *Category Percentage*.
* Set the Out of Network (Old) fee guide to the insurance fee guide.

**Charge Only**

![](images/canadaInsPlanChargeOnly.png)

All fees on procedures show the fees for the assigned fee guide. The patient is not responsible for the fees on the assigned guide. The patient is responsible for anything not covered by insurance.

* Set the Plan Type to *Category Percentage*.
* Set the Fee Schedule to the insurance fee guide.

**Two Different Fee Guides**

![](images/canadaInsPlanDifference2Charge.png)

All fees on procedures show the fees for the assigned fee guide. The out-of-network fee guide is used for estimates. Percentages are based off the out-of-network guide. The patient is responsible for the difference between the two fees and anything not covered by insurance.

* Set the Plan Type to *Category Percentage*.
* Set the Fee Schedule to the desired fee guide.
* Set the Out of Network (Old) fee guide to the insurance fee guide.

**HSO Plans**

![](images/canadaInsPlanHSOPlan.png)

All fees on procedures show the fees for the assigned fee guide. The out-of-network fee guide is used for estimates. Percentages are based off the out-of-network guide.

* Set the Exclusion rule in the Other Ins Info tab to *Use UCR Fee*.
* Set the Plan Type to *Category Percentage*.
* Set the Fee Schedule to the desired HSO fee guide.
* Create a new HSO fee guide as Out of Network type in [Fee Schedules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7feeschedules.html).
* Copy the *Normal* type HSO fee guide to the *Out of Network* type HSO fee guide using [Fee Tools](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7feescheduletools.html).
* Set the Out of Network (Old) HSO fee guide to the *Out of Network* copy of the *Normal* HSO fee guide.
* Set all [Benefit Categories](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7benefitinfo.html) to 100%.