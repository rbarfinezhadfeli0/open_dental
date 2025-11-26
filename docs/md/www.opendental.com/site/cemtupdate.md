Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

CEMT Update Databases

Databases connected to the [Central Enterprise Management Tool ( CEMT )](central.html) are usually the same version of Open Dental for full functionality.

## CEMT Database

The version of the CEMT itself needs to be updated from time to time.

1. Launch Open Dental from the server and select a connected database.
2. Update to the desired version. See [Update](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7update.html).
3. Once update is complete, launch Open Dental and select the CEMT database (i.e., "dbcentral").
4. Click OK on the prompt to update the database.
5. Once finished, the registration key prompt can be closed.

## Connected Databases

To update the other databases, connect to them in the normal way through Open Dental proper and update them to the same version by clicking Help, then Update. Workstations in each office update as normal using the database setup files.

## Automatically Update all Databases

1. Update the CEMT database first.
2. Create a command line script to push out the Open Dental msi to each office and then run it.
3. Use the **IsSilentUpdate** [Command Line Arguments](commandline.html) parameter to update with no prompts.
4. Log the errors that may occur during updating by taking the exit codes from the running processes.