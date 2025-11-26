Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Modes - Local, Service, and Remote

See [API Specification](apispecification.html)

An API Mode is a way for a third-party application to connect to an Open Dental database. There are three types of modes available: Local, Service, and Remote. Which mode an application should use depends on how the application is developed. In some situations it is possible to use these modes in a Cascading way, when appropriate, to ensure redundancies and to prevent service disruptions.

* **Local API**: An instance of our API that runs on every workstation as part of *opendental.exe*.
* **API Service**: An instance of our API that continuously runs on the customer's database server.
* **Remote**: A public facing, cloud-hosted version of our API.

## Local

Version Added: 22.1

The Local API is an instance of our API that runs on a single workstation. Open Dental automatically launches the Local API on startup after the user has successfully logged in. No other action is required from the user. A specific port (30222) is opened and API requests can be sent locally on that workstation.

**Recommended when**:

* The third-party application is installed on each individual workstation.

**Endpoints**:

* http://localhost:30222/api/v1/
* http://127.0.0.1:30222/api/v1/

Open Dental will close this port automatically when the software closes. If more than one instance of Open Dental is opened on the workstation, only the first instance will open a port and listen for API requests. Subsequent concurrent instances will not run the Local API. No firewall setting should need to be changed.

**How to Use**:

1. Start Open Dental on a workstation.
2. Choose a database. The Local API is started automatically.
3. Software on that workstation can make calls to http://localhost:30222/api/v1/ .
4. Close Open Dental to stop the Local API.

## Service

Version Added: 22.2

See [API Guide - The API Service](https://tinyurl.com/3m6s3z48).

The API Service is an instance of our API that continuously runs on a machine. A specific port (30223) is opened and API requests can be sent locally or from in-network workstations. Customers will run this service on the server that is also hosting their database. Installation occurs automatically from the OpenDentalAPIService.exe that is included when updating Open Dental. When started, the API Service will connect to the database specified in the OpenDentalWebConfig.xml file created at installation. It will also attempt to create a localhost firewall rule for port 30223. Log files are also created. These files are located in the \\OpenDental\OpenDentalAPIService directory.

**Recommended when**:

* The third-party service is installed upon the database server.
* The practice is using Open Dental Cloud.

**Endpoints**:

* http://localhost:30223/api/v1/
* http://127.0.0.1:30223/api/v1/
* http://{Private IP Address}:30223/api/v1/

An Inbound Rule for port 30223 must be created on the server to allow API requests from other workstations.

**How to Use**:

1. Update the dental office Server that runs the eConnector to version 22.2.16 or later. Open Dental should be run as Admin.
   * (One time only) Create an Inbound Rule in Windows Firewall for Port 30223.
2. The API Service is automatically installed and started on this machine (no other workstations).
3. Software on the server or any network workstation can make calls to http://{IP Address of Server}:30223/api/v1/ .
   * If a subscription has been set up, Database Events will also fire from this machine.
4. The API Service will automatically start after restarting the server.
5. Stop the API Service either in Open Dental's Service Manager (Tools > Misc Tools > Service Manager) or with the Windows Service Manager.

**Manual Installation**:
 The API Service is automatically installed and started for dental offices that have the API enabled. However, to manually install the service follow the steps below.

**For versions 22.2.42 and later**:

1. Launch Open Dental as Administrator.
2. Ensure the API Enabled box is checked in Setup > Advanced Setup > API.
3. Navigate to Tools > Misc Tools > Service Manager. Click Add.
4. Name the service OpenDentalAPIService and Browse to select the OpenDentalAPIService.exe.
5. Click Install, enter your database connection details in the form, click OK, then Start.

**For versions 22.2.41 and earlier**:

1. Navigate to \\OpenDental\OpenDentalAPIService and ensure there is an OpenDentalWebConfig.xml
   * . If absent, copy the OpenDentalWebConfig.xml from \\OpenDental\OpenDentalEconnector
   * Move the copy to the OpenDentalAPIService folder. Paste the following line between the </DatabaseType> and </DatabaseConnection> nodes: <Note>DentalOffice</Note>
2. Launch Open Dental as Administrator.
3. Ensure the API Enabled box is checked in Setup > Advanced Setup > API.
4. Navigate to Tools > Misc Tools > Service Manager. Click Add.
5. Name the service OpenDentalAPIService and Browse to select the OpenDentalAPIService.exe.
6. Click Install and then Start.

The API Service can be uninstalled by clicking the Uninstall button within this same window.

## Open Dental Cloud

Version Added: 22.3

Users of Open Dental Cloud are able to use the API Service. The virtual machine hosting Open Dental has both the eConnector and the API Service installed for the dental office. The Open Dental Cloud Client passes API requests from the user's workstation to and from the virtual machine. The endpoint is the same as the cloudless API Service. Therefore, a third party software does not even need to distinguish between the customer utilizing Cloud or not.

**How to Use**:

1. Software on the workstation can make calls to:
   * http://localhost:30223/api/v1/
   * http://127.0.0.1:30223/api/v1/
   * http://localhost:30222/api/v1/
   * http://127.0.0.1:30222/api/v1/
2. API requests can be made as long as the Cloud Client is running

## Remote

Version Added: 21.1

For developers that want to access data without their software to installed on a customers local network.

**Recommended when**:

* The third-party application is internet-based.

**Endpoint**:

* https://api.opendental.com/api/v1/

**How to Use**:

1. Developer sends a request to https://api.opendental.com/api/v1/ with valid credentials.
2. OpenDental validates credentials and then routes request to the correct office.
3. Office receives the request, accesses the database, processes the request, and then routes data back.

## Cascading

To ensure redundancies and to prevent service interruptions, we recommend developers utilize a "cascade" strategy of API endpoints for their application

Developers may elect to use either the Local or Service modes in addition to our Remote API. Both the Local and Service modes operate on the customer's network, which greatly decreases execution time. They make a single remote web call automatically to validate credentials. Subsequent API requests in these modes can be made without an internet connection. This web call is made once per instance of the Local API and API Service and is valid for six hours until another web call will need to be made.

Most implementations will prefer to use the API Service but will be programmed in such a way to use the Remote API instead, if the API Service were unavailable at the dental office (their server is offline, etc). Similarly, applications using the Local mode should fall back upon the Service and Remote modes, if necessary.