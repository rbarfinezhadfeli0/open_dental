Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Providers

The Merge Provider tool can be used to merge duplicate providers.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, **Merge Providers**.

![](images/providerMerge.gif)

Merging providers cannot be undone. Only merge providers when they are the same individual/entity and only when necessary. To run this tool a user must have the *Provider Merge* security permission.

Note: To reassign patients from one provider to another, consider moving or reassigning providers instead. See the [Providers](providers.html).

To merge duplicate providers:

1. **Provider to merge into**: Click **Change** to select the provider to keep.
2. **Provider to merge from**: Click **Change** to select the provider that will merge into the above provider.
   * Check **Show Deleted** select from hidden and deleted providers.
3. Click **Merge** to combine the providers.
4. A confirmation message will appear. Click **Yes** to proceed with the merge.
![](images/medicationMergeConfirm.gif)5. If provider full names or NPIs do not match, a warning will appear to notify the user of mismatched information and number of claims and active patients connected to the *Provider to merge from*. To confirm the merge, click **OK**. Click **Cancel** to stop the merge.
   * If provider full names and NPIs match, this warning will not appear, the merge will be completed immediately upon clicking Yes on the first confirmation (Step 4).
![](images/providerMergeNoMatch.gif)6. A *Done*  popup will show once the merge is complete.

Once the merge has been completed, the *Provider to merge into* (Step 1) will be reassigned wherever the  *Provider to merge from* (Step 2) was assigned throughout the entire database (including, but not limited to adjustments, appointments, claims, payments, procedures, etc.). The *Provider to merge from* is viewable from the Providers List when checking *Show Deleted*.

The *Provider to merge from* assignment will not be replaced in [Public Health Screening](publichealthscreenings.html) or [LabCorp HL7](hl7labcorp.html) lab orders.