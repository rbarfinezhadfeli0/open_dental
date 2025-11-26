Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eConnector Firewall

See [eConnector](econnector.html).

In some cases, the eConnector and eService Listener ports must be allowed through Windows Firewall.

1. Open Windows Defender Firewall with Advanced Security.

2. On the left, select *Inbound Rules*.
![](images/openPortInbound.png)3. On the right, click **New Rule**.

4. Select the desired rule type, then click **Next**.
   * If allowing the eConnector, select *Program*.
   * If allowing the eServices Listener ports, select *Port*.
   ![](images/econnectorProgram.png)
5. Determine where the rule applies, then click **Next**.
   * If allowing the eConnector, select *This program path:*. Click **Browse** search for the eConnector location.
      The default location for the eConnector file is **C:\Program Files (x86)\Open Dental\OpenDentalEConnector\OpenDentalEConnector.exe.**.
   ![](images/firewalleConnectorProgram.png)* If allowing the eServices Listener ports, select *Specific local ports:*. Enter 30777 - 30787.
   ![](images/firewallListenerPorts.png)
6. Select **Allow the connection**, then click **Next**.
![](images/econnectorAllow.png)7. Select the profiles. Consult an IT professional for appropriate profile selections.
![](images/econnectorProfiles.png)8. Enter a *Name* and a *Description*, then click **Finish**.
   * If allowing the eConnector, enter Open Dental eConnector.
   * If allowing eServices Listener ports, enter eServices Listener.
![](images/econnectorName.png)