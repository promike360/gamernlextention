//Created by ProMike360
//Created on 29-08-2016
var extensionInf = {
	version:'0.1 (Test-Release)',
	creator:'ProMike360',
	timer: 3000
};

//Telling to the console the script is running
console.log('Gamer.nl | Review redesign = Running');
console.log('Version = ' + extensionInf.version);
console.log('Created by ' + extensionInf.creator);
console.log('Timer set to: ' + extensionInf.timer)

//This code will run when the page is loaded
$(document).ready(function(){
    //After 3sec. the code will be activated (because when this code runs, the page is not fully loaded (this has something to do with the gamer.nl website))
    setTimeout(runScript, extensionInf.timer);
});

function runScript() {
    
    //Creating some variables to store their values for later
    var rsReview = $(".rs-review").html();
    var articleSocial = $(".article-social").html();
    var sections = $(".sections").html();
    
    //Removing the content of the 'Conclusie'
    sections = sections.replace(rsReview, '');
    
    //Replacing the social part under the review with the 'Conclusie'
    sections = sections.replace(articleSocial, rsReview);
    
    //Replace the old code with the new code
    $(".sections").html(sections);
    
    //Adding some css to the 'Conclusie' to make the design right
    $(".article-social").attr('style', 'padding: 0px !important;');
}
