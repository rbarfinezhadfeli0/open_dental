# File: ./www.opendental.com/manual232/printersetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Printer Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('printersetup','+file','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/printersetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/printersetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/printersetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/printersetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/printersetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/printersetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/printersetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/printersetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/printersetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/printersetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/printersetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/printersetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/printersetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/printersetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/printersetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/printersetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/printersetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/printersetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/printersetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/printersetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/printersetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/printersetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/printersetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/printersetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/printersetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/printersetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/printersetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/printersetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Printer Setup</p></div>
<div class="GeneralPageContent">
<p>Use Printer Setup to set default print options for the current workstation.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click File, <b>Printers</b>.</p>
<img src="images/printersetup.gif" width="664" height="464"/><p><div class="Note">Note: Printer Setup cannot be accessed by Open Dental Cloud users.</div>
</p>
<p>All categories that allow a default printer are listed.</p>
<p> To view a simple version of this window, check <b>This is too complicated. Show me the simple interface</b> (see below).</p>
<p class="MarginBottomZero">For each category, select the default printer.  </p>
<ul class="MarginBottomGap">
<li><b>Default</b>: The printer used for all categories that have <i>default</i> as the selection.</li>
<li><b>Appointments</b>: The printer used when printing appointments from the <a href="appointments.html">Appointments Module</a>.</li>
<li><b>Claims</b>: The printer used for claims.</li>
<li><b>Labels - Sheet</b>: The printer used for sheets of <a href="labels.html">Labels</a>.</li>
<li><b>Labels - Single</b>: The printer used for single Labels.</li>
<li><b>Postcards</b>: The printer used for postcards.</li>
<li><b>Rx's</b>: The printer used for <a href="rx.html">Paper Prescriptions</a>.</li>
<li><b>Controlled Rx's</b>: The printer used for prescriptions that are marked as a controlled substance.</li>
<li><b>Multi Rx's</b>: The printer used for multiple prescriptions on one page. See <a href="rxmanage.html">Rx Manage</a>.</li>
<li><b>Statements</b>: The printer used for <a href="statement.html">Statement</a>.</li>
<li><b>Treatment Plans and Perio</b>: The printer used for <a href="treatmentplanprint.html">Treatment Plans</a> or <a href="perio.html">Perio Chart</a>.</li>
<li><b>Receipts</b>: The printer used for <a href="xcharge.html">XCharge (OpenEdge)</a>, <a href="paysimple.html">PaySimple</a>, or <a href="payconnectpaymentwindow.html">PayConnect</a> receipts.</li>
</ul>
<p><b>Prompt:</b> Check this box to select a printer before printing. This is useful when a user wants to select a different printer, print a page range, or make printing adjustments. Uncheck this to immediately print to the selected printer using the printers defaults.</p>
<p><b>This is too complicated. Show me the simple interface</b>: Check to show a simple interface. When setting Printer Setup to the Simple Interface, all workstations will also be set to Simple Interface and the printer will be set back to the Windows Default. A warning will display prior to making this change.<br/><img src="images/printersetupsimple.gif" width="664" height="183" class="ImageInParagraph"/></p>
<h2>Troubleshooting</h2>
<p class="MarginBottomZero">Below are common printer issues and troubleshooting methods. Before starting the troubleshooting process:  </p>
<ul class="MarginBottomGap">
<li>Check that adequate paper is in all paper trays and there is sufficient ink.</li>
<li>Make sure you have selected the correct printer (It is the default in Printer Setup above, or is selected on the Prompt window).</li>
</ul>
<p><b>Problem: Unable to print from Open Dental or Windows.</b></p>
<p class="MarginBottomZero">Solution: This is likely an issue with your printer drivers or Windows configuration.  </p>
<ol class="MarginBottomGap">
<li>Make sure your printer drivers are up-to-date and compatible with your Windows version.</li>
<li>Restart the printer.</li>
<li>If that doesn't work, try restarting the computer.</li>
<li>If neither work, this is likely a printer setup issue. You may need to reinstall the printer drivers.</li>
</ol>
<p><b>Problem: Can print from Windows, but unable to print from Open Dental.</b></p>
<p class="MarginBottomZero">Solution: </p>
<ol class="MarginBottomGap">
<li>Exit Open Dental, then run Open Dental as Administrator.</li>
<li>If that doesn't work, and you have been able to print from Open Dental with the current printer previously, try restarting your computer.</li>
<li>If that doesn't work, or your printer has never worked with Open Dental, contact us.</li>
</ol>
<p><b>Problem: Open Dental stops responding when attempting to print.</b></p>
<p class="MarginBottomZero">Solution: </p>
<ol class="MarginBottomGap">
<li>If the printer is a network printer, make sure you have access to the server location.</li>
<li>Restart the computer. If the communication between Windows and Open Dental is bad, this should fix it.</li>
<li>If still not responding, contact us.</li>
</ol>
</div>
</div>
</body>
</html>```
