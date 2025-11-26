Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Update Provs on Future Appts

The Update Provs on Future Appts tool is useful if provider schedules or operatories have changed and scheduled appointments need to be updated.

In [Operatories](operatories.html), double-click an operatory. In the Edit Operatory window, at the bottom, is an **Update All** button.

![](images/updateProvButton.png)

The Update Prov on Future Appts tool changes the provider, hygienist, and clinics (if applicable) on all future appointments. This is useful when you change an operatory's provider or hygienist, or after a final conversion. It follows typical provider logic.

* If [Schedules](schedule.html) are set up, the scheduled providers will be used.
* If schedules are not set up, the providers assigned to the operatory will be used.

## Run the Tool

Before running the tool:

* For each operatory, make sure the operatory provider and hygienist are set correctly. See [Operatories](operatories.html).
* If using schedules, ensure the provider is assigned to the correct operatories under Setup, Schedules.

Click **Update All**. When the warning prompt appears, click **Yes** to start running the tool.

![](images/updateProvFutureApptsWarning.png)

A Done message will indicate when the tool is finished running. Click OK to close.

Note:

* Running this tool will update the provider and hygienist on every future appointment in the operatory. To only change provider/hygienist on individual appointments, see [Edit Appointment Window](aptedit.html) instead.
* This tool will not remove the *Is Hygiene* flag from the appointment, even if *Is Hyg* is not checked in the operatory setup.
* This tool will not remove a Hygienist even if the operatory no longer has a Hygienist assigned, or a Hygienist is assigned to the operatory schedule.
* We recommend backing up your data before running the tool.
* The logged-on user must have the *Setup* and *Edit Appointment* permissions.
* This tool should be run after hours, as it may take a long time to run.

## After a Conversion

After a Final Conversion, future hygiene appointments may have the hygienist assigned as the primary provider. Once providers and operatories are setup, you should update appointment providers to match operatory providers.