Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Merge Billing Types

The Merge Billing Types tool can be used to merge duplicate billing types.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Merge Billing Types.

![](images/mergeBillingTypes.png)

A [Billing Type](definitionsbillingtypes.html) is assigned to each patient, but can optionally be assigned to procedures, clinics, insurance plans, and dunning messages. When merging billing types, the billing type that is kept is used in these places.

To merge billing types:

1. Select the *Billing Type to merge into*. Use **[...]** to select the billing type to keep. The billing type entered in the next area merges into this one.
2. Select the *Billing Type to merge from*. Use **[...]** to select the billing type to remove.
3. Click **Merge** to combine billing types. A confirmation message appears warning the user this action cannot be undone.
   ![](images/mergeBillingTypesPrompt.png)
4. Click **Yes** to continue. A message dislays once the merge is successful.

Once the merge is complete, anywhere the *Billing Type to merge from* (Step 2) is in use is replaced with the *Billing Type to merge into* (e.g., patients' billing types are reassigned, etc). The *Billing Type to merge from* is marked Hidden in [Definitions: Billing Types](definitionsbillingtypes.html). Billing types used in automation are not updated. [Automation](automation.html) should be reviewed after merging types.