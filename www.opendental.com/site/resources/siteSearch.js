/*2018-05-27-jordan All search terms are now managed in the Manual Publisher Tool and stored in searchterms.js in this folder*/

/*2025/07/21 SamR
Used only in searchsite.html

This creates the dropdown for suggested searches and allows users to use the keyboard arrow keys to navigate items within it.
*/

if (navigator.appName == 'Netscape') {
	window.captureEvents(Event.KEYPRESS);
	//window.onKeyPress = NNKeyCapture;
}

//var shouldFill;

//window.onload = function() {
//	init();
//}

function init() {
    BodyLoaded('search','manual','help','modules','mainmenu','toolbar','documentation');//manual.js, TOC. Expands some main nodes.
	//FillList(document.formMain.textSearch.value);
	//document.formMain.textSearch.focus();
	//document.formMain.textSearch.select();
    if(location.search.length>0) {
		//Confusingly, "search" is used in two totally different ways here
		//Example of search string: "?search=call+fire"
		var searchQuery=decodeURI(location.search);//handles any special characters that were encoded
		searchQuery=searchQuery.split("=")[1];//gets rid of "?search="
		searchQuery=searchQuery.split('+').join(' ');//This is a workaround for .Replace("+"," ").  Example: call fire
		//document.formMain.textSearch.value=searchQuery;
		//FillList(searchQuery);
	}
	else {
		//FillList("")
	}
	$(document).keydown(
		function(e)	{    
			if (e.keyCode==40) { //down    
				e.preventDefault();
				//console.log("hit");
				if($(".searchItem:focus").length==0) {
					//console.log("hit undefined");
					if($("#ulResults li .searchItem").first()!=undefined) {
						//$("#ulResults li .searchItem").first().focus();
					}
				}
				else {
					//$(".searchItem:focus").parent().next().children().focus();
				}
			}
			if (e.keyCode==38) {  //up    
				e.preventDefault();						
				if($(".searchItem:focus").is($("#ulResults li .searchItem").first())) {
					//$("#textSearch").focus();
				}
				else {
					//$(".searchItem:focus").parent().prev().children().focus();
				}
			}
		}
	);
}



function FillList(matchString) {
	//if(shouldFill==false){
	//	return;
	//}
	if(matchString==undefined) {
		matchString="";
	}
	//Check to see if this browser has support for "startsWith" and if it doesn't, manually create the function for use.
	if(typeof String.prototype.startsWith != 'function') {
		String.prototype.startsWith=function(str) {
			return this.indexOf(str)===0;
		};
	}
	//Clear out the search results Option box.
	root=document.getElementById('ulResults');
	while(root.firstChild){
		root.removeChild(root.firstChild);
	}
	//Create a variable to keep track of the current index we are at within the masterList.
	var masterIndex=0;
	//Create a variable to keep track of the current index we are at within the Option box.
	var optionIndex=0;
	//Split up selectResults by spaces so that we can match on each word.
	//var arrayMatchStrings=matchString.split(" ");
	while(masterIndex<masterList.length){//SamR 2025-07-21 This could be redone as 'for(masterIndex; masterIndex<masterList.length; masterIndex+=2)' and remove the incrementer at the end of the loop.
		//If the user didn't type anything in the search yet, simply return every possibility.
		if(matchString=='') {
			break;
			/*
			//selectResults.options[optionIndex]=new Option(masterList[masterIndex],masterList[masterIndex+1]);
			//root.innerHTML+="<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>";
			if(masterList[masterIndex+1].startsWith("~")){//get rid of this tilde indicator
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1].substring(1)+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			else{
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			//$("<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			optionIndex++;
			masterIndex+=2;//Increase the master index by two because it is an array with two strings per index (name, URL)
			continue;//Continue through the while loop.*/
		}
		if(masterList[masterIndex].toUpperCase().startsWith(matchString.toUpperCase())){
			if(masterList[masterIndex+1].startsWith("~")){//get rid of this tilde indicator
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1].substring(1)+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			else{
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			optionIndex++;
		}	
		/*
		//Split up the first item in the masterList row so that we can see if any word starts with any of the words within arrayMatchString.
		var arrayMasterStrings=masterList[masterIndex].split(" ");
		var hasMatch=false;
		//Make sure that all words within arrayMatchStrings has a corresponding word within arrayMasterStrings that starts with it.
		for(var j=0;j<arrayMatchStrings.length;j++) {
			//Loop through all strings in arrayMasterStrings and make sure there is at least one word that starts with the current search word.
			hasMatch=false;
			for(var i=0;i<arrayMasterStrings.length;i++) {
				if(arrayMasterStrings[i].toUpperCase().startsWith(arrayMatchStrings[j].toUpperCase())) {
					hasMatch=true;
					break;//We found a match for this item.  Move on to the next string in arrayMatchStrings.
				}
			}
			//As soon as there is a word within arrayMatchStrings that is NOT within arrayMasterStrings, kick out of the loops and the item will not be added to the Option box.
			if(!hasMatch) {
				break;
			}
		}
		if(hasMatch) {
			//selectResults.options[optionIndex]=new Option(masterList[masterIndex],masterList[masterIndex+1]);
			//root.innerHTML+="<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>";
			if(masterList[masterIndex+1].startsWith("~")){//get rid of this tilde indicator
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1].substring(1)+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			else{
				$("<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			}
			//$("<li><a class='searchItem' href='"+masterList[masterIndex+1]+"'>"+masterList[masterIndex]+"</a></li>").appendTo(root);
			optionIndex++;
		}*/
		masterIndex+=2;//Increase the master index by two because it is an array with two strings per index (name, URL)
		// This is the old algorithm ************************************************************************************
		//if(matchString=='' || masterList[masterIndex].toUpperCase().indexOf(matchString.toUpperCase()) !=-1){
		//	selectResults.options[optionIndex]=new Option(masterList[masterIndex],masterList[masterIndex+1]);
		//	optionIndex++;
		//}
		//masterIndex+=2;//Increase the master index by two because it is an array with two strings per index (name, URL)
		//*****************************************************************************************************************/
	}
}





