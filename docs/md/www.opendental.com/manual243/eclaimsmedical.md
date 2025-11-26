Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Medical E-Claims

When sending [Medical Insurance](medicalins.html), review the following to ensure claims are accepted.

## Insurance Plan

On the [Insurance Plan](insplan.html), Plan Info Tab, check the *Medical Insurance* box. This is used for medical and institutional claims, and controls whether claims go out in dental format or in medical/institutional format. Also set the Claim Form to UB04 or 1500, in case paper claims are printed.

![](images/medInsBox.png)

## Preferences

The preference, *Set medical claims to institutional when using medical insurance*, affects all insurance plans set as *medical* and determines whether claims are created as medical (837-P) or institutional (837-I). This option can be changed for individual claims.

## Claims

Create the medical claim in the [Account Module](account.html). If the patient has dental insurance and medical insurance, create the medical claim by selecting the procedure(s) and clicking the **New Claim** dropdown in the toolbar, then **Medical**.

![](images/newMedClaim.png)

The *Med/Dent* and *Claim Form* settings can be changed on the [Edit Claim](claimedit.html) window.

![](images/medClaimEdit.png)

## Clearinghouse

In [Clearinghouses](clearinghouses.html), set a default for dental and a separate default for medical/institutional. Dental clearinghouses cannot accept medical or institutional claims. If generating claim files from Open Dental and uploading them manually to Medicaid, set up a clearinghouse to specify the Claim Export Path. The format for dental claims can be 4010 or 5010, and can be freely switched as needed. Medical and institutional claim format are only 5010.

## Technical Details

When [Sending Claims](claimsend.html), send batches of claims to one clearinghouse at once. To determine the format, information is required from both the claim.MedType and the clearinghouse.Eformat. Neither alone is sufficient. Once messages are generated, they are archived in the etrans table in the database for later retrieval. These archived claims may be seen in the history list at the bottom of the Insurance Claims window. All 4 claim types (med5010, inst5010, dent5010, dent4010) show as "claim sent" in the archival.