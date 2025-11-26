# File: ./www.opendental.com/manual232/clinuxmac.html

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Open Dental Software - Linux and Mac</title>
<link href="../css/manual.css" rel="stylesheet" type="text/css">
<link rel="icon" type="image/png" href="../favicon.png">
<style type="text/css">body {
	background-color: #507C77;
}
</style>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onKeyPress="IEKeyCapture()">
<table width="946" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
		<td>
		<table width="100%" height="80" align="left" border="0" cellpadding="0" cellspacing="0">
			<tr>
    		<td align="left"><a href="../index.html"><img src="../open-dental/LogoInner.jpg" class="MenuImage" width="235" height="80" border="0"></a></td>
    		<td width="100%" align="left">
					<table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" background="../open-dental/bg-top.jpg">
      			<tr>
        			<td height="25" align="right" valign="middle" style="padding-right:10px;">
								<a href="../index.html" class="TopLink"><img src="../open-dental/home.gif" class="MenuImage" width="17" height="15" border="0">Home</a>
								<a href="../manual/manual.html" class="TopLink"><img src="../open-dental/UserManual.gif" class="MenuImage" width="27" height="15" border="0">User Manual</a>
								<a href="http://opendentalsoft.com/forum/" class="TopLink">
										<img src="../open-dental/DiscForum.gif" class="MenuImage" width="27" height="15" border="0">Discussion Forum</a>
								<a href="../site/searchSite.html" class="TopLink"><img src="../open-dental/SearchIcon.gif" class="MenuImage" width="27" height="15" border="0">Search</a>
							</td>
						</tr>
						<tr>
        			<td height="55" align="left" valign="top"">
								<table width="100%" height="55" border="0" cellpadding="0" cellspacing="0">
            			<tr align="left" valign="top">
										<td width="20px">
										</td>
              			<td width="25%" style="padding-left:5px; padding-top:12px;">
											<ul id="Menu">
                				<li id="LIMenu"><a href="../trial.html" class="MLink"> 
													<font size="2" face="Arial, Helvetica, sans-serif" class="TopMenu">TRIAL</font><br>
                    			<font size="2" face="Arial, Helvetica, sans-serif" class="BMenu">VERSION</font> </a>
                				</li>
                  		</ul>
										</td>
                		<td align="center" valign="bottom"><img src="../open-dental/Line.gif" class="MenuImage" width="1" height="46"></td>
                		<td width="25%" style="padding-left:5px; padding-top:12px;">
											<ul id="Menu">
                  			<li id="LIMenu"><a href="../programmers-resellers.html" class="MLink">
													<font size="2" face="Arial, Helvetica, sans-serif" class="TopMenu">PROGRAMMERS</font><br>
                      		<font size="2" face="Arial, Helvetica, sans-serif" class="BMenu">& DISTRIBUTORS</font> </a>
												</li>
                  		</ul>
										</td>
                		<td valign="bottom"><img src="../open-dental/Line.gif" class="MenuImage" width="1" height="46"></td>
                		<td width="25%" style="padding-left:5px; padding-top:12px;">
											<ul id="Menu">
                  			<li id="LIMenu"><a href="https://www.opendental.com/order.html" class="MLink">
													<font size="2" face="Arial, Helvetica, sans-serif" class="TopMenu">ORDER</font><br>
                      		<font size="2" face="Arial, Helvetica, sans-serif" class="BMenu">HERE</font> </a>
												</li>
                  		</ul>
										</td>
                		<td valign="bottom"><img src="../open-dental/Line.gif" class="MenuImage" width="1" height="46"></td>
                		<td width="25%" style="padding-left:5px; padding-top:12px;">
											<ul id="Menu">
                				<li id="LIMenu"><a href="../contact.html" class="MLink">
													<font size="2" face="Arial, Helvetica, sans-serif" class="TopMenu">CONTACT</font><br>
                      		<font size="2" face="Arial, Helvetica, sans-serif" class="BMenu">INFORMATION</font> </a> </li>
                    		</ul>
											</td>
                		</tr>
              		</table>
								</td>
          		</tr>
        		</table>
					</td>
				</tr>
		</table>
		</td>
  </tr>
  <tr>
    <td bgcolor="#FFFFFF" style="padding-left:15px; padding-top:20px; padding-right:15px; background-image: url(../open-dental/Back.jpg); background-repeat: repeat-x;">
	  <h1>Linux and Mac</h1>
<p>The information below is useful to those interested in running Open Dental in a <a href="linuxinstall.html">Linux Server</a> or Mac OS environment. </p>
<h2>Open Dental on the Server</h2>
<p>The Open Dental server can always be Linux (tested) or macOS (not tested).</p>
<p class="MarginBottomZero">The server needs to be able to host the MySQL/MariaDB server and the image files, but does not need to be able to run Open Dental itself. </p>
<ul class="MarginBottomGap">
<li>Unlimited computers can connect to the database on an ordinary Windows workstation, despite Windows limitations.</li>
<li>To get around the computer limit for the <a href="atozfolder.html">A to Z Folder</a>, simply get a network-attached hard drive.</li>
<li>See <a href="computerrequirements.html">Computer Requirements</a> for more information on maximum number of simultaneous connections, depending on Windows version.</li>
</ul>
<h2>Running the Open Dental Client on Workstations</h2>
<p>The Open Dental client program cannot run on Linux or Mac OS. </p>
<p class="MarginBottomZero">Mac users may be interested in these tools that run Windows.  </p>
<ul class="MarginBottomGap">
<li><a href="http://www.parallels.com/">Parallels</a>: Run Windows in a virtual machine inside Mac OS.</li>
<li><a href="https://support.apple.com/boot-camp">Bootcamp</a>: Boot up the Mac with either Mac OS or Windows.</li>
</ul>
<h2>Linux Development</h2>
<p>The most recent version on which Open Dental was running on Linux was 5.6. The information below is from that time period and has not been updated. It only remains here for programmers who might be interested in Linux development.</p>
<p>Open Dental runs on the dotNet Framework, a Microsoft technology. It will also run on the Mono framework, an adaptation of dotNet for Linux. Mono must be installed before installing and using Open Dental. The flavor of Linux shouldn't matter, but we tested it on Suse 10.3 with Mono 1.2.6. This version of Mono or later must be used. See <a href="http://www.mono-project.com/Downloads">www.mono-project.com/Downloads</a>, or use the instructions here for a different way of updating Mono: <a href="../resources/mono.doc">mono.doc</a>.</p>
<p>Installation of Open Dental itself simply involves copying all files in <b>C:\Program Files\Open Dental</b> from a Windows computer directly into a folder on a Linux computer (we used <b>/usr/local/opendental/</b>).</p>
<p>Launch Open Dental like this: <span class="codeblock">$ mono OpenDental.exe</span></p>
<p class="MarginBottomZero">Try these tricks: </p>
<ul class="MarginBottomGap">
<li>Make sure <i>FreeDentalConfig.xml</i> is present in the same folder as <i>OpenDental.exe</i>. This file may need to be edited manually to define the connection.</li>
<li>Use an ip address at the choose database window if the computer name isn't working.</li>
<li>It won't be able to find the A-Z folder on a remote computer. Choices are: <ol>
<li>Use Samba, mount a local directory, and point it to the real A-Z folder (at least that's the theory). There need to be two paths put in the <i>Path</i> box, separated by ; (semicolon)</li>
<li>Check the box to not use the A-Z folder at all. This applies to all computers for now.</li>
<li>Use a dummy A-Z folder. Add that path to the Path box (<a href="paths.html">Paths</a>).</li>
</ol>
</li>
</ul>
</td>
  </tr>
	<tr>
		<td height="80" valign="top">
			<div align="center" style="color: #FFFFFF; font-size: 11px;">Open Dental Software  1-503-363-5432</div>
		</td>
  </tr>
</table>
</body>
</html>```
