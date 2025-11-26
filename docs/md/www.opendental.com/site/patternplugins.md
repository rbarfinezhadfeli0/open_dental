Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Plug-in Patterns

Patterns for [Plug-in](plugins.html) hooks.

There are two kinds of plug-in hooks.

## HookMethod

The first type of hook is called HookMethod. It is placed at the very top of a method and is designed to let the plug-in designer completely replace the method with their own code. This is the code that is placed at the top of the method:

```
if(Plugins.HookMethod(this,"ClassName.MethodName",param1,param2,param3,etc)) {
    return;
}
```

a typical example might look like this

```
if(Plugins.HookMethod(this,"ContrFamily.gridPat_CellDoubleClick",PatCur)){
    return;
}
```

If the method has a return type instead of void, then the code would look more like this:

```
ReturnType retVal=new ReturnType();
if(Plugins.HookMethod(this,"ClassName.MethodName",retVal,param2,param3,etc)) {
    return retVal;
}
```

a typical example might look like this

```
Document doc=new Document();
if(Plugins.HookMethod(this,"FormRpStatement.CreateDocument",doc,pd,fam,pat,dataSet,Stmt)) {
    return doc;
}
```

This pattern may also be used in the middle of method, if the developer wishes to replace everything below that point with their own code.

```
if(Plugins.HookMethod(this,"FormOpenDental.FillPatientButton_popups",pat,PopupEventList)) {
    return;
}
```

This pattern may be used to add an additional parameter to an if statement. If the plugin does not implement the method in question, the existing code will be run as usual. Otherwise, the plugin code will be used in lieu of the existing code.

```
if(Plugins.HookMethod(this,"ContrAppt.ContrApptSheet2_MouseUp_apptProvChangeQuestion",apt.AptStatus)
    || AlreadyExistingParameters)
{
    ...existing code...
}
```

If a developer wishes to only replace part of the code in a method, a goto may be used.

```
if(Plugins.HookMethod(this,"FormOpenDental.FillPatientButton_popups",pat,PopupEventList)) {
    goto HookSkipPopups;//or some other appropriate name
}
...many lines of normal code here...
HookSkipPopups:{}//use a comment here if the goto name is not obvious
...more lines of normal code...
```

## HookAddCode

The second type of hook is called HookAddCode. This type of hook allows the plug-in designer to add extra code in at some point without disturbing any existing code. These are typically added at the end of form constructors to allow adding controls to a form, adding events to existing controls, etc.

This is the code that is placed in the main program:

```
Plugins.HookAddCode(this,"ClassName.MethodName_locationdescription",param1,param2,etc);
```

a typical example might look like this

```
Plugins.HookAddCode(this,"ContrAccount.InitializeOnStartup_end");
```

or like this when the method is static

```
Plugins.HookAddCode(null,"Appointments.SetConfirmed_end", aptNum, newStatus);
```

## Parameters

The first parameter of a hook is always the sending form or class. It may be null if the sending method is static. Any changes to the sender from within the plug-in code will affect the the original sending form or class.

Subsequent parameters are passed in as objects. The object types and positions are not checked at compile time, and errors are instead found by testing. Because they are all passed in as objects, all value types are boxed. Value types include int, bool, etc. If the plug-in attempts to alter the value of a value type variable, the new value will not be reflected in the main program. In contrast, if the value of a reference type is altered in the plug-in, then it will change the original object in the main program. But be careful, because reinitializing a reference inside the plug-in by using the "new" keyword will cause the change to not be reflected in the main program.

For parameters that are value types and for strings, if a user wishes the changed value to persist after the hook is run, then we will need to follow this pattern:

```
object[] parameters={myInt,myStr};
Plugins.HookAddCode(this,"FormClaim.GetClaims_beginning", parameters);
myInt=(int)parameters[0];
myStr=(string)parameters[1];
```

## Steps to Request a Hook

(for outside developers)

1. Determine which of the above two hook types is needed.
 2. Locate the position in the code where it is needed and paste in a stub from above.
 3. Fill out a preliminary hook name.
 4. If it is a HookAddCode, determine a good name for the locationdescription portion of the hook name. Right click on HookAddCode, and Find All References. Pick a locationdescription that is the same as or similar to other locationdescriptions used.
 5. Determine which parameters to pass in. Study the Parameters section of [Plugins](plugins.html). Since a reference to 'this' is already passed in, no public class-level fields will need to be passed in. If a class field is private and not part of Controls, then you will need to pass it in. Rarely, the field can be made public (must get approval from us).
 6. Test the new hook to make sure it's behaving exactly as you intended.
 7. Post a hook request in our forum.

## Steps to Add a Hook

(for our programmers)

1. Review the hook request to make sure it follows the proper pattern and rules.
 2. Make the changes in the head and the beta version, but never to the stable version.
 3. Go through code review before committing the changes.
 4. If the requestor wants to make subsequent changes, it's ok if not too much time has passed.
 5. If enhancing an old existing hook, it's ok to add more parameters, but not to remove existing parameters if at all possible.
 6. It is not necessary to make an entry in the bug list.
 7. Reply back in the forum, indicating which beta version build it is part of.