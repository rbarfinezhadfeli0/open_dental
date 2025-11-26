Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Database Maintenance for Patient

The patient level Database Maintenance tool checks the database for improper settings, inconsistencies, and corruption for a single patient.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Database Maintenance Pat.

![](images/databaseMaintenancePat.png)

This tool is useful for large offices that cannot run a full database maintenance fix during regular office hours.

Also see: [Database Maintenance](databasemaintenance.html).

The tool is divided into three tabs.

* **Checks**: Used to select methods to resolve issues. Only patient-specific methods display.
* **Hidden**: Displays methods marked as hidden. This can be useful for methods an office doesn't use.
* **Old**: Displays methods no longer needed. Methods can still be run from this window, but only do so if instructed by Open Dental Support as they can be unnecessary and time consuming.

**Patient**: Defaults to the patient currently selected. Click **[...]** to select a different patient.

The Patient Specific Database Checks grid is comprised of a list of methods. Each method is designed to resolve a specific problem.

* Highlight the methods to perform or click **None** to deselect all methods. When no methods are selected, all database methods will run.
* If an X shows in the Breakdown column, double-click to see a breakdown of results.

**Show me everything in the log**: Check to include a detailed results log when checking/fixing. Uncheck to show a truncated version of the results.

**Check**: Click to run database checks and display results.

**Fix**: Click to run database checks and fix any errors that do not require a manual fix.