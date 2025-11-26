Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claimproc Provider

Assigning a provider on a claim procedure is useful for income allocation purposes.

In [Claim Procedures ( claimprocs )](claimprocedure.html), at the left, is a Provider dropdown.

![](images/claimProcProv.png)

Some offices want to associate a procedure's insurance income to a general provider, yet retain the treating provider association on the procedure itself. The purpose of this would be to allocate the insurance income to the general provider instead. To do so, users need to be able to change the provider on a claim procedure (claimproc) without changing the provider on the procedure. To make this work, there are specific setup and workflow steps to follow. They are outlined below.

**For Example**:

* Dr. Jones is the treating provider on an orthodontic procedure for Office A.
* Office A wants the insurance payment for this procedure to be associated to a provider called Ortho, not Dr. Jones.

**Warning**: In most scenarios, the provider on the [Claim Procedures ( claimprocs )](claimprocedure.html) matches the provider on the associated procedure so that production and income match. In fact, when a procedure's provider is changed, by default the matching claim procedure's provider also changes. It is possible to have mismatched providers, but there are issues users need to be aware of and additional work involved.

* Be extra diligent to prevent accidental provider mismatches. Any time a user changes a procedure's provider and wants the claim procedure provider to match, it must be changed manually once a procedure is attached to a claim
* Allowing a mismatch will mean that production, write-off estimates, and insurance income on a procedure might not match in reports when run for specific providers.
* Until claim procedures are attached to a claim, the claim procedure provider will always match the procedure provider. This is by design to prevent accidental provider mismatches.

## Instructions

**Setup**:

1. Disable  *Changing treating provider updates Claim Proc provider* in [Preferences](preferences.html) .
2. For users who are allowed to change the provider on a claim procedure, assign the security permission *Claim Procedure Provider Edit When Attached to Claim*.

**Change the Provider**: For this to work, each claim procedure must already be attached to a claim.

1. From the Account Module, double-click the [Claim](claimedit.html) the procedure is attached to.
2. Double-click the procedure to open the [Claim Procedure](claimprocedure.html).
3. Select a provider from the dropdown or click **[...]** to choose from a pick list.
4. Click **OK** to save.

**Audit Trail**: Any time the provider is manually changed on a claim procedure attached to a claim, a log entry will be added to the [Audit Trail](audittrail.html) for security permission *ClaimProcClaimAttachedProvEdit* that states the procedure code, a short description of the carrier, the old provider abbreviation, and the new provider abbreviation.

## Troubleshooting

**Claim procedure provider changes are being logged in the audit trail, but the provider is being reset after clicking OK on the Procedure Info window.**

If the Claim Procedure window was accessed from [Procedure Info](procedureedit.html), instead of the claim, when *Changing treating provider updates Claim Proc provider* is enabled in [Preferences](preferences.html), the Claim Proc provider is updated to match the procedure (i.e., treating) provider when clicking OK to exit the Procedure Info window. To prevent this, disable the *Changing treating provider updates Claim Proc provider* preference.

**Claim procedure provider changes are not being logged in the audit trail, and the provider is being reset after clicking OK.**

Claim Proc Providers can only be changed on Claim Procs attached to claims or preauthorizations, not estimates. Provider changes made before the procedure is attached to a claim are reverted to match the treating provider on the procedure.