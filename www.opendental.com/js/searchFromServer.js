/*
Used in these files:
/help###/searchhelp.html
/manual###/searchmanual.html
/site/searchsite.html
/manual/searchmanual.html
Purpose:
Take in search text, make a request to Search API, format the response into html, return formatted response.
*/

var path=window.location.pathname;
var pageNum=0;
var numResults=0;
var prevSearchTerm;
var inputEvent=document.createEvent('Event');
var fullList=[];
var textSearchField;
/*initEvent(type: string, bubbles: bool, cancelable: bool)
- type: name or type of the event
- bubbles: true, it will bubble up through DOM tree
- cancelable: true, event can be canceled
*/
inputEvent.initEvent('input', true, true);

$(document).ready(function(){
	//Dynamically assigns height to necessary elements on load/resize, flags if the user is on mobile, collects current page and search state
	textSearchField=document.getElementById("textSearch");
	
	$(window).on('load', function() {
		var newHeight = $(window).height() - $("#resultContainer").offset().top-60;
		if (path.indexOf("manual")>-1) {
			newHeight += 60;
		}
		$("#resultContainer").height(Math.max(newHeight,90));//90 allows there to always be at least 3 items showing
	});
	
	$(window).on('resize', function() {
		var newHeight = $(window).height() - $("#resultContainer").offset().top-60;
		if (path.indexOf("manual")>-1) {
			newHeight += 60;
		}
		$("#resultContainer").height(Math.max(newHeight,90));
	});	
	
	window.mobilecheck = function() {
		//Flags if the user is on mobile
		var check = false;
		//Regular expression taken from stack overflow.  Used to determine if the UserAgent string is from a mobile device.
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	};
	
	//Collects current page and search state
	var state=window.history.state;
	if(state) {
		pageNum=parseInt(state.pageNum);
		prevSearchTerm=state.searchTerm;
		textSearchField.value=state.searchTerm;
		getResults(state.searchTerm, state.isAuth);
	}
	var passedSearch=getParameterByName("search",window.url);
	var passedIsAuth=getParameterByName("isAuth", window.url);
	if(passedSearch) {
		textSearchField.value=passedSearch;
		getResults(passedSearch,passedIsAuth);
	}
	getDropDownResults(masterList);
});

function initSearch() {
	//On submission (Enter key-press or Search icon click) get results of input search
	document.formMain.addEventListener('submit', function(e) {
		e.preventDefault();
		getResults(textSearchField.value);
	});
	textSearchField.focus();
}

/*SamR 2025-07-28
document.cookie returns "_ga=###; isAuthenticated=true; _gid=###"
If we don't have a space in the split after ; then we will never match to the cookie.
*/
function getCookie(name) {
	return document.cookie //Grab and format cookie
		.split('; ')
		.find(row => row.startsWith(name + '='))
		?.split('=')[1] ?? undefined;
}

var isAuth=getCookie("isAuthenticated") === "true" ? 1:0; //Creating a local variable to represent the state of the cookie

function getResults(searchTerm,isAuth) { 
	if(isAuth!==0 && isAuth!==1) {
		isAuth=getCookie("isAuthenticated") === "true" ? 1 : 0;
	}
	var regex=/\d{3}\d?/;
	var version=parseInt(path.match(regex));
	var url="https://search.opendental.com/manual"; //Begin building request url
	if(window.location.protocol==="file:"){//debug
		url="http://localhost:5000/manual";
		//isAuth=1; //You can uncomment this (without committing) when testing local because there's no other way to set it.
	}
	if (prevSearchTerm!=searchTerm) { //Reset the page number if the search term has changed
		pageNum=0;
	}
	if(typeof pageNum=='undefined'){
		 pageNum=0;
	}
	var encodedSearchTerm=encodeURIComponent(searchTerm); //Format search input for request url building (space changes to %20, etc.)
	prevSearchTerm=searchTerm;
	if (version) {
		if (version!=-1) {
			url+=version;
		}
	} 
	else {
		version="";
	}
	var isMobile=window.mobilecheck() ? 1 : 0;
	url+="/index?searchTerm="+encodedSearchTerm+"&pageNum="+pageNum+"&isAuth="+isAuth+"&isMobile="+isMobile; //Add search parameters to request url
	$.ajax({//Send search request to Search API. On success format the response to html list.
		type: "POST",
		url: url,
		cache: false,
		success: function(data) {
			//change the url without refreshing the page, so that when users go back to our page, they can resume from what they searched for
			window.history.pushState({"searchTerm":searchTerm,"pageNum":pageNum,"isAuth":isAuth},"Searched "+searchTerm,window.location.pathname.split("/").pop());
			var results=$('#results');
			results.empty();
			if (searchTerm!="") {
				/*
				SamR 2025-07-02
				Loops through each value in the list of results returned by Search API
				Response format:
				- List of objects, max size 21.
				- Each object before the last will have the following attributes:
				  - versionNumber,
					pageName,
					displayText,
					fileName,
					isManualPage,
					isInSite
				- Last object contains metadata with the following attributes:
				    numberOfResults,
				    isManualPage
				    currentPage,
				    numbeOfPages
				Checks:
				Is it a page or is it metadata?
				  1. If it's a page:
					   a. Is it a webinar?
					   b. Is it already a full url path OR is it a relative path?
					   c. Is it inSite?
					   d. Is it a search from help?
				  2. If it's metadata from the last row:
					   a. Grab number of results and pages from metadata
					   b. Set up pagination
				*/
				$.each(data, function(key, result) { //loop through each of the results
					if (result.isManualPage) { //This is a confusing name for the variable. It just means it's an actual link instead of the number of results at the end.
						//Build the list item
						var li=$('<li>');
						var p=$('<p>');
						//Having href be result.pageUrl causes local testing to link to the live site.
						if (result.fileName.indexOf("http")>-1 //If "http" is in filename (i.e. full link)
								|| result.fileName.indexOf("../")>-1) //If "../" is in filename (i.e. ../site/) (must include .html)
						{
							li.append($('<a>').attr('class','searchItem').attr('href',result.pageUrl).html(result.pageName));//Title hypertext
							p.attr('class','linkWrapper').append($('<a>').attr('class','link').attr('href',result.pageUrl).append(result.pageUrl));//Green url
						}
						else if (result.isInSite==1 //site
								|| result.isInSite==2) //siteWithTree
						{
							li.append($('<a>').attr('class','searchItem').attr('href',result.pageUrl).html(result.pageName));
							p.attr('class','linkWrapper').append($('<a>').attr('class','link').attr('href',result.pageUrl).append(result.pageUrl));
						}
						else if(window.location.pathname.includes("searchhelp.html")){//called from help
							li.append($('<a>').attr('class','searchItem').attr('href',result.pageUrl).html(result.pageName));
							p.attr('class','linkWrapper').append($('<a>').attr('class','link').attr('href',result.pageUrl).append(result.pageUrl));
						}
						else {//called from site or manual
							li.append($('<a>').attr('class','searchItem').attr('href',result.pageUrl).html(result.pageName));
							p.attr('class','linkWrapper').append($('<a>').attr('class','link').attr('href',result.pageUrl).append(result.pageUrl));
						}
						/*
						If we want to get as much JS into C# as possible, we could just use C# to create the list instead of doing it here.
						This would mean that we don't have to have 21 items in the response, just one or two containing the single list of 20 and the metadata
						*/
						li.append(p);
						li.append($('<p>').attr('class','desc').append(result.displayText));
						results.append(li);
					} 
					else { //The last object in the returned json is metadata that contains the number of results and page number
						numResults=result.numberOfResults; 
						var isMobile=window.mobilecheck();
						var numPages=result.numberOfPages; //There will be 20 results per page
						var pagination=$('<div>');
						var total=$('<p>').attr('style','margin-bottom:15px;');
						var startPage=1;
						var endPage=10;
						if (isMobile) {
							pagination.css("padding-left","50px");
							endPage=5;
							if (result.currentPage>=3) {
								startPage=result.currentPage-2;
								endPage=result.currentPage+2;
								if (endPage >= numPages) {
									endPage=result.numberOfPages;
								}
							}
							if (result.numberOfPages<=5) {
								startPage=1;
								endPage=result.numberOfPages;
							}
						} 
						else {
							//determines how many pages to show in the paginator
							if (result.currentPage>=7) {
								startPage=result.currentPage-5;
								endPage=result.currentPage+4;
								if (endPage >= numPages) {
									endPage=result.numberOfPages;
								}
							}
							if (result.numberOfPages<=9) {
								startPage=1;
								endPage=result.numberOfPages;
							}
						}
						
						//set the value for total results 
						total.attr('class','totalResults');
						if (result.currentPage>1) {
							total.append('Page '+result.currentPage+', ');
						}
						total.append('Total results: '+numResults);
						//set up paginator
						pagination.attr('id','pagination');
						var i;
						for (i = startPage; i <= endPage; i++) { //build the pagination buttons
							var input=$('<input>');
							input.attr('type','button');
							if (i==result.currentPage) { //the current page color should be black
								input.attr('style','color:#000;text-decoration:none;cursor:text;');
							} 
							else { //the user should be able to jump to any page by clicking on the button
								input.attr('onclick','getJumpPageResults(this,"'+searchTerm+'")');
							}
							input.attr('value',i);
							pagination.append(input);
						}
						
						if (result.currentPage < numPages && !isMobile) { //draw the next button
							pagination.append($('<input>').attr('type','button').attr('value','Next').attr('style','margin-left:53px;cursor:pointer;').attr('onclick','getNextPageResults("'+searchTerm+'")')); 
						} 
						else if (result.currentPage < numPages){
							pagination.append($('<input>').attr('type','button').attr('value','Next').attr('style','margin-left:10px;cursor:pointer;').attr('onclick','getNextPageResults("'+searchTerm+'")')); 
						}
						if (result.currentPage > 1 && !isMobile) { //draw the prev button
							pagination.prepend($('<input>').attr('type','button').attr('value','Prev').attr('style','margin-right:53px;cursor:pointer;').attr('onclick','getPrevPageResults("'+searchTerm+'")')); 
						} 
						else if (result.currentPage > 1){
							pagination.prepend($('<input>').attr('type','button').attr('value','Prev').attr('style','margin-right:10px;cursor:pointer;').attr('onclick','getPrevPageResults("'+searchTerm+'")')); 
						}
						results.append(pagination);
						results.prepend(total);
					}
				});
			} 
		}
	});
}

function getDropDownResults(masterList) {
	var currentFocus;
	//start building the drop down list
	//Drop down list is the suggestions
	textSearchField.addEventListener('input', function(e) {
		//set the bottom of the search box back to flat, so that it looks good
		textSearchField.style.borderBottomLeftRadius="0px";
		textSearchField.style.borderBottomRightRadius="0px";
		var divList, divItem, i, val=this.value;
		closeAllLists(); //close any list that is open, if any
		if (!val) { 
			return false;
		}
		currentFocus=-1;
		//build the drop down
		divList=document.createElement("DIV");
		divList.setAttribute("id", this.id+"dropDown-list");
		divList.setAttribute("class","dropDown-items");
		divList.setAttribute("style","width:"+(textSearchField.offsetWidth-2)+"px;");
		var count=0; //keeps track of how many items have been added to the drop down
		for (i = 0; i < masterList.length; i+=2) { //loop through each of the search terms
			if (masterList[i].substr(0, val.length).toUpperCase()==val.toUpperCase()) { //create each search term that is found
				divItem=document.createElement("DIV");
				divItem.innerHTML="<strong>"+masterList[i].substr(0,val.length)+"</strong>";
				divItem.innerHTML+=masterList[i].substr(val.length);
				divItem.innerHTML+="<input type='hidden' value='"+masterList[i]+"'>"; //this is keeps track of the value that will be added to the textSearchField
				divItem.addEventListener("click", function(e) {
					textSearchField.value=this.getElementsByTagName("input")[0].value;
					closeAllLists();
					getResults(this.getElementsByTagName("input")[0].value);
				});
				if (count <= 13) { //number of items to show up in drop down
					count++;
					divList.appendChild(divItem);
				}
			}
		}
		if (count==0) {
			textSearchField.style.borderBottomLeftRadius="";
			textSearchField.style.borderBottomRightRadius="";
		}
		else {
			this.parentNode.appendChild(divList);
		}
	});
	
	textSearchField.addEventListener("keyup", function(e) {//allow arrow keys to navigate the drop down
		var list=document.getElementById(this.id+'dropDown-list');
		if (list) {
			list=list.getElementsByTagName("div");
		}
		if (e.keyCode==40) { //arrow key down
			currentFocus++;
			addActive(list);
			textSearchField.text=list[currentFocus].getElementsByTagName("input")[0].value;
			textSearchField.value=list[currentFocus].getElementsByTagName("input")[0].value;
		}
		else if (e.keyCode==38) { //arrow key up
			currentFocus--;
			addActive(list);
			textSearchField.text=list[currentFocus].getElementsByTagName("input")[0].value;
			textSearchField.value=list[currentFocus].getElementsByTagName("input")[0].value;
		}
		else if (e.keyCode==13) { //enter key
			if (currentFocus>-1) {
				if (list) {
					list[currentFocus].click();
					closeAllLists(list[currentFocus]);
					textSearchField.text=list[currentFocus].getElementsByTagName("input")[0].value;
					textSearchField.value=list[currentFocus].getElementsByTagName("input")[0].value;
				}
			} else {
				closeAllLists(null);
			}
		}
		if (textSearchField.value=="") {
			textSearchField.style.borderBottomLeftRadius="";
			textSearchField.style.borderBottomRightRadius="";
		}
	});
	//When the search box has focus, it needs to have box shadow
	textSearchField.addEventListener("focus", function(e) {
		textSearchField.style.boxShadow="0px 3px 5px lightgray";
	});
	//when the search box is clicked, it needs to show the drop down again
	textSearchField.addEventListener("click", function(e) {
		if (textSearchField.value!="") {
			textSearchField.dispatchEvent(inputEvent);
		}
	});
	//this sets the active item from the drop down list
	function addActive(list) { 
		if (!list) {
			return false;
		}
		removeActive(list);
		if (currentFocus>=list.length) { //wrap back around to the beginning 
			currentFocus=0;
		}
		if (currentFocus < 0) { //wrap back around to the end
			currentFocus=(list.length-1); 
		}
		list[currentFocus].classList.add("dropDown-active");
	}
	//this removes the active item from the drop down
	function removeActive(list) {
		var i;
		for (i = 0; i < list.length; i++) {
			list[i].classList.remove("dropDown-active");
		}
	}
	//closes the list on the page
	function closeAllLists(element) {
		var elementList = document.getElementsByClassName("dropDown-items");
		var i;
		for (i = 0; i < elementList.length; i++) {
			if (element != elementList[i] && element != textSearchField) {
				elementList[i].parentNode.removeChild(elementList[i]);
			}
		}
	}
	//closes the list when the area loses focus, basically
	document.addEventListener("click", function(e) {
		closeAllLists(e.target);
		//If there is a click that would cause the textSearch element to lose focus, round the corners again.
		if(e.target.id!=textSearchField.id) {
			textSearchField.style.borderBottomLeftRadius="";
			textSearchField.style.borderBottomRightRadius="";
			textSearchField.style.boxShadow="";
		}
	});
}

function getNextPageResults(searchTerm) {
	pageNum+=1;
	getResults(searchTerm);
	toTop();
}

function getPrevPageResults(searchTerm) {
	pageNum-=1;
	getResults(searchTerm);
	toTop();
}

function getJumpPageResults(element,searchTerm) {
	pageNum=element.value-1; //this needs to subtract 1 here, because the search api is expecting 0 through (numPages-1) instead of 1 through numPages
	getResults(searchTerm);
	toTop();
}

//gets the parameter from the url
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function toTop() {
	setTimeout(function() {document.getElementById("resultContainer").scrollTop=0},150);
}

//Create Google Analytics cookie
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })
(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-77240952-1', 'auto');
ga('send', 'pageview');