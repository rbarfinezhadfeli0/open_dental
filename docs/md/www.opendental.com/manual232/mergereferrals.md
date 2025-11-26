Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Referrals

The Merge Referral tool can be used to merge duplicate referrals.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Merge Referrals.

![](images/referralMerge.gif)

Merging referrals is permanent and cannot be undone. Users must have the *Referral Merge* security permission to run the tool.

1. **Referral to merge into**: Click Change to select the referral that will remain.
2. **Referral to merge from**: Click Change to select the referral that will merge into the above referral.
3. Click **Merge**.
![](images/medicationMergeConfirm.gif)4. A confirmation message will appear. Click **Yes** to proceed with the merge.
5. If the referral names, titles, and is person/is doctor settings don't match, a warning will be notify the user and inform them how many patients are assigned the *Referral to merge from*. Click **OK** to confirm the merge. Click **Cancel** to stop the merge.
   * If the referral names, titles, and is person/is doctor settings all match, this warning will not appear. The merge will be completed immediately upon clicking Yes on the first confirmation (Step 4).
![](images/referralMergeNoMatch.gif)6. A *Done* message will show once the merge is complete.

Once the merge is complete, the *Referral to merge into* (Step 1) is assigned to all patients with the *Referral to merge from* (Step 2). The *Referral to merge from* is also removed from the [Referral List](referralsetup.html).