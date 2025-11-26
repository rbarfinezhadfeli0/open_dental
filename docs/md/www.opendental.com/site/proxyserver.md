Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Proxy Server

Open Dental supports proxy servers for the [Middle Tier](middletier.html) connection.

Add a file called MiddleTierProxyConfig.xml to the Open Dental application folder. Windows will usually not allow manually adding files to a Program Files folder, so create the file someplace else, and the copy/paste to get it into the application folder.

The contents should look similar to this:

<ProxySettings>

<Address>https://20.154.23.100:3456</Address>

<UserName>myusername</UserName>

<Password>mypassword</Password>

</ProxySettings>

Change the three values to match your proxy server settings. You must use a username and password; you can't leave those two values blank. To test and see if the file is even being processed by Open Dental, you can temporarily make the XML malformed and it should give you an error message when you try to connect to the Middle Tier from the Choose Database window.

Another option, which has not been tested but might work, is to set Open Dental to use the default proxy settings that were already set up in Windows for the workstation. Edit OpenDental.exe.config as follows. Find the <system.net> element and add the following XML within that element:

<defaultProxy>

<proxy

proxyaddress="http://[your proxy address and port number]"

bypassonlocal="false"/>

</defaultProxy>

Depending upon exactly what you need to achieve, you may or may not require some of the additional attributes of the defaultProxy or proxy elements. Refer to the Windows documentation. One significant disadvantage of this approach is that the OpenDental.exe.config file will get overwritten with each version Update. A process will need to be put in place to deal with this.