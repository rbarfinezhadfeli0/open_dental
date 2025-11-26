# File: ./www.opendental.com/manual232/topazsetupbsb.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Topaz BSB Model Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('topazsetupbsb','electronicsignatures','procedureedit','entertreatment','+chartTabs','chart','modules','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/manual243/topazsetupbsb.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/topazsetupbsb.html" >v24.2</option><option value="https://www.opendental.com/manual241/topazsetupbsb.html" >v24.1</option><option value="https://www.opendental.com/manual233/topazsetupbsb.html" >v23.3</option><option value="https://www.opendental.com/manual232/topazsetupbsb.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/topazsetupbsb.html" >v23.1</option><option value="https://www.opendental.com/manual224/topazsetupbsb.html" >v22.4</option><option value="https://www.opendental.com/manual223/topazsetupbsb.html" >v22.3</option><option value="https://www.opendental.com/manual222/topazsetupbsb.html" >v22.2</option><option value="https://www.opendental.com/manual221/topazsetupbsb.html" >v22.1</option><option value="https://www.opendental.com/manual214/topazsetupbsb.html" >v21.4</option><option value="https://www.opendental.com/manual213/topazsetupbsb.html" >v21.3</option><option value="https://www.opendental.com/manual212/topazsetupbsb.html" >v21.2</option><option value="https://www.opendental.com/manual211/topazsetupbsb.html" >v21.1</option><option value="https://www.opendental.com/manual205/topazsetupbsb.html" >v20.5</option><option value="https://www.opendental.com/manual204/topazsetupbsb.html" >v20.4</option><option value="https://www.opendental.com/manual203/topazsetupbsb.html" >v20.3</option><option value="https://www.opendental.com/manual202/topazsetupbsb.html" >v20.2</option><option value="https://www.opendental.com/manual201/topazsetupbsb.html" >v20.1</option><option value="https://www.opendental.com/manual194/topazsetupbsb.html" >v19.4</option><option value="https://www.opendental.com/manual193/topazsetupbsb.html" >v19.3</option><option value="https://www.opendental.com/manual192/topazsetupbsb.html" >v19.2</option><option value="https://www.opendental.com/manual191/topazsetupbsb.html" >v19.1</option><option value="https://www.opendental.com/manual184/topazsetupbsb.html" >v18.4</option><option value="https://www.opendental.com/manual183/topazsetupbsb.html" >v18.3</option><option value="https://www.opendental.com/manual182/topazsetupbsb.html" >v18.2</option><option value="https://www.opendental.com/manual181/topazsetupbsb.html" >v18.1</option><option value="https://www.opendental.com/manual174/topazsetupbsb.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Topaz BSB Model Setup</p></div>
<div class="GeneralPageContent">
<p>This is the basic setup process of the Topaz T-S460-BSB-R for use with <a href="electronicsignatures.html">Electronic Signatures</a>. May apply to other models that are meant to work with Remote Desktop Connection (RDC). Unlike the Topaz HSB models, this BSB model works with Microsoft's Remote Desktop Services and RemoteApp with the Terminal Services role turned on (i.e., more than one remote client session on the same server). Terminal Services Users must use this model instead of the HSB models.</p>
<p>Topaz BSB model digital signature pads only work with Open Dental version 15.3 or greater.</p>
<p class="MarginBottomZero">To get started setting up a Topaz BSB signature pad for use on a Terminal Server: </p>
<ol class="MarginBottomGap">
<li>Open the <a href="https://www.topazsystems.com/software/bsb_remote.pdf">Topaz Setup Instructions</a> (PDF).</li>
<li>You will likely be following the instructions for terminal server. If so, skip step three.</li>
<li>Complete the steps laid out in the PDF. <p>See Server Setup and Workstation Setup below.</p>
</li>
</ol>
<h2>Server Setup</h2>
<p>Set up the server once, then follow the workstation setup steps for each workstation. The steps below are required.</p>
<p>Log into the server, then download and save <a href="http://www.topazsystems.com/Software/sigplus.exe">SigPlus.exe</a>.</p>
<p class="MarginBottomZero">If using Server 2003 </p>
<ol class="MarginBottomGap">
<li>Open Add/Remove Programs, click Add New Programs.</li>
<li>Click Browse, and navigate to the SigPlus.exe.</li>
<li>Run the install through the Add/Remove Programs wizard.</li>
<li>Choose your tablet model during install and the COM1 connection type.</li>
</ol>
<p class="MarginBottomZero">If using Server 2008/2012. Remote Desktop Session Host Configuration must be installed for this to work. See checking port settings below. </p>
<ol class="MarginBottomGap">
<li>From a CMD line, type Change user/install to enter Install mode.</li>
<li>Install SigPlus.exe. Choose your tablet model during install and the COM1 connection type.</li>
<li>After installation, from CMD line, type Change user/execute or restart server to place server back into Execute mode before using the application.</li>
</ol>
<p class="MarginBottomZero">Create a SigPlusRoot.ini file and change the TabletComPort. </p>
<ol class="MarginBottomGap">
<li>Copy <span class="codeblock">SigPlus.ini</span> from <b>C:\Windows</b> and paste it into the root directory (e.g. <b>C:\</b>).</li>
<li>Rename it <span class="codeblock">SigPlusRoot.ini</span>.</li>
<li>Change the TabletComPort assignment to the desired COM port (see step 7 in Part 1 below).</li>
</ol>
<h2>Workstation Setup</h2>
<p>Below are the steps for Terminal Servers from the manual (08/20/2015).</p>
<p class="MarginBottomZero">Part 1: Client Side Installation </p>
<ol class="MarginBottomGap">
<li>Download and save the <a href="http://www.topazsystems.com/software/sigplusbsb.exe">SigPlus BSB Pad Installer (.exe)</a> to your local client computer/terminal.</li>
<li>Right-click the sigplusbsb.exe and choose Run as Administrator.</li>
<li>Follow the installer, choosing the appropriate tablet model.</li>
<li>Click Start, right-click Computer, click Properties.</li>
<li>Click Device Manager from the menu on the left.</li>
<li>Click the white arrow to expand the Ports section and locate the USB Serial Port. <br/><img src="images/topazUSBPort.png" width="236" height="197" class="ImageInParagraph"/></li>
<li>Note what COM port was assigned to this device. In this example, the port is COM9.</li>
</ol>
<p class="MarginBottomZero">Part 2: Setting up Remote Desktop for Serial Port Redirection </p>
<ol class="MarginBottomGap">
<li>Click Start, All Programs, Accessories, Remote Desktop Connection.</li>
<li>The Remote Desktop Connection opens. Click Options in the corner.</li>
<li>Click the Local Resources tab at the top of the window. Click More in the Local Devices and Resources section of the window. <br/><img src="images/topazRemoteLocal.PNG" width="423" height="479" class="ImageInParagraph"/></li>
<li>Click Ports to check the box. <br/><img src="images/topazRemotePorts.PNG" width="419" height="440" class="ImageInParagraph"/></li>
<li>Click OK. Ports needs to be checked when you log into a session for the signature pad to work in that session.</li>
</ol>
<p class="MarginBottomZero">Part 3: Setting Up Signature Capture for Each User </p>
<ol class="MarginBottomGap">
<li>Log into the server via an RDC session, and download and save the winloc.exe utility: www.topazsystems.com/Software/winloc.exe</li>
<li>Double-click the winloc.exe to run.</li>
<li>Click on WINDOWS from the list and note the Path reported.</li>
<li>Copy the SigPlus.ini file from C:\\Windows and paste it into the path reported by winloc.exe.</li>
<li>Double-click this new SigPlus.ini file to open.</li>
<li>Change the TabletComPort assignment to the COM port you noted from step 5 on page 6.</li>
<li>Once done, click File, Save.</li>
<li>You will need to repeat this process for each user that has a signature pad. Be sure to log in as the particular user you wish to set up each time.</li>
</ol>
<p>Part 4: Test Your BSB Signature Pad</p>
<p>Before testing your application, you should test with DemoOCX.exe. This can be found in <b>C:\Windows\SigPlus</b> on the server. Open DemoOCX.exe, click Start, and sign on your pad. You should see your writing in the demo window.</p>
<h2>Installation Files</h2>
<p>Client Side<p class="codeblock">http://www.topazsystems.com/software/sigplusbsb.exe (run as Admin)</p></p>
<p>Host Side (through RDC)<p class="codeblock">http://www.topazsystems.com/software/sigplus.exe (run as Admin)</p></p>
<h2>Notes/Things to Check</h2>
<ul>
<li>If previous version of SigPlus is installed it is easier to just uninstall and start fresh the first time.</li>
<li>Make sure you enable ports in the RDC options. To check, follow the steps below for Checking Port Settings.</li>
<li>You may need to double check that ports are allowed on RDC sessions. To check, follow the steps below for Checking Port Settings.</li>
<li>Make sure the <span class="codeblock">SigPlus.ini</span> files is in <b>C:\\Windows\</b></li>
<li>Make sure to edit the <span class="codeblock">SigPlus.ini</span> file and put in the correct port number.</li>
</ul>
<br/><h2>Checking Port Settings</h2>
<p class="MarginBottomZero">Client Side </p>
<ol class="MarginBottomGap">
<li>Open RDC.</li>
<li>Click Options, Local Resources tab, More.</li>
<li>Make sure Ports is checked.</li>
</ol>
<p class="MarginBottomZero">Host Side (through RDC) </p>
<ol class="MarginBottomGap">
<li>Click Start, type Remote Desktop Session Host Configuration into search, click to open.</li>
<li>Right-click the RDP-TCP Connection and go to its properties. <br/><img src="images/topazRDC-TCP.png" width="559" height="121" class="ImageInParagraph"/></li>
<li>Click Client Settings.</li>
<li>Make sure COM Port is not checked.</li>
</ol>
<h2>Questions and Answers</h2>
<p><b>Topaz signature pad is not writing properly after setup.</b></p>
<p>Sometimes the test application locks the signature pad. Unplug then re-plug the topaz signature pad to fix the issue.</p>
<p><b>Unable to sign using a Topaz signature pad when running Open Dental as an administrator.</b></p>
<p>Do not run Open Dental as an administrator.</p>
</div>
</div>
</body>
</html>```
