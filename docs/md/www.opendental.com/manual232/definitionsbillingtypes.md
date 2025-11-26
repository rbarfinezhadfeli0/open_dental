Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Definitions: Billing Types

In the [Main Menu](mainmenu.html), click Setup, [Definitions](definitions.html), Billing Types.

![](images/definitionsBillingTypes.png)

The Billing Types definition determines the Billing Type options available in the [Edit Patient Information](patientedit.html) and [Edit Insurance Plan](insplan.html) windows. Set the default Billing Type in [Practice Setup](practice.html).

Create Billing Types to indicate how a patient is to be billed (e.g., email statements, send to collections, etc.).

Double-click an existing item or click **Add** to create a new item. The Edit Definition window opens.
![](images/definitionEditBillingTypes.png)

**Name:** Enter the Billing Type name.

Set the behavior of the Billing Type.

* Enter **E** to email statements to patients assigned this Billing Type. Statements are emailed when sent from the [Billing List](billinglist.html).
* Enter **C** for use with patient accounts sent to [TSI](tsicollections.html) for collections.

  Note: If multiple C Billing Types are created, only guarantors assigned first in the list are included in the [TSI Sent Accounts](tsisent.html) tab. Using a single C Billing Type is recommended, and it should not be added to a preexisting Billing Type already in use.
* Enter **CE** for use with patients excluded from [TSI](tsicollections.html) collections.

  Note: If multiple CE billing types have been created, only guarantors assigned first in the list are included in the [TSI Excluded Accounts](tsiexcluded.html) tab. Using a single CE Billing Type is recommended, and it should not be added to a preexisting Billing Type already in use.
* Leave blank for standard billing. From the Billing List, statements are printed to be mailed or sent electronically if Electronic Billing is set up in [Billing Defaults](billingdefaults.html).

Click **OK** to save.

Billing Types may be hidden. However, if in use, hidden Billing Types may be visible throughout various areas of the program. If *Adding new primary insurance plan to patient sets billing type* is enabled in [Preferences](preferences.html), and an insurance plan is assigned a hidden Billing Type, adding the insurance plan to a new patient will still change the patient to the hidden Billing Type.