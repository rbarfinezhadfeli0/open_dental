Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Providers

The Merge Provider tool can be used to merge duplicate providers.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, **Merge Providers**.

![](images/providerMerge.png)

Merging providers cannot be undone. Only merge providers when they are the same individual/entity and only when necessary (e.g., duplicates). The *Provider Merge* [Security Permission](permissions.html) is required to run this tool.

Note: To reassign patients from one provider to another, consider moving or reassigning providers instead. See Lists, [Providers](providers.html) for details.

To merge duplicate providers:

1. Select the *Provider to merge into*. Click **Change** to select a provider from the [Providers](providers.html) list to keep.
2. Select the *Provider to merge from*. Click **Change** to select the provider that will merge into the provider selected above and be marked deleted from the Providers list.
   * Check **Show Deleted** to see hidden or deleted providers when selecting.
3. Click **Merge** to combine the providers.
4. There is a warning that the results are permanent and cannot be undone. Click **Yes** to proceed with the merge.
![](images/medicationMergeConfirm.png)5. If provider full names or NPIs do not match, there is an additional warning. The warning indicates the type of mismatched information, and the number of claims and active patients connected to the *Provider to merge from*. Click **OK** to confirm the merge. Click **Cancel** to stop the merge.
   * If provider full names and NPIs match, this warning is not shown and the merge is completed immediately upon clicking Yes from Step 4.
![](images/providerMergeNoMatch.png)6. Once the merge is complete, a *Done* message appears.

After a successful merge, the *Provider to merge into* (Step 1) is reassigned wherever the  *Provider to merge from* (Step 2) was assigned throughout the entire database (including, but not limited to adjustments, appointments, claims, patients, payments, procedures, etc.). The *Provider to merge from* is viewable from the Providers List when checking *Show Deleted*.

The *Provider to merge from* assignment is not replaced in [Public Health Screening](publichealthscreenings.html) or [LabCorp HL7](hl7labcorp.html) lab orders.