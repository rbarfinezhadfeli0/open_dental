Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eCw Patient Demographics

For [eClinicalWorks](bridgeeclinicalworks.html) users, all patient demographic data originates in eCW and is passed to Open Dental. All synchronization is based on the patient ID.

Do not enter patient data in Open Dental. When patient demographic data is sent from eCW, it will automatically overwrite all data in Open Dental for the matching patient ID without any user interaction. If the patient ID does not yet exist, then a new patient is created in Open Dental.

Patients that have a blank first name or blank last name in eCW will not be imported into Open Dental. If a patient has a blank first name or blank last name and the data for that patient is passed into Open Dental from eCW, then Open Dental will place a message in the Event Log to let the user know that the patient was not imported.

If using Tight Integration, you cannot edit patient demographic data in Open Dental.

**Merging Patients**: To merge patients you must first merge patients in eCW. Then, immediately afterwards, merge the same two patients in the same order in Open Dental. See [Merge Patients](mergepatients.html). If patients are not merged in this manner, some information may not properly bridge between eCW and Open Dental.