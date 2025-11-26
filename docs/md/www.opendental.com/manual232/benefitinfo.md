Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Benefits

Custom benefits can be entered on an insurance plan to calculate procedure estimates and insurance remaining estimates.

In an [Insurance Plan](insplan.html), at the lower right, is the Benefit Information.

![](images/benefitOverview.png)

Benefits apply to all subscribers on the plan. If different subscribers have different benefits, create different plans. If a user changes benefits for a plan, all [Claim Procedures ( claimprocs )](claimprocedure.html) estimates also change, including those on current and sent claims. Sent claims need to be recalculated before changes affect claim estimates.

To change or view benefits, double-click anywhere in the grid. To change benefit information, the *Insurance Plan Edit* security permission is required.

![](images/benefitsEdit.png)

There are two view options for the Edit Benefit window.

* **Simplified View** (default): This view allows quick data entry and organizes benefit information by field. See below for a description of each field.
* **Row view**: If Simplified View is unchecked, benefits are represented by rows. See [Edit Benefits - Row View](benefitinforowview.html). This is useful if typical insurance categories are not used (e.g., are in a country other than the U.S. or Canada).

**Benefit Year**: (This area is the same between Simplfied View or Row View.) The renewal date used to calculate benefits and the current benefit year. It applies to all benefits in the window.

* If plan follows calendar year (starts in January; ends in December): Check this box.
* If the plan follows a service year (starts in a month other than January): Uncheck the box, then enter the two-digit month when benefits renew in the Month field (e.g., October = 10, February = 02).

Note: Every benefit is stored as a row in the database. This format matches how electronic benefits from insurance companies are received.

## Simplified View

The fields that show in Simplified View are described below. Click in a field to enter values. Leaving a box blank is different than entering a zero; blank means unknown.

Note: [Insurance Categories](inscatssetup.html) must have at least one of each e-benefit category present (Accident, Crowns, Diagnostic, Endodontics, General, MaxillofacialProsth, OralSurgery, Orthodontics, Periodontics, Prosthodontics, Restorative, RoutinePreventive, and DiagnosticXRay).

**Annual Max**: The maximum annual amount insurance will pay in benefits per individual or family. If left blank, [Insurance Remaining Calculations](insremainingcalc.html) cannot be done.

* Individual: Enter the annual max amount for the individual.
* Family: Enter the annual max amount for the entire family. Leave blank if If there is no *Family Annual Max* for the plan.

**General Deductible**: The amount the individual or family pays out of pocket before the insurance company will begin to pay. Applies to procedures in any Insurance Category. See [Insurance Categories](inscatssetup.html) for details. Resets at the start of the new service or calendar year.

* Individual: Enter the deductible amount for the individual. If the Family deductible has already been met, the individual deductible will not be applied.
* Family: Enter the deductible amount for the entire family. If the Family deductible has been met by a family member or combination of family members, individual deductibles are no longer applied. Leave blank if there is no *Family Deductible* for the plan.

Note: The deductible is applied before the insurance estimate is calculated. For example, if there is a $125 filling covered at 80% and the individual deductible is $50, the insurance estimate is $60 ($125 - $50 deductible x 80%) and the patient portion is $65 ($50 deductible + $15 amount left over after insurance).

**Categories**:

* Percentages: The percent covered per procedure for each category. For quick entry of the same percentage amount, enter the amount under Quick% and it automatically populates the associated fields to its left.
* Deductibles (if different): The deductible per individual or family for a specific category, if it is different than the General Deductible. Zero indicates there is no deductible at all. If blank, the General Deductible is used. See [Deductibles](deductibles.html).
* Waiting Periods (if applicable): The number of months a patient must wait before insurance will cover a procedure. An effective date must be entered in the Insurance Plan for waiting periods to calculate.

**Fluoride Through Age**: Creates an age limitation for fluoride procedures. Bases estimates off codes entered in Insurance Frequencies. 0 is not a valid entry.

**Sealants Through Age**: Creates an age limitation for sealant procedures. Bases estimates off codes entered in Insurance Frequencies. 0 is not a valid entry.

**Frequencies**: Enter Frequency Limitations for Bitewings, Pano/FMX, and Exams. Select a frequency type from the dropdown then enter a value in the text box. If 2 is entered in the text box, the dropdown options create the following frequency limitations:

* Every # Years
  + One procedure covered every two years. Uses rolling year (e.g., if covered 12/13/2023, will not be covered again until 12/14/2025).
* # Per Benefit Year

+ Two procedures covered within the benefit year. Uses the selected benefit year, i.e., Calendar or Month.

* Every # of Months

+ One procedure covered every two months.

* # in Last 12 Months
  + Two procedures covered in the last 12-month period. Uses the last 12 months from today (e.g., Rolling Year, Rolling Benefits)

Click **More** to add [Frequency Limitations](insfrequencylimitations.html) for additional [Code Groups](codegroups.html).

For each procedure code or additional Code Group with a frequency limitation, a row displays in the Family Module, Insurance Plan area for reference.

**Ortho**: Enter orthodontic benefit information.

* Lifetime Max: The maximum orthodontic benefit. This is separate from the individual and family Annual Max above as long as the insurance category spans are set correctly. The correct setup (and default) is to have an Ortho span of D8000 to D8999 and to exclude that span from the General category.
* Percentage: The percentage per procedure that is covered. This affects insurance estimates.
* Ortho Through Age: Used with codes that fall into Ortho insurance category span. This affects insurance estimates. 0 is not a valid entry.

**Other Benefits**: Benefits that are specific to this insurance plan. Useful for incentive plans, or to override typical insurance percentages or amounts. See below for more information.

**Notes**: This is the same as the subscriber note on the Edit Insurance Plan window. Certain types of benefits that just affect the subscriber are not easily codified, so do not have a box. These types of benefits are just entered as subscriber notes.

## Other Benefits

![](images/benefitTypes.png)

There are different types of Other Benefits. These are discussed below. Only specific Other Benefit scenarios are functional. For more information, see, [Other Benefits](otherbenefits.html).

**ActiveCoverage**: Informational only. Not normally used. Used to show a patient has coverage, but without any specific information (e.g., percentage).

**Percentage (CoInsurance)**: Percentage insurance will cover of a certain procedure or category.

**Deductible**: Dollar amount the individual or family must pay before insurance coverage begins.

**CoPayment**: Informational only. Patient portion owed for a procedure. Copayments should be entered into a copay fee schedule instead. Any copays entered into insurance benefits are non-functional. See: [Fee Schedules](feeschedules.html) for more information.

**Exclusions**: Services that are not covered by insurance. These can be procedure categories or individual codes.

**Limitations**: Includes multiple limitation types such as maximums frequency or age.

**Waiting Period**: Time period after the insurance effective date the insured must wait prior to insurance covering a benefit.

## Benefit Hierarchy

Benefits are calculated one procedure at a time. Multiple benefits can apply to a single procedure code. If some benefits are of the same type, there is a hierarchy to determine which benefits affect insurance estimates.

1. Benefits applied to the specific procedure code.

![](images/benefitHierarchyProcCode.png)

2. Benefits applied to an [Insurance Category](inscatssetup.html) containing the procedure code. If the procedure is included in multiple categories, benefits for categories lower in the list take higher priority.

![](images/benefitHierarchyCat.png)
![](images/benefitHierarchyInsCat.png)

**Example:**

![](images/benefitHierarchyExample.png)

If D4910 is in both the General and Perio categories, the Perio benefit supersedes the General benefit, because the category is more specific (lower in the Insurance Categories list). If no other benefits existed for the procedure, insurance would cover the procedure at 80% Perio rate, not the 70% General rate.

Because there is a benefit specifically for D4910, this supersedes the benefits for any category. Even though D4910 is included in the Perio and General categories, the procedure will actually be covered at 100%.