# File: ./www.opendental.com/manual/securewebmail.html

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Open Dental Software - Secure WebMail Feature</title>
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
								<a href="manual.html" class="TopLink"><img src="../open-dental/UserManual.gif" class="MenuImage" width="27" height="15" border="0">User Manual</a>
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
	  <h1>Secure WebMail Feature</h1>
<p>The SecureWebMail Feature allows PHI to be communicated in a secure, HIPAA-compliant way through the <a href="../site/patientportal.html">Patient Portal</a>.</p>
<p>Communicating with patients and other providers in a HIPAA-compliant way is a critical priority for any practice. </p>
<p>WebMail can be used in the following scenarios.</p>
<p class="MarginBottomZero"><b>Provider sends WebMail to patient</b></p>
<ol class="MarginBottomGap">
<li>Provider sends a secure WebMail to a patient. See <a href="securewebmailsend.html">WebMail</a>.</li>
<li>The patient receives an email notification indicating that a secure message is waiting for them in the portal.</li>
<li>The patient logs in to the portal using their credentials. In the portal, they can view, reply to, and send new WebMails. See <a href="portalpatientsees.html">Patient Portal: What Patient Sees</a>.</li>
</ol>
<p class="MarginBottomZero"><b>Patient sends WebMail to provider</b><br/> Secure WebMails sent to a provider can be viewed when the provider is logged in to Open Dental. They are viewable in the <a href="emailinbox.html">Email Client</a> and Chart module. </p>
<ol class="MarginBottomGap">
<li>Patient logs in to the Patient Portal and composes a new WebMail to their primary provider.</li>
<li>Provider logs in to Open Dental. An <a href="alerts.html">Alert</a> displays unread WebMail messages.</li>
<li>The WebMail can be seen in the provider's WebMail Inbox or the Chart Module.</li>
</ol>
<p class="MarginBottomZero"><b>Provider sends WebMail to another provider</b><br/> You can also securely exchange patient information with another provider using WebMail and the Patient Portal. </p>
<ul class="MarginBottomGap">
<li>Create a patient record for the provider. The following fields are required: <ul>
<li>First Name</li>
<li>Last Name</li>
<li>Date of Birth</li>
<li>Phone Number</li>
<li>Email Address</li>
<li>Address Information</li>
<li>Assign a primary provider (the provider who will send the messages).</li>
</ul>
</li>
<li><a href="portalaccess.html">Grant Portal Access</a> to the provider.</li>
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
