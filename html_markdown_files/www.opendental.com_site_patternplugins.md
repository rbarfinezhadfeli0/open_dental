# File: ./www.opendental.com/site/patternplugins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Plug-in Patterns</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('patternplugins','plugins','programmingresources','advancedtopics','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Plug-in Patterns</p></div>
		<div class="GeneralPageContent">
<p>Patterns for <a href="plugins.html">Plug-in</a> hooks.</p>
<p>There are two kinds of plug-in hooks. </p>
<h2>HookMethod</h2>
<p> The first type of hook is called HookMethod. It is placed at the very top of a method and is designed to let the plug-in designer completely replace the method with their own code. This is the code that is placed at the top of the method: <div class="codebox">
<pre>if(Plugins.HookMethod(this,"ClassName.MethodName",param1,param2,param3,etc)) {
    return;
}</pre></div>
</p>
<p>a typical example might look like this <div class="codebox">
<pre>if(Plugins.HookMethod(this,"ContrFamily.gridPat_CellDoubleClick",PatCur)){ 
    return; 
}</pre></div>
</p>
<p>If the method has a return type instead of void, then the code would look more like this: <div class="codebox">
<pre>ReturnType retVal=new ReturnType();
if(Plugins.HookMethod(this,"ClassName.MethodName",retVal,param2,param3,etc)) { 
    return retVal; 
}</pre></div>
</p>
<p>a typical example might look like this <div class="codebox">
<pre>Document doc=new Document(); 
if(Plugins.HookMethod(this,"FormRpStatement.CreateDocument",doc,pd,fam,pat,dataSet,Stmt)) {
    return doc;
}</pre></div>
</p>
<p>This pattern may also be used in the middle of method, if the developer wishes to replace everything below that point with their own code. <div class="codebox">
<pre>if(Plugins.HookMethod(this,"FormOpenDental.FillPatientButton_popups",pat,PopupEventList)) {
    return;
}</pre></div>
</p>
<p>This pattern may be used to add an additional parameter to an if statement. If the plugin does not implement the method in question, the existing code will be run as usual. Otherwise, the plugin code will be used in lieu of the existing code. <div class="codebox">
<pre>if(Plugins.HookMethod(this,"ContrAppt.ContrApptSheet2_MouseUp_apptProvChangeQuestion",apt.AptStatus) 
    || AlreadyExistingParameters)
{
    ...existing code...
}</pre></div>
</p>
<p>If a developer wishes to only replace part of the code in a method, a goto may be used. <div class="codebox">
<pre>if(Plugins.HookMethod(this,"FormOpenDental.FillPatientButton_popups",pat,PopupEventList)) {
    goto HookSkipPopups;//or some other appropriate name
}
...many lines of normal code here...
HookSkipPopups:{}//use a comment here if the goto name is not obvious
...more lines of normal code...</pre></div>
</p>
<h2>HookAddCode</h2>
<p>The second type of hook is called HookAddCode. This type of hook allows the plug-in designer to add extra code in at some point without disturbing any existing code. These are typically added at the end of form constructors to allow adding controls to a form, adding events to existing controls, etc. </p>
<p>This is the code that is placed in the main program: <div class="codebox">
<pre>Plugins.HookAddCode(this,"ClassName.MethodName_locationdescription",param1,param2,etc);</pre></div>
</p>
<p>a typical example might look like this <div class="codebox">
<pre>Plugins.HookAddCode(this,"ContrAccount.InitializeOnStartup_end");</pre></div>
</p>
<p>or like this when the method is static <div class="codebox">
<pre>Plugins.HookAddCode(null,"Appointments.SetConfirmed_end", aptNum, newStatus);</pre></div>
</p>
<h2>Parameters</h2>
<p>The first parameter of a hook is always the sending form or class. It may be null if the sending method is static. Any changes to the sender from within the plug-in code will affect the the original sending form or class.</p>
<p>Subsequent parameters are passed in as objects. The object types and positions are not checked at compile time, and errors are instead found by testing. Because they are all passed in as objects, all value types are boxed. Value types include int, bool, etc. If the plug-in attempts to alter the value of a value type variable, the new value will not be reflected in the main program. In contrast, if the value of a reference type is altered in the plug-in, then it will change the original object in the main program. But be careful, because reinitializing a reference inside the plug-in by using the "new" keyword will cause the change to not be reflected in the main program.</p>
<p>For parameters that are value types and for strings, if a user wishes the changed value to persist after the hook is run, then we will need to follow this pattern: <div class="codebox">
<pre>object[] parameters={myInt,myStr};
Plugins.HookAddCode(this,"FormClaim.GetClaims_beginning", parameters);
myInt=(int)parameters[0];
myStr=(string)parameters[1];</pre></div>
</p>
<h2>Steps to Request a Hook</h2>
 (for outside developers) <p>1. Determine which of the above two hook types is needed.<br>  2. Locate the position in the code where it is needed and paste in a stub from above.<br>  3. Fill out a preliminary hook name.<br>  4. If it is a HookAddCode, determine a good name for the locationdescription portion of the hook name. Right click on HookAddCode, and Find All References. Pick a locationdescription that is the same as or similar to other locationdescriptions used.<br>  5. Determine which parameters to pass in. Study the Parameters section of <a href="plugins.html">Plugins</a>. Since a reference to 'this' is already passed in, no public class-level fields will need to be passed in. If a class field is private and not part of Controls, then you will need to pass it in. Rarely, the field can be made public (must get approval from us).<br>  6. Test the new hook to make sure it's behaving exactly as you intended.<br>  7. Post a hook request in our forum. <br></p>
<h2>Steps to Add a Hook</h2>
<p>(for our programmers)</p>
<p>1. Review the hook request to make sure it follows the proper pattern and rules.<br> 2. Make the changes in the head and the beta version, but never to the stable version.<br> 3. Go through code review before committing the changes.<br> 4. If the requestor wants to make subsequent changes, it's ok if not too much time has passed.<br> 5. If enhancing an old existing hook, it's ok to add more parameters, but not to remove existing parameters if at all possible.<br> 6. It is not necessary to make an entry in the bug list.<br> 7. Reply back in the forum, indicating which beta version build it is part of.  </p>
<!--This style is at the end so that it won't disappear when scrolling in our editor UI.-->
<style>.codebox{ border-style:solid; border-color:gray; border-width:1px; font-family:monospace; font-size:1.1rem; background-color:white; margin-top:0px; width:900px;} .codebox pre {margin: 3px;} </style>
		</div>
	</div>
</body>
</html>```
