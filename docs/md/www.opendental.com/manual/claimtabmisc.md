Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Claim - Misc Tab

Edit Denti-Cal information and other infrequently used fields for a claim from the Misc tab.

In the [Claim Edit](claimedit.html) window, click the Misc tab.

![](images/claimEditMisc.png)

**Correction Type**: In e-claims, this field corresponds to the Claim Frequency Code and is used to fix mistakes on e-claims that have already been sent. It was added for [Denti-Cal](dentical.html) direct integration but can be used for other carriers as well. There are three possible correction types.

* Original: Select this type for the first submission of any e-claims. Sends a value of 1.
* Replacement: Select this type to indicate this claim is being sent as a replacement for an earlier claim. Usually used after making corrections. Sends a value of 7. The carrier should ignore the original claim and instead use the new replacement claim. Carriers have their own policies as to whether they accept replacement e-claims and what kind of corrections they allow.
* Void: Select this type if an e-claim was sent entirely in error, then resend the e-claim to cancel the original claim. Most carriers do not support this correction type. Sends a value of 8.

To improve chances of acceptance, send Replacement and Void claims as soon as possible after the original claim is sent.

**Prior Authorization (rare)**: Typically used for medical claims. Shows on printed and e-claims. On printed claims, the number shows in the PriorAuthorizationNumber field.

**Special Program**: Only used for e-claims in the 5010 format. This is sent on preauthorizations when the value is set to something other than *none*.

**Default Claim Identifier:** A unique identifying number for each claim. Open Dental automatically generates this number. By default, the PatNum is used as the prefix. To select a different prefix, change the *Claim Identification Prefix* in [Preferences](preferences.html).

**Claim Identifier (CLM01)**: A unique identifying number for each claim. Open Dental automatically generates this number using the format PatNum/ClaimNum. It can be manually edited when creating the claim, but once the claim is saved it cannot be changed. It is used to match [ERAs](claimsERA835.html) to the original claim.

**Original Reference Num**: Required by insurance when voiding a claim or replacing a claim by setting the CLM05-3. This number is given by the insurance.

**Share of Cost Amount**: Rarely used. It is the sum of all amounts paid specifically to this claim by the patient or family. Sent in e-claims.