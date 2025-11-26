Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eRouting Setup

Set up customized eRouting definitions to meet the flow of different types of appointments when using ODTouch.

In [eRouting](erouting.html), click **Setup**.

![](images/eRoutingDefs.png)

* **Clinic**: Select the clinic assigned to the definition.
* **Use Default**: Check to use the default definitions instead of clinic specific definitions. Set default definitions by setting the clinic to *HQ Default*.
* **Add**: Click to add a new eRouting definition. The eRouting Def Edit Window opens. See the following section for details.
* **Duplicate**: Select an existing definition, then click to create a copy.

## eRouting Def Edit

In the eRouting Defs window, click **Add** to create a new eRouting Def or double-click an existing eRouting Def to edit.

![](images/eRoutingDefEdit.png)

**Description**: Enter a name for the eRouting definition.

**Actions**: The grid displays any actions and checklist items that are added to this eRouting Def.

* **Add**: Create a new action for the eRouting Def. Opens the Module Form Def Edit window. See the following section for additional details. Actions are added individually.
* **Up** / **Down**: Highlight an action in the list and click to reorder it.

**eRouting Triggers**: The grid displays any triggers that cause when this eRouting Def is used in ODTouch. If a patient or appointment meets the trigger criteria, the appropriate eRouting Def is started in ODTouch. If multiple triggers are met, users are prompted to select an eRouting Def.

* **Add Trigger Type**: Click the dropdown to select a trigger to start this eRouting Def. Click **Add** to include it. Each trigger type is added individually. Options include:

+ General: Used for patients that do not meet other trigger criteria.
  - Add: Add a General trigger.
+ Appointment: Use appointments as a trigger for patient criteria.
  - Add: Add appointments as a trigger without a specific [Appointment Type](appointmenttypes.html).
  - Add Appt Types: Add a specific appointment type as a trigger.
+ Billing Type: Use [Billing Type](definitionsbillingtypes.html) as a trigger for patient criteria.
  - Add: Add a specific Billing Type as a trigger.

To delete a Trigger, highlight it, then click **Remove**.

Click **Delete** to remove the entire eRouting definition. Click **Save** to keep changes.

## Module Form Def Edit

Click **Add** in the Actions area or double-click an action to open Module Form Def Edit.

![](images/eRoutingMobileFormDefEdit.png)

**Label Override**: The description of the action type that appears in the eRouting checklist in ODTouch. If no label override is entered, the Action Type name is used.

**Action Type**: Select from the dropdown to determine what action occurs in ODTouch when selecting the item in the eRouting Checklist. Options include:

* None: Do nothing on ODTouch.
* Perio Chart: Open [ODTouch: Perio](odtouchperio.html).
* Treatment Plan: Open [ODTouch: Treatment Plans](odtouchtreatmentplans.html).
* Payment Plan: Open [ODTouch: Payment Plans](odtouchpayplan.html).
* Chart Procedures: Open [ODTouch: Chart](odtouchchart.html).
* Imaging: Open [ODTouch: Images](odtouchimages.html).
* Complete Appointment: Complete the appointment.
* Take Payment: Open [ODTouch: Payment](odtouchpayment.html)
* Schedule Follow up: Open [ODTouch: Appointments](odtouchappts.html).
* ERX: Open [ODTouch: eRx](odtoucherx.html).
* Exam Sheet: Open an exam sheet. See [ODTouch: Exam Sheets](odtouchexam.html) for details.
* Consent Form: Open a consent form.
* Medical: Open [ODTouch: Medical Info](odtouchmedical.html).
* Checklist Item: Create a custom checklist item in the eRouting list. Items are just for reference and no additional action is taken in ODTouch.

**Default to Load**: Used for Exam Sheet and Consent Form action types. Select the default sheet to open when selecting the eRouting action. If no default is assigned to the action, a list of available sheets is shown when selecting the eRouting action in ODTouch.