// ==UserScript==
// @name         BLS SPAIN Ninou VISA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nino_benslimaneVisa
// @match        *://*.blsspainvisa.com/*
// @grant        none
// ==/UserScript==
//----------------------------------------------------------------
//Ù„Ø§ ØªÙ†Ø³Ù‰ Ù…ØªØ§Ø¨Ø¹Ø© Ù„Ù‚Ù†Ø§ØªÙŠ
//https://www.youtube.com/@nino_ben_dz
//================================================================
var AppointmentTime = "11:30 - 11:45";        // Appointment Time
var lastNames ="Nino";                // LEST NAME
var firstNames ="Benslimane_Visa2023";              //FURST NEME
var births ="1986-04-18";                  //Date Of Birth
var passNumbers ="142745658";        //Passport Number
var issueDates ="2014-04-22";              //Passport Issue Date
var expiryDates ="2024-04-21";             //Passport Expiry Date
var pptissuePalaces ="NAAMA";          //Passport Issue Place
//================================================================
$('#app_time').val(AppointmentTime);
$('#first_name').val(firstNames);
$('#last_name').val(lastNames);
$('#dateOfBirth').datepicker("update" ,births);
$('#passport_no').val(passNumbers);
$('#pptIssueDate').datepicker("update" ,issueDates);
$('#pptExpiryDate').datepicker("update" ,expiryDates);
$('#pptIssuePalace').val(pptissuePalaces);
$("#passportType").selectedIndex = "7";
//================================================================
   let code = "";
   const Days = [];
   for(var i = 0; i<=document.scripts.length; i++){
       if (document.scripts[i].text.indexOf("available_dates") != -1) {
       code = document.scripts[i].text;
           braihimvisa();
       }
   }
   function brahimvisa() {
   var bgn = code.indexOf("available_dates");
   var end = code.indexOf("fullCapicity_dates");
   var table = code.slice(bgn+20, end-9);
   if (table !== ""){
       var datee = table.slice(0,10);
       var dd = datee.slice(0,2);
       var mm = datee.slice(3,5);
       var yyyy = datee.slice(6,10);
       var dateeFin = [yyyy, mm, dd];
       var finDate= dateeFin.join("-");
       if($("app_date").val().length === 0 && finDate !== "")
       {
           $('#app_date').datepicker("update" ,finDate);

       }else
       {
           $('#first_name').val(firstNames);
           $('#last_name').val(lastNames);
           $('#dateOfBirth').datepicker("update" ,births);
           $('#passport_no').val(passNumbers);
           $('#pptIssueDate').datepicker("update" ,issueDates);
           $('#pptExpiryDate').datepicker("update" ,expiryDates);
           $('#pptIssuePalace').val(pptissuePalaces);
           $("#passportType").selectedIndex = "7";
           $("#VisaTypeId").selectedIndex = "1";
           $("#app_time").selectedIndex = $("#'app_time").length-1;

       }
   }
   if($("#app_date").val().length === 0)
       {
           setTimeout(function(){window.location.reload(1);}, 50* 1000);;
       }
}
//   ----------------------------------------------------------------------------------------------------
Footer
