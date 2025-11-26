Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Update Provs on Future Appts

The Update Provs on Future Appts tool is useful if provider schedules or operatories have changed and scheduled appointments need to be updated.

In [Operatories](operatories.html), double-click an operatory. In the Edit Operatory window, at the bottom, is an **Update All** button.

![](images/updateProvButton.png)

The Update Prov on Future Appts tool changes the provider, hygienist, and clinics (if applicable) on all future appointments. This is useful after a final conversion or when an operatory's provider or hygienist is changed. This tool uses the following logic:

* If providers are assigned to [Schedules](schedule.html), the scheduled providers are used.
* If providers are not assigned to schedules or schedules are not set up, the providers assigned to the operatory are used.

See [Schedule Setup Examples](schedulesetupexamples.html) for more information on setting up schedules and operatories.

## Run the Tool

Before deciding to run this tool, take the following into consideration:

* Running this tool updates the provider and hygienist on every future appointment in the operatory. To only change provider/hygienist on individual appointments, see [Edit Appointment Window](aptedit.html) instead.
* This tool adds or removes the *Is Hygiene* flag from appointments to match the *Is Hygiene* checkbox in [Edit Operatory](operatoryedit.html).
* This tool will not remove a Hygienist even if the operatory no longer has a Hygienist assigned, or a Hygienist is not assigned to the operatory schedule.
* We recommend creating a backup of the database before running the tool.
* The logged-on user must have the *Setup* and *Edit Appointment* permissions.
* This tool should be run after hours, as it may take a long time to run.

To run the tool:

1. Check operatory and schedule setup.
   * For each operatory, make sure the [Operatory](operatoryedit.html) provider and hygienist are set up correctly.
   * If providers are assigned to operatories in the schedule, ensure the correct providers are assigned to the operatory at the correct times.
2. Click **Update All**.
3. There is a warning of the following:
   * It is recommended to create a database backup before running the tool.
   * The tool may take a long time to run.
   * This tool can potentially change hundreds of appointments.
   * Changes made by the tool must be manually reversed.
![](images/updateProvFutureApptsWarning.png)4. To acknowledge the warning and proceed with running the tool, click **Yes**.
5. There is one of two messages:
   * If all appointments update successfully, there is a *Done* message once the process is complete. Click OK to close the message.
   * If any providers assigned to or scheduled in the operatory have a term date that conflicts with scheduled appointments, there is a warning.
     ![](images/updateProvTermDateWarning.png)
      Appointments up to the term date are updated. To finish updating appointments, update the operatory provider or schedule then run the tool again. Alternatively, remove the term date from the [Provider](providerseditwindow.html).

## After a Conversion

After a Final Conversion, future hygiene appointments may have the hygienist assigned as the primary provider. Once providers, operatories, and schedules are set up, run this tool to update providers on existing appointments to match operatory/scheduled providers.