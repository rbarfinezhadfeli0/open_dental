Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

LabCorp HL7 Definition

In the [HL7](hl7genericmsg.html) window, double-click the row for MedLab HL7 v2.3.

![](images/hl7labcorpmsgdefedit.gif)

There is one internal [LabCorp HL7](hl7labcorp.html) definition that exactly matches the LabCorp HL7 message structure (MedLab HL7 v2.3). The transfer mode will always be SFTP. Messages and segments can be viewed but not edited.

To enter or edit SFTP and OpenDental HL7 Server settings:

Check Enabled to activate editable fields.

Enter the HL7 Communication Options:

* **Sftp Server Address Port**: The server address, colon, port. Example: b2bgateway-staging.labcorp.com:20022
* **Sftp Server Results Directory**: Where on the server root directory the lab results can be found for import (typically results).
* **Sftp Username**:
* **Sftp Password**:
* **Lab Result Image Category**: Click the dropdown to select the folder in the Images module where imported lab results and embedded PDFs will be saved.

Enter the HL7 server name and service name.

See [HL7 Service](hl7servicemanager.html) for information about installing and naming the OpenDentalHL7 service.