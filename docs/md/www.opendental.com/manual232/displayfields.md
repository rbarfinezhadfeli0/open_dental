Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Display Fields

Customize which fields of information show in various areas, field size, and the order in which they show.

In the [Main Menu](mainmenu.html), click Setup, Display Fields.

![](images/displayFieldsCategories.png)

Categories:

**A/R Manager Excluded Grid**: For Transworld Systems (TSI) users only. Determines the columns in the TSI A/R Manager for excluded accounts. See [TSI Collections](tsicollections.html).

**A/R Manager Sent Grid**: For TSI users only. Determines the columns in the TSI A/R Manager for sent accounts grid.

**A/R Manager Unsent Grid**: For TSI users only. Determines the columns in the TSI A/R Manager for unsent accounts grid.

**Account Module**: Columns in the [Account Module](account.html), Patient Account grid.

**Account Patient Information**: Determines if a patient information area displays in the Account Module, and the fields that show. This area does not show at all if no fields are listed under Fields Showing.

**Appointment Bubble**: Information that shows in the popup bubble when hovering over an appointment in the schedule.

**Appointment Edit**: Columns in the Procedures on this Appointment grid in the [Edit Appointment](aptedit.html).

**Chart Patient Information**: Fields in the Chart Module, Patient Info area.

**Family Recall Grid**:Columns in the Family Module, Recall grid.

**Limited Custom Statement:** Columns in the [Limited (Custom) Statement](limited.html), Limited Statement Select window.

**Ortho Chart**: Columns in the lower grid of the Ortho Chart window. This setup is different than other display fields. See [Ortho Chart](orthochart.html).

**Outstanding Ins Report**: Columns in the [Outstanding Insurance Claims Report](reportoutins.html).

**Patient Information**: Rows in the Family Module, Patient Information area.

**Patient Search**: Determines fields available in the [Central Enterprise Management Tool ( CEMT )](central.html).

**Patient Select**: Columns in the [Select Patient grid](patientselect.html).

**Planned Appointment Edit**: Columns available in the Edit Planned Appointment window.

**Procedure Group Note**: Columns in the Procedures List when adding a [Procedure Group Note](procgroupnote.html).

**Recall List**: Columns in the [Recall List](recalllist.html).

**Statement Main Grid**: Columns in the StatementMain grid when [Statement Layout](statementsheets.html).

**Treatment Plan Module**: Columns in the Treatment Plan Module, Procedures list, on saved and printed Treatment Plans, and in the TreatPlanMain grid: [Treatment Plan Layout](sheetstreatplan.html).

Chart Module progress notes can be customized using the Show tab.

Double-click a category to customize the information that shows.

![](images/displayFields.png)

Select which fields to show by moving fields between Available Fields and Fields Showing. Highlight the fields then click the left or right arrows in the middle of the window.

* **Fields Showing**: All fields currently showing in the category.
* **Available Fields**: A list of fields that can be added to the category. Fields vary depending on the category. For a description of some fields, see Available Fields below.
* **Set to Default**: Return all Fields Showing to the default. This removes any fields that have been added.

Double-click on a Fields Showing field to change its properties.

![](images/displayFieldEdit.png)

* **Internal Name**: The name of the field in Open Dental code. This value cannot be changed.
* **New Description**: The label that identifies this field in the interface.
* **Minimum Width**: A fixed minimum column width based on the New Description length.
* **Column Width**: The maximum allowed width of the column. This is designed to allow the Language translation feature to work better when foreign words are longer.

To change the order of fields, click the **Up / Down** arrows.

## Available Fields

Most fields that list under Available fields are self explanatory. Below are a few that need additional explanation.

* **Admit Date**: Used in Chart Patient Information and Patient Information. Displays the Admit Date as entered in [Edit Patient Information: Hospitals Tab](patientedithospitals.html).
* **Allowed**: Used in the Treatment Plan Module. The PPO fee for PPO plans or the allowed fee for out of network plans.
* **Appt**: Used in the Treatment Plan Module. Displays an *X* if the procedure is attached a scheduled appointment. Displays a *U* if the procedure is attached to an appointment on the Unscheduled List. Displays a *P* if the procedure is attached to a Planned Appointment.
* **Appointment Module Note**: Note text from [Patient Appointments](apptspatient.html).
* **ABC0**: Used in Chart Patient Information and Patient Information. Indicates the patient's credit rating or other personal attributes discreetly in the Patient Information grid.
* **Birthdate**: When used in the Family Module or Chart Module, this displays as a masked date (e.g., xx/xx/xxxx) if the *Mask patient date of birth* preference is enabled. When masked, a user with the *Patient Birthdate View* can right-click a birthdate to view it.
* **Broken Appts**: Used in Chart Patient Information. Displays the number of broken appointments a patient has. The count is based on the broken appointment procedure (D9986) if it exists in the Procedure Code List, or if it doesn't exist, adjustments with a broken appt type.
* **Cat% UCR**: Used in the Treatment Plan. Displays the UCR fee for the procedure, regardless of which insurance type is selected in the insurance plan.
* **Clinic**: Used in multiple categories. The clinic abbreviation.
* **ClinicDesc**: Used in Account Patient Information and Chart Patient Information. The clinic description set.
* **Date Bal Began**: Used in the AR Manager Sent, Unsent, and Excluded Grids. Date a patient's balance began.
* **Days Bal Began**: Used in the AR Manager Sent, Unsent, and Excluded Grids. How many days ago a patient's balance began.
* **Discount Plan**: Used in the Appointment Bubble. Adds the name of the patient's [Discount Plan](discountplans.html).
* **Discharge Date**: Used in Chart Patient Information and Patient Information. Displays the Discharge Date as entered in [Edit Patient Information: Hospitals Tab](patientedithospitals.html).
* **DPlan**: Used in the Treatment Plan Module. Indicates the discount amount when the patient has a discount plan.
* **Estimated Patient Portion**: Used in the Appointment Bubble. Estimated patient portion for attached procedures. (patient portion = gross production - estimated insurance write-offs + adjustments - insurance estimates).
* **Insurance Color:**Used in the Appointment Bubble. Displays primary and secondary insurance carriers with a colored background as set in the [Carriers](carriers.html) window.
* **Invoice Number:** Used in the Patient Select. Invoices automatically generate a unique invoice number. Use the invoice number to search for a patient.
* **InvoiceNum**: Used in the Statement Main Grid. Invoices automatically generate a unique invoice number to show on invoices.
* **Last Proc**: Used in AR Manager Sent, Unsent, and Excluded Grids. Date of last completed procedure for the family.
* **NetProduction**: Used in Appointment Bubble. Net production of procedures attached to the appointment (net production = gross production - estimated insurance write-offs - adjustments attached to procedures). See [Production Totals](productiontotals.html).
* **Pat Fields**: Used in Account Patient Information, Chart Patient Information, and Patient Information. Adds all [Patient Fields](custompatientfields.html).
* **Patient Portal**: Used in Chart Patient Information. Indicates if patient has been granted access to the Patient Portal. Double-click this field to [Grant Access](portalaccess.html) or generate new passwords.
* **Pat Restrictions**: Used in Patient Information. Lists restrictions associated to the selected patient (e.g., appointment scheduling).
* **Preferred Pronoun**: Used in Patient Information and Chart Patient information. Displays the Preferred Pronouns set for the patient in [Edit Patient Information](patientedit.html). If no pronouns are set, displays *None*, regardless of the patient's selected gender.
* **Referral**: Used in the Patient Information area. Indicates when a patient has a referral source (to, from, or custom). The label for *custom referrals* is determined by the New Description text. The Referred From and Referred To labels cannot be changed.
* **Referral From With Phone**: Used in the Appointment Bubble. Indicates when patient has a referral from source and the referral source's phone number (if listed in the referral).
* **Referral To With Phone**: Used in the Appointment Bubble. Indicates when patient has a referral to source and the referral source's phone number (if listed in the referral).
* **Signed**: Used in the Account Module and Limited Custom Statements. Indicates when an item (i.e., procedure) has been electronically signed .
* **SS#**: When used in the Family Module, this displays as a masked number (e.g., xxx-xx-1234) if the *Mask patient Social Security Numbers* preference is enabled. When masked, a user with the *Patient Social Security Number View* permission can right-click to view the full number.
* **Tax Est**: Used in the Treatment Plan Module. Displays the tax estimate for treatment planned procedures marked as *Auto Tax*.
* **Tobacco Use**: Used in Chart Patient Information. Indicates a patient's tobacco use history (up to three of the most recent assessments). Double-click to open the Tobacco Use window and assess status. See [EHR Tobacco](smokingenter.html).
* **Specialty**: Used in Chart Patient Information. Used for differentiating patient clones.
* **Verify Insurance**: Used in the Appointment Bubble. Displays *Verify Insurance* if the insurance plan for the patient needs verified.