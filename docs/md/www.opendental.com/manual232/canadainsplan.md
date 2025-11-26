Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Insurance Plans

For [Canada](canada.html) users, in the [Family Module](family.html), double-click an [Insurance Plan](insplan.html).

![](images/canadianInsPlan.gif)

The Insurance plan looks slightly different in Canada than it does for other countries. The key difference is terminology; all insurance plan fields are in the same place. Notable differences are highlighted in orange and discussed below.

Note: Some Canadian insurance carriers may combine the division number, subscriber ID, and dependent code into a single string of text, (e.g., UTM876543211-01) where the letters (UTM) are the Div. No., the numbers before the hyphen (876543211) are the subscriber ID and the numbers after the hyphen (01) are the Dependent Code. The hyphen is not entered.

**Assignment of Benefits (pay dentist)**: When checked, insurance will send payments to provider. When unchecked, payments will be sent to patient. Unchecking box will also turn off the automatic import of EOBs (when in use in [Clearinghouses](clearinghouses.html)).

**EDI Code**: The 6-digit carrier ID number. Required for electronic claims.

**Plan Number**: Also known as Policy Number, Contract Number, or Group Number.

**Plan Type**: Typically Category Percentage for nearly all Canadian insurance plans.

**Fee Schedule**: Leave as *None* if the plan pays on the current year fee guide.

**Subscriber ID**: Also known as Certificate Number or Member Number.

**Request Electronic Benefits**: Eligibility requests are not currently supported in Canada.

**Benefit Information**: To see recommended insurance categories for Canada, see [Canada Insurance Categories](canadainscatsetup.html). To set up time units, see [Canada Procedure Code Time Units](canadaproctimeunits.html).

## Canadian Tab

The Canadian tab hosts additional Canada-specific settings.

![](images/canadianInsPlanInfoSection.gif)

**Dentaide Card Sequence**: Enter the mandatory two digit value for Dentaide.

**Plan Flag**: Usually left blank, but used to indicate one of three kinds of Provincial Medical Plans:

* A = Newfoundland MCP Plan
* V = Veteran's Affairs Plan
* N = NIHB

**Is Provincial Medical Plan**: If Plan Flag indicates a Provincial Medical Plan, check the box. If it is blank, uncheck the box.

**Diagnostic and Institution codes**: Only required if Plan Flag is set to A.