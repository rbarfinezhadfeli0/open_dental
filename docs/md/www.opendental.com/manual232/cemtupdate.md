Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Update Databases

Databases connected to the [Central Enterprise Management Tool ( CEMT )](central.html) are usually the same version of Open Dental for full functionality.

## CEMT Database

The version of the CEMT itself needs to be updated from time to time.

Launch Open Dental from the server and select the CEMT database. Click Help, [Update](update.html).

## Connected Databases

To update the other databases, connect to them in the normal way through Open Dental proper and update them to the same version (Help, Update). Workstations in each office update as normal using the database setup files.

## Automatically Update all Databases

1. Update the CEMT database first.
2. Create a command line script to push out the Open Dental msi to each office and then run it.
3. Use the **IsSilentUpdate** [Command Line Arguments](commandline.html) parameter to update with no prompts.
4. Log the errors that may occur during updating by taking the exit codes from the running processes.