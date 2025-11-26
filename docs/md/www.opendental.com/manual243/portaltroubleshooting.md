Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Portal Troubleshooting

Below is some general guidance if you experience issues with the [Patient Portal](portalhostedbyod.html).

**Internal server error. Please notify the dental office to call support or try again later.**

Solution: This occurs when a patient logs in and the eConnector service has a problem connecting to the database.

1. Check that the eConnector server is on.
2. Verify the eConnector service is running.
3. If the service is running and this message still occurs, it is likely an issue with the [eConnector Firewall](allowapplication.html).

**error code 104**

Solution: This occurs when, upon installation of the service, the first heartbeat hasn't registered with Open Dental servers. To troubleshoot:

1. Verify that the [eConnector](econnector.html) is running on the system where the service was installed. .
2. If the service is running, check the internet connectivity.
3. If you have anti-virus software running, try momentarily disabling it and try the link again. If this solves the issue you will need to make an exception in your anti-virus software for the port the eConnector Service is using (typically 25255). If this doesn't fix the problem contact us for further troubleshooting.

**Error Code 103**

Solution: The practice is no longer on Open Dental support and thus the registration key is no longer active or valid. Contact us to sign back up for support.

**Error: Your provider has not set up this patient to view the Continuity of Care Documents. Please contact your provider.**

Solution: This occurs when the patient tries to access the Care Summary (CCD) in the portal. Generally this only happens when the guarantor is viewing a dependent's care summary. It means that information required for the care summary is missing from the patient's chart (birth date, phone number, and address). Check that the patient in the care summary has birth date, phone number, and address fields filled out ([Edit Patient Information](patientedit.html)).

Another possible cause is that required code systems aren't imported. See [Importing Code Systems](codesystemimport.html) to import all coding systems.

**Login Failed**

Solution: The patient likely entered the wrong user name or password. Verify the patient's user name and reset the password if needed (see [Patient Portal Access](portalaccess.html)). The next time the patient logs in to the portal, they can change their password so it is unique and known only to them.

**CCD generation failed to load, please contact your provider.**

Solution: This happens when the patient tries to access the Care Summary but you have not imported code systems into your database using the Code System Importer. Import all code systems except CPT codes.

**File not found**

Solution: This can occur when patients attempt to access WebMail attachments or statements in the Patient Portal

* Make sure the eConnector is installed on the same computer as the OpenDentImages folder.
* If you have a single location: Check each office computer to see if any workstations can access the file locally. If one or more workstations can, but the server cannot, verify the path to the OpenDentImages folder that is being accessed. It should be the same folder for all workstations and the server. If different folders are used, images may be stored in different locations, thus requiring the different folders to be merged into one OpenDentImages folder.
* On the machine hosting the eConnector, go to the Services Console. Search for the OpenDentaleConnector, right-click and select properties. Select the Log On tab, then select This Account. Enter the username and password of the windows administrator. Restart the eConnector, then refresh the patient portal.
* If you have multiple locations: If using CEMT and/or connecting to separate locations via Middle Tier, it is possible the document was saved in a directory not accessible to your office (e.g., a directory at a different location). See [Middle Tier](middletier.html) for advice regarding the OpenDentImages folder and requirements for multiple location access.

**Error: CallMethod, unknown class: BlobFileSTs.DownloadDocument**

Solution: This occurs if updating Open Dental from a computer that does not have the eConnector installed. Run the setup file in the OpenDentImages folder. Make sure to disable the eConnector service on the workstation that performed the initial update if it was installed.

**Error: OnlinePassword in 'where clause'.**

Solution: The eConnector is on the wrong version. Run the setup file again on the eConnector host PC then try starting the eConnector.

**Error: Type Error: Cannot read property [property]'[property name]'.**

Solution: The eConnector may not have been updated during the last update. Rerun the setup file on the eConnector host PC and restart the eConnector.

**Error: The parameter 'address' cannot be an empty string. Parameter name: address.**

Solution: Set up a reply address. Click Setup, Manage, Email. Double-click to edit an existing email address or add a new one. In Outgoing Email Settings, make sure there is an email address in the *Email address of sender* field.