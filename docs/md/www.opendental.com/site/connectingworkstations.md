Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Connecting Workstations to a Database

See [Network and Computer Setup](computernetworksetup.html).

Workstations can connect to databases via direct connection, [Remote Access](remote.html) (RDP), or [Middle Tier](middletier.html). These methods can be mixed and matched in any network (LAN or VPN). Also see [Multiple Locations](multiplelocations.html).

## Direct Connection

In this method, workstations connect directly to the MySQL database using ServerName, DataBase, MySqlUser, and MySqlPassword (see [Choose Database](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7choosedatabase.html)).

![](images/networkConnectDirect.png)

## Virtual Private Network (VPN)

There are different types of VPN solutions and a network administrator is usually involved in setting it up. Open Dental support technicians do not set up network specifics. Once the VPN is set up, the offices should be securely connected and function as if they were a single office. If the client is connecting directly to the database over a VPN and it is sluggish, consider trying a Middle Tier connection which may be very fast in comparison. The Middle Tier improves the speed and responsiveness of the Open Dental client because there are fewer round trips between the client and the database.

## Remote Desktop Protocol (RDP)

Each workstation acts as a thin client, with multiple copies of Open Dental running on the server. Open Dental is specifically designed to run well in this environment and many offices use RDP successfully. Other names for similar technology include Terminal Services, Citrix XenApp, application virtualization, LogMeIn, RemoteApp, GoToMyPC, VNC, VMware, etc.

**Small Office Example**:

![](images/networkConnectRDPSmall.png)

**Large Enterprise Example:**

![](images/networkConnectRDPLarge.png)

## Middle Tier

The Middle Tier is a server program that sits between the database and the client machines. It isolates the database, improving security by preventing client workstations from directly accessing the database. Workstations are ordinary thick clients running the full Windows version of Open Dental.

**Small Office Example:**

![](images/networkConnectWebServiceSmall.png)

**Large Enterprise Example:**

![](images/networkConnectWebServiceLarge.png)