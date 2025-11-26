Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ortho Setup

For offices seeing ortho patients, set up and enable ortho features used throughout Open Dental.

In the [Main Menu](mainmenu.html), click Setup, **Ortho**.

![](images/orthoSetup.png)

The preferences below affect options used for [Orthodontics](orthodontic.html).

![](images/youtubeLogo.png) See our [Ortho Playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCkTGQT-plH4ftvLX0lUpurW)

**Show Ortho button and tab in Chart Module**:

* Checked: Show the [Ortho](ortho.html) tab and [Ortho Chart](orthochart.html) button in the Chart Module.
* Unchecked: Hide the Ortho tab and Ortho Chart button in the Chart Module.

**Show Auto Ortho in Account Module**:

* Checked: Show the [Auto Ortho](orthoauto.html) tab in the [Account Module](account.html) and in the Ortho tab in [Edit Insurance Plan](insplan.html).
* Unchecked: Don't show the Auto Ortho tab in the Account Module or Ortho tab in Edit Insurance Plan.

**Show Auto Ortho information in the Ortho Chart**:

* Checked: Show patient ortho info from the Auto Ortho tab (PatOrthoInfo) in the upper right of the [Ortho Chart](orthochart.html).
* Unchecked: Don't show auto ortho information in the Ortho Chart.

**Mark claims as Ortho if they have Ortho procedures**:

* Checked: Automatically mark the *Is Ortho* box on the [Edit Claim - General Tab](claimtabgeneral.html) when creating a claim or preauthorization that includes an orthodontic procedure (within the orthodontic insurance category span).
* Unchecked: Don't automatically mark the box.

**Use the first ortho procedure date as Date of Placement**:

* Checked: Automatically insert the date of the initial orthodontic procedure (*Date Start* on the Auto Ortho tab) as the *Date of Placement* on the Edit Claim - General tab when creating a claim that includes an orthodontic procedure (within the orthodontic insurance category span).
* Unchecked: Don't automatically insert the date.

**Completing Debond procedure overrides months treatment**:

* Checked: Ortho months in treatment stops calculating when a debond procedure is set complete.
* Unchecked: Ortho months in treatment continues to calculate indefinitely.

**Default months treatment**: Set a default total treatment amount, in months, that shows on the Auto Ortho tab (Tx Months Total). If a patient's insurance plan is set to an ortho claim type of Initial Plus Periodic (Edit Insurance Plan - Ortho tab), this amount is used to determine the end date for generating periodic orthodontic claims using [Ortho Auto Claims](orthoautoclaim.html).

**Show Ortho Chart in appointment options**:

* Checked: Show a Go To Ortho Chart option when user right clicks on an appointment box. This box is checked by default if data exists in the Ortho Chart. Customize the text in [Ortho Chart Setup](orthochartsetup.html).
* Unchecked: Do not show a Go to Ortho Chart option.

**Patient Clone**:

* Checked: Turn on [Clone](patientclone.html) options.
* Unchecked: Turn off Patient Clones options.

**Default Ortho Auto Proc**: Required if using the Auto Ortho Tool to generate claims. Set the default procedure code that will be used on the claim and sent to insurance. The default is D8670.auto, but users can select any procedure code. Click **[...]** to change.

Note:

* Only the first 5 digits of procedure codes are sent to insurance. The .auto portion of the procedure code is not sent to insurance. So while D8670.auto will show on the Edit Claim window, only D8670 is sent to insurance. Using a procedure code with .auto is optional, but doing so is useful to track codes used on auto-generated claims.
* The Default Ortho Auto Proc cannot be a banding procedure. This will prevent supplemental payments from being applied to the original claim.

**Consolidate Ortho Insurance Payments**:

* Checked: Block users from entering payments on claims created using the Auto Ortho Tool. If they attempt to do so, they will receive a message directing them to instead enter the payment as a supplemental payment on the initial procedure's claim (consolidating the payments).
* Unchecked: Allow users to enter payments on claims created using the Auto Ortho Tool.

**Ortho Chart Display Fields**: Click **Edit** to define the tabs and columns that show in the Ortho Chart. See Ortho Chart Setup.

**Ortho Hardware Specs**: Click **Setup** to add or edit [Ortho Hardware Specs](orthohardwaresetup.html).

**Ortho Prescriptions**: Click **Setup** to add or edit [Ortho Prescriptions](orthoprescriptionssetup.html).

**Ortho Placement Procedures**: Define which procedures can be considered as the initial orthodontic procedure. Determines which procedure will affect the *Date Start* on the Auto Ortho tab. If *Use the first ortho procedure date as the Date of Placement* is enabled above, also affects *Date of Placement* on claims. If no procedures are defined, Open Dental will attempt to use the first procedure within the code span D8000-D8999 as the initial orthodontic procedure.

* **Add**: Click to select a procedure from the Procedure Codes list.
* **Delete**: Click to remove the highlighted procedure.

**Ortho Case Procedures**: Enter the procedure codes for each category. If entering multiple codes, separate them with a comma. These procedures will be used in Ortho Cases. Enter a code in at least one category to enable the [Ortho Case](orthocase.html) feature.

* **Banding Codes**: Codes associated to procedures for placement date of orthodontic appliances.
* **Visit Codes**: Codes associated to procedures for periodic maintenance visits.
* **Debond Codes**: Codes associated to procedures for removal of orthodontic appliances.