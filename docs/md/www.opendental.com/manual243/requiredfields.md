Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Required Fields

Use Required Fields to prompt staff to complete certain fields when entering patient information or insurance payments.

In the [Main Menu](mainmenu.html), click Setup, Required Fields.

![](images/requiredFields.png)

Examples:

* Birthdate cannot be blank.
* Gender cannot be unknown.
* Student status must be chosen if patient age is greater than 18 or less than 26.
* Validate the number of digits in a Medicaid ID.

How it works:

* When staff enters patient information or an insurance payment, required fields are indicated with an asterisk (\*).
* If required fields are incomplete when staff saves the window, a notification message displays with two options: return to the window to complete information or proceed without completing information.
* When required fields are left incomplete, the Audit Trail logs an entry.

Some fields are filled in automatically or do not trigger a popup.

* StudentStatus: Only triggers a popup for a new patient. If the required field is ignored, a non-student status is automatically assigned.
* PrimaryProvider: Primary providers are automatically assigned and do not trigger a popup, unless *Primary Provider defaults to Select Provider in Patient Edit and Add Family* is checked in [Preferences](preferences.html).
* BillingType: Does not trigger a popup.
* State: State cannot be blank and requires a valid state abbreviation under Lists, [State Abbreviations](stateabbreviations.html).

## Mark Fields as Required

**Field Type**: Select which area to apply required fields to.

* PatientInfo: Mark fields as required on the [Edit Patient Information](patientedit.html) or [Add Family Window](familyadd.html).
* InsPayEdit: Mark fields as required on the Edit Insurance Payment window. See [Finalize Insurance Payment](claimpayfinalize.html).

**Available fields**: Lists all fields that can be marked required. Field options vary depending on the Field type selected and which options are enabled in [Show Features](showfeatures.html).

**Right Arrow**: Select item(s) from the Available Fields list and click to add to Required Fields. Ctrl + click to select multiple items at once. Items are removed from th Available Fields list.

**Left Arrow**: Select item(s) from Required Fields and click to remove from Required Fields. Ctrl + click to select multiple items at once. Items are added back to the Available Fields list.

**Required fields**: Lists all fields currently marked required for all field types. Click on a field to view a description of the requirement under the grid.

**Conditions**: (optional) Add specific conditions that require a field to be completed. An X displays in the Conditions column. Double-click an existing condition to edit.

* **Add**: Select a required field and click to add conditions. The Edit Required Field Condition window opens.
* **Delete**: Select an existing condition and click to delete the condition from the required field.

![](images/requiredFieldsEdit.png)

Edit Required Field Condition window:

* **Condition Type**: Select the data that affects the required field.
* **Operator**: Set how the value corresponds to the condition.
* **Condition Value**: Set the value condition type. Multiple conditions can be added to a single Required Field.
* **Delete**: Click to delete the selected condition.

## Validation of Medicaid ID and State

If Medicaid is turned on in Show Features, the MedicaidID and MedicaidState fields list as Available Fields. In addition to designating the fields as required, offices can also turn on validation that ensures the number of digits in the Medicaid ID is correct for the entered state.

1. Add *MedicaidState* to the Required Fields list.
2. Highlight *MedicaidState*.
   ![](images/requiredFieldsMedicaid.png)
3. Check *Validate the number of digits in MedicaidID to be correct for that state* to turn on validation. When checked, a Medicaid ID Length column also shows in the state abbreviation list. See [State Abbreviations](stateabbreviations.html) to enter the number of digits in a Medicaid ID by state.

How Medicaid ID validation works:
 When user saves the Edit Patient Information window, Open Dental checks if the number of digits entered for Medicaid ID matches the Medicaid ID Length entered for the state in the State Abbreviations list. If not, the user is warned that required fields are missing or incorrect. If they return to the window, a red exclamation point shows next to the State field. Hovering over the field shows a message that indicates the required ID length.

![](images/requiredFieldsMedicaidID.png)