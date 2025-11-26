Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Enter Treatment

Chart procedures for a patient using the Enter Treatment area.

In the [Chart Module](chart.html), select the **Enter Treatment** tab.

![](images/entertreatment.png)

Planned treatment, treatment that is referred out, or existing treatment (done at your office or another location) can be charted. Entered treatment displays on the [Graphical Tooth Chart](graphicaltoothchart.html) and in Progress Notes.

![](images/YouTube_PlayButton_15px.png) See our video: [Clinical Charting 1: Entering Treatment Webinar](https://youtu.be/1muCgXGk2f0).

**Tooth Surface Buttons (B/F, V, M, O/I, D, L):** Click a button to populate a surface in the box above. To remove an entry, click the button again. Multiple surfaces can be selected. The box itself cannot be edited.

* Open Dental uses V to indicate a Class 5 location along the gingival margin of the B or F.
* The V identifier is drawn separately on the tooth chart. There is no corresponding lingual Class 5 indicator.
* V is not one of the surfaces allowed when submitting to insurance, so it is converted to B or F on all claims.
* V is also not counted as a surface for Auto Codes.
* Do not count a V as another surface additionally to B or F because no line angles were crossed. For example, a patient may have a two-surface DBV, which would be automatically converted to a DB on outgoing claims.
* Surfaces are handled slightly differently in [Canada](canada.html).

**Entry Status:** Determines the procedure status. Set status colors in [Definitions: Chart Graphic Colors](definitionschartgraphiccolors.html).

* TreatPlan (default): For treatment that is recommended, but not yet complete. Procedure(s) have an entry date and a fee. If added to the active treatment plan, the status is *TP*. If added to inactive plans only, the status is *TPi*. If no treatment plan is selected, the procedures are added to the active plan.
* Complete: For work that is already completed. Procedure(s) have a fee and are immediately billed to the Account.
* ExistCurProv: For treatment that was done in your practice prior to using Open Dental. Procedure(s) have no fee.
* ExistOther: For treatment that was done by another provider, either before the patient came to your practice, or because they were referred out for treatment and completed. Procedure(s) have no date and no fee.
* Referred: For treatment the patient needs, but will be done at another office. Once the work has been completed, change the procedure status to Existing Other (EO). Referred procedures usually have the date of the referral, but no fee. For more information, see [Referrals](referrals.html).
* Condition: For charting conditions or watches. See the following Entering Treatment, Conditions and Diagnoses section for details.

**Date**: The date assigned to procedures when charting, regardless of Entry Status. Check **Today** to insert the current date. To use a different date, prior to entering treatment, uncheck Today and enter the procedure date.

**Diagnosis (optional):** One diagnosis can be set per procedure. Diagnoses are not displayed on the Graphical Tooth Chart. Customize options in [Definitions: Diagnosis Types](definitionsdiagnoses.html). To chart diagnoses separate from proposed treatment, use the Condition (Cn) entry status. See the following Entering Treatment, Conditions and Diagnoses section for details.

**Prognosis (optional)**: One prognosis can be set per procedure. Customize options in [Definitions: Prognosis](definitionsprognosis.html).

**Priority (optional)**: Assign a [Treatment Plan](treatmentplan.html) priorty to the procedure. Affects the order of the procedure in active and inactive Treatment Plans. Used to prioritize treatment planned procedures. Customize options in [Definitions: Treat' Plan Priorities](definitionstreatplanpriorities.html).

Use one of the following options to chart treatment:

* **Procedure List**: Select a code from the [Procedure Codes](procedurecodes.html) list.
* **Procedure Buttons**: These buttons are associated with multiple codes or Auto Codes and organized by category. To customize options see [Setup Procedure Buttons](procedurebuttons.html).
* **Type Proc Code**: Manually type the code then click **OK**. If a D code, entry of the D is optional.
* **Quick Buttons**: These buttons are associated with a single code and designed to quickly chart fillings and sealants. Customize options in the [Quick Buttons](quickprocedurebutton.html) area of Setup Procedure Buttons.

**Treatment Plans:** Check this box to show treatment plan information in place of the Progress Notes. See [Treatment Plan in Chart](charttp.html). This check box only shows when *Is TP View* is also selected for the Chart View on the Show tab ([Show Chart Views](showtabchart.html)).

## Entering Treatment

Entering by treatment area:

* When entering a procedure code for one tooth, select the tooth from the graphics.
  + Select multiple teeth if entering the same procedure for each tooth.
* When entering a procedure for a tooth range, select the range of teeth from the Graphical Tooth Chart. The selected teeth are automatically assigned to the treatment area of the selected procedure code .
* When entering a procedure for a quadrant, select any tooth in that quadrant. The charted procedure code is automatically assigned to the correct quadrant.
* When entering a procedure for an arch, select any tooth in that arch. The charted procedure code is automatically assigned to the correct arch.

By default, procedures are charted with a status of *Treatment Planned*. Double-click a procedure to manually change the procedure status, or before charting treatment, change the radio button in the Enter Treatment tab to the correct status.

Treatment Planned procedures default to the provider and clinic for the patient's first appointment of the day, if it exists.

The procedure is added to Progress Notes and shows on the tooth chart (if applicable). If information is missing, the [Procedure](procedureedit.html) opens. Double-click a procedure to edit it.

**Conditions and Diagnoses**: There are two possible workflow options for charting diagnoses (e.g., caries).

* Attach a diagnosis to the procedure being treatment planned:
  1. Set the Entry Status to *TreatPlan* (or *Referred* if the treatment is being done outside the office).
  2. Select a diagnosis.
  3. Select the treatment area as needed.
  4. Chart the procedure code.
  The diagnosis is now attached to the charted treatment. If the diagnosis needs to be changed or was not attached at the time the treatment was charted, double-click the procedure to open the Procedure Edit window. A diagnosis can also be attached here.
* Enter diagnoses as Conditions, separate from any planned restorations:
  1. Set the Entry Status to *Condition*.
  2. Select a diagnosis from the list.
  3. Chart a watch procedure.

## Change Code Recommendations

If using [Auto Codes](autocode.html), users may be prompted to change a procedure code if Open Dental has recognized a mismatch.

![](images/autocodeRequired.png)

To set whether or not staff is required to accept Auto Code suggestions set *Require use of suggested auto codes* in [Preferences](preferences.html).