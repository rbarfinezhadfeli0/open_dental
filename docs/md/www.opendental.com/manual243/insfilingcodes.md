Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Filing Codes

Insurance Filing Codes are used by Insurance Plans to identify a claim type and are most commonly used when sending electronic claims.

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Insurance Filing Codes.

![](images/insFilingCodes.png)

Assign a *Filing Code* and *Filing Code Subtype* in the Other Ins Info tab of an [Insurance Plan](insplan.html).

Insurance Filing Codes are used:

* To identify claim type on [Electronic Claims](clearinghouses.html).
* In [Billing](billing.html), *Exclude Filing Codes* filter.
* In [Insurance Verification Setup](insverifylistsetup.html), *Insurance filing code in* setting.

**Insurance Filing Codes**: The most commonly used filing codes appear in the list by default. Double-click a filing code to edit. Edit Claim Filing Code opens (see below).

**Add**: Create a new Insurance Filing Code.

**Up**/**Down**: Highlight a filing code in the list and click to reorder.

## Edit Claim Filing Code

Click **Add** to create a new filing code or highlight an existing filing code and double-click to edit. Edit Claim Filing Code opens

![](images/insFilingCodeAdd.png)

* **Description**: Name of the filing code.
* **Eclaim Code**: Code that is sent on electronic claim.
* **Group**: Groups are useful to query claim and carrier information. Select group from dropdown menu. Groups can be added or edited in [Definitions: Insurance Filing Code Group](definitionsinsfilingcodes.html)
* **Exclude 'Other Coverage' on Primary Claims**: Determine if other coverage information is included on primary claims
  + Checked: If this filing code is used for an secondary insurance plan, other coverage information is not sent on a primary claim.
  + Unchecked: If this filing code is used for an secondary insurance plan, other coverage information is sent on a primary claim.
* **Insurance Filing Code Subtypes**: Click Add to create a subtype for this Filing Code. Subtypes can be added to the Insurance Plan.

**Delete**: Remove a filing code that is not use by any insurance plans.