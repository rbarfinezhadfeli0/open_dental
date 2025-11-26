Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Claim - General Tab

In the Claim - General tab are fields for prosthetics, orthodontic work, claim referrals, and claim note.

In the [Claim Edit](claimedit.html) window, click the General tab.

![](images/claimEditGeneral.png)

**Crown, Bridge, or Denture**: For bridges, dentures, and partials, [Missing/Primary Teeth](missingteeth.html) must have been correctly entered in the Chart module. If **Replacement** is selected, a **Prior Date** is required. This information only shows on printed claims and is not sent electronically. To send this information electronically, enter on the [Procedure Info window](procedureedit.html) (Prosthesis Replacement, Original Date).

**Place of Service**: The service location. Defaults to the *Place of Service* on the last procedure in the claim (as set on the [Procedure - Misc Tab](proceduremisc.html)). If *Public Health* is enabled in [Show Features](showfeatures.html), the default is based on the site's default place of service ([Site List](sites.html)).

* Sent in dental 5010 e-claims only.
* Changing place of service here changes the Place of Service on all procedures on the claim.
* Usually set to *Office*. Exceptions: certain procedures to specific insurance carriers (e.g., Medicaid), sometimes when using clinics, medical claims.

**Accident**: Used to indicate that dental treatment was needed as the result of an accident.

* **Accident Related**: The type of accident. Shows on printed [Claim Forms](claimforms.html) in the following fields (depending on the value chosen): IsOccupational, IsNotOccupational, IsAutoAccident, IsNotAutoAccident, IsOtherAccident, IsNotOtherAccident, IsNotAccident, IsAccident, MedAccidentCode.
* **Accident Date**: Shows on printed claims and e-claims. On printed claims, shows in the *AccidentDate* field.
* **Accident State**: Shows on printed claims in the *AccidentST* field and on e-claims for auto accidents.

**Ortho**: Only used for ortho claims.

* **Is for Ortho**: Affects the *IsOrtho* and *IsNotOrtho* fields on printed claims. If the checkbox is marked, then Months Remaining is reported on e-claims (in Canada the ortho flag is sent electronically instead). This box is checked automatically if  *Mark claims as Ortho if they have Ortho procedures* is enabled in [Preferences](preferences.html) and the claim includes an orthodontic procedure.
* **Date of Placement**: Shows on printed claims and dental e-claims. On printed claims, shows in the *DateOrthoPlaced* field. If *Use the first ortho procedure date as Date of Placement* is enabled in [Preferences](preferences.html), the date of the first orthodontic procedure on the claim auto-populates the field and cannot be edited.
* **Months Total**: Enter total months sent in 5010 e-claims.
* **Months Remaining**: Shows on printed claims in the *MonthsOrthoRemaining* field if the value is greater than zero.

**Claim Referral**: Only enter a referring provider and referral number if it is required by the insurance carrier.

* **Referring Provider**: Click **Select** to attach a referring provider from an existing list, or add a new Referral. Click **None** to clear the field. Click **Edit** to enter notes or change information about the selected provider.
* **Referral Number**: Provided by the insurance carrier. Do not put NPI numbers here; NPI numbers must be entered on the Edit Referral window. If an NPI number is missing, it causes a claim rejection.

Note: For a referring provider on a claim, the Not Person checkbox must be unchecked and the Is Doctor checkbox checked. See [Referral List](referralsetup.html). The information is not sent otherwise.

**Claim Note**: A claim-level note that shows on printed claims and e-claims. This text box supports [Right-Click Options](rightclicktextboxes.html).

* The claim note and attachment ID Number together are limited to 400 characters when using the 5010 e-claim format, or 80 characters using the 4010 e-claim format.
* When printed using the ADA 2019 form, approximately only the first 253 characters are visible.
* When printed using the ADA 2024 form, approximately only the first 144 characters are visible.
* If a procedure in the claim has a default claim note, it is automatically copied to this field when the claim is created. If multiple procedures have default claim notes, each note is added. Enter a procedure's default claim note on the [Procedure Code](procedurecodeedit.html).

Note: There is also a procedure-level note, which only goes out on e-claims and medical [HCFA 1500 Claim Form](claimform1500.html). There is no place on a printed claim ADA form to put a procedure-level note. Add procedure level note in [Procedure Info](procedureedit.html).