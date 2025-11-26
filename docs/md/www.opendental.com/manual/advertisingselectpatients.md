Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Advertising - Select Patients

Use the filters and settings to create a list of patients to send Postcards.

In [Upload Postcard Recipients](postcardsupload.html), click **Select Patients**.

![](images/advertisingSelectPat.png)

Patients without an address are automatically filtered out of the list.

## User Query

![](images/advertisingSelectPatQuery.png)

* **User Query**: When checked, the window displays a Query box instead of filters. Enter the query, then click **Refresh** to see results.
  + User must have the *User Query* permission.
  + Queries must include a Select statement and include any table with a PatNum column.
  + The PatNum column cannot have an alias.
  + SET statements cannot be used and cause an error.
* **Favorites**: Click to select a query from [Query Favorites](queryfavorites.html).

## Filters

![](images/advertisingSelectPatFilters.png)

* **Clinic**: Filter by patients assigned to the selected clinic. Select *All* to show all patients.
* **Patient Age**: Enter the age range. The default is 1 to 110.
* **Hide patients with future appointments**: Check to exclude patients who have a scheduled appointment.
* **Exclude patients not seen since**: Check to exclude patients who have not been seen since the entered date.
* **Exclude patients seen since**: Check to exclude patients who have been seen since the entered date.

## Filters (continued)

![](images/advertisingSelectPatFiltersCont.png)

* **Preferred Contact Method**: Filter by preferred contact method as set in the [Edit Patient Information](patientedit.html) window.

  - Any: Patient has any method set as preferred contact method.
  - Email: Patient has email set as preferred contact method.
  - None: Patient does not have a preferred contact method set.
* **Patient Status**: Filter by patient status. Options include:

  - Patient
  - Non-patient
  - Inactive
  - Archived
  - Prospective
* **Patient Billing Type**: Filter by [Billing Type](definitionsbillingtypes.html).

## Available Patients

![](images/advertisingSelectPatSet.png)

The list of patients matching the filter criteria show. Select which patients should receive the communication.

* **Set All**: Mark all patients to send to.
* **Set Selected**: Set only the selected patients to send to.
* **Clear Selected**: Clear the Send list.
* **Clear All**: Clear all selected patients.
* **OK**: Click to continue to Postcards.