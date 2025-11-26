Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Electronic Payer IDs

Electronic Payer IDs are used to submit electronic claims to carriers.

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Payer IDs.

![](images/payerID.png)

Alternatively, in an [Insurance Plan](insplan.html), click **Search IDs**.

Payer IDs are assigned to the insurance carrier. Adding an ID directly to a carrier from the Edit Insurance Plan window or [Carriers](carriers.html) window does not add the ID to this list.

This list is provided as a courtesy but is not extensive. Some clearinghouses automatically update this list. See Automatically Update Payer IDs below.

**CommBridge**: Defaults to the default clearinghouse. Displays Payer IDs updated or added by the clearinghouse. Select *All* to see all payer IDs regardless of how they were added.

## Add or Edit an ID

IDs can be edited or added as needed. Always verify that the electronic payer ID for a carrier is correct. If the wrong ID is used, it may require claims to be resubmitted at an additional expense.

To add a new electronic payer ID, click **Add** or double-click an ID to edit.

![](images/payerIDAdd.png)

* **Payer ID**: Enter the Payer ID.
* **Carrier Name**: Enter the carrier name.
* **Comments**: Optional. Enter any comments about this ID.
* **Is Medicaid**: Check this box for Medicaid carriers.
* **Payer Service**: If the carrier was added automatically by a clearinghouse, the clearinghouse name displays. Otherwise, displays *None*.
* **Attributes**: Information sent about the payer from the clearinghouse (e.g., does the payer send ERAs, does the payer default to electronic or paper, etc). Attributes cannot be added or edited.

Click OK to save.

## Automatically Update Payer IDs

Payer ID List is automatically updated weekly if using one of the following clearinghouses as default:

* [DentalXChange](eclaimsclaimconnect.html) (ClaimConnect)
* [Electronic Dental Services](eclaimseds.html) (EDS)

The [Open Dental Service](opendentalservice.html) is required. There is no indication in Open Dental when the list is updated. A log file named *PayerList* is located in the Open Dental installation folder. It tracks the successes and failures of Payer ID updates.