Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HL7 Service

The HL7 Service is installed on a server to facilitate the interaction of HL7 messages with the Open Dental database as part of the [Generic HL7](hl7.html) Setup.

![](images/hl7ServiceManager.gif)

The HL7 Service is also installed as part of [LabCorp HL7](hl7labcorp.html) and [eClinicalWorks HL7](hl7ecw.html) setup.

HL7 services can be managed and installed from the [Service Manager](servicemanager.html).

A list will be populated by all installed OpenDentalHL7 services. As of version 12.4, multiple OpenDentalHL7 services can run on the same server to allow one server to host multiple customer databases. In order for each service to process messages for the correct database, a copy of the Open Dental application folder will have to be made and uniquely named. In the example above, three such folders were created in the following locations.

**C:\OpenDentalHL7\_DatabaseA**
**C:\OpenDentalHL7\_DatabaseB**
**C:\OpenDentalHL7\_DatabaseC**

Each of these folders have the exact contents of the Open Dental application folder with a unique FreeDentalConfig.xml file. The FreeDentalConfig.xml file is how each service will determine which database it is processing messages for. See the HL7 page for information about how a connection to the database is established using this configuration file.

To install a new OpenDentalHL7 service, simply hit the Add button. To modify an existing installed service, double-click on one.

![](images/hl7ManageService.gif)

Each service must have a unique service name, and the name must begin with *OpenDent*. In this example, OpenDentalHL7 was paired with the name of the corresponding database. Once a service name is chosen and the path to the correct OpenDentHL7.exe is entered, hit the Install button. If the install is successful the status will change from *Not installed* to *Installed, Stopped*. Hit the Start button and once started the status will change to *Installed, Running*.

If the service does not start as expected, see Errors on the [HL7](hl7.html) page to troubleshoot.