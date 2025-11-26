Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Merge Referrals

The Merge Referral tool can be used to merge duplicate referrals.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Merge Referrals.

![](images/referralMerge.png)

Merging referrals is permanent and cannot be undone. The *Referral Merge* [Security Permission](permissions.html) is required to run the tool.

1. Select the *Referral to merge into*. Click **Change** to choose the referral that will remain from the [Referral List](referralsetup.html).
2. Select the *Referral to merge from*: Click *Change* to choose the referral that will merge into the above referral.
3. Click **Merge**.
4. A warning indicates results are permanent and cannot be undone. Click **Yes** to proceed with the merge.
![](images/medicationMergeConfirm.png)5. An additional warning is shown if referral information (referral names, titles, and *Is Person*/*Is Doctor*) does not match. The warning indicates which fields do not match, the total patients attached to the *Referral to merge from*, and that the change is irreversible. Click **Yes** to confirm the merge. Click **Cancel** to stop the merge.
   * If the referral names, titles, and is person/is doctor settings all match, this warning is not shown, and the merge is completed immediately upon clicking Yes from Step 4.
![](images/referralMergeNoMatch.png)6. Once the merge is complete, a *Done* message appears.

After a successful merge, the *Referral to merge into* (Step 1) is assigned to all patients with the *Referral to merge from* (Step 2). The *Referral to merge from* is also removed from the [Referral List](referralsetup.html).