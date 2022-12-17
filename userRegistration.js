function onChange(executionContext) {
    var formContext = executionContext.getFormContext();

    // Signle Line Text 
    var UserFullName = formContext.getAttribute("uitech_name").getValue(); //Get Value 
    formContext.getAttribute("uitech_usernamecopy").setValue(UserFullName); //Set Value


    // Date
    var UserDOB = formContext.getAttribute("uitech_dob").getValue();//Get Value 
    formContext.getAttribute("uitech_dobcoyp").setValue(UserDOB);//Set Value

    // Calculated  (Whole Number)
    var UserTotalAge = formContext.getAttribute("uitech_totalage").getValue();//Get Value 
    formContext.getAttribute("uitech_totalagecopy").setValue(UserTotalAge); //Set Value

    // Contact No.  (Whole Number)
    var UserContact = formContext.getAttribute("uitech_contactno").getValue();//Get Value 
    formContext.getAttribute("uitech_contactnocopy").setValue(UserContact);//Set Value

    // Singl Line Email
    var UserEmail = formContext.getAttribute("uitech_email").getValue();//Get Value 
    formContext.getAttribute("uitech_emailcopy").setValue(UserEmail);//Set Value

    // Two Options
    var BusinessSatuss = formContext.getAttribute("uitech_businessstatus").getValue(true);//Get Value 
    formContext.getAttribute("uitech_copybusinessstatus").setValue(BusinessSatuss);//Set Value

    // Option Set
    var SelectGenders = formContext.getAttribute("uitech_gender").getValue(true);//Get Value 
    formContext.getAttribute("uitech_copygender").setValue(SelectGenders);//Set Value

    // Multi Option Set 
    var ReportingManag = formContext.getAttribute("uitech_reportingmanager").getValue(true);//Get Value 
    formContext.getAttribute("uitech_reportingmanagerscopy").setValue(ReportingManag);//Set Value

    // Lookup (Country)
    var LookupVar = formContext.getAttribute("uitech_country").getValue();//Get Value 
    var ID = LookupVar[0].id; //Get Value 
    var Name = LookupVar[0].name;//Get Value 
    var logicalName = LookupVar[0].entityType;//Get Value 

    formContext.getAttribute("uitech_countrycopy").setValue([{ id: ID, name: Name, entityType: logicalName }]);//Set Value
    formContext.getAttribute("uitech_countrycopy").setValue(LookupVar);//Set Value
}




function autoCalculate(executionContext) {
    var formContext = executionContext.getFormContext();

    var FirstValue = formContext.getAttribute("uitech_simplevalue1").getValue(); //Get Value
    var SecondValue = formContext.getAttribute("uitech_simplevalue2").getValue(); //Get Value

    var Addition = FirstValue + SecondValue // Addition
    var Subtraction = FirstValue - SecondValue //Subtraction
    var Multiplication = FirstValue * SecondValue // Multiplication
    var Divisoion = FirstValue / SecondValue // Divisoion


    formContext.getAttribute("uitech_resultvalue").setValue(Addition); //Addition Set Value 
    formContext.getAttribute("uitech_subtraction").setValue(Subtraction); //Subtraction Set Value
    formContext.getAttribute("uitech_multiplication").setValue(Multiplication); //Multiplication Set Value
    formContext.getAttribute("uitech_divisoion").setValue(Divisoion); //Divisoion Set Value


}




function bankDetils(executionContext) {
    var formContext = executionContext.getFormContext();

    var test = formContext.getAttribute("uitech_bank").getValue();

    if (test == 480520001) {

        formContext.getAttribute("uitech_ifcscode").setValue("IFSCCHD002");


        formContext.getControl("uitech_branch").setDisabled(true);

        // if (typeof (getAttribute.setDisabled) != 'uitech_ifcscode') getAttribute.setDisabled(true);

        formContext.getControl("uitech_bankaddress").setVisible(false);


    }
    else {

            formContext.getAttribute("uitech_ifcscode").setValue("");


            formContext.getControl("uitech_branch").setDisabled(false);


            formContext.getControl("uitech_bankaddress").setVisible(true);



        }
    }
    




















/*function onChange(executionContext) {

    var formContext = executionContext.getFormContext();


    // Signle Line Text
    var UserFullName = formContext.getAttribute("uitech_name").getValue();
    formContext.getAttribute("uitech_usernamecopy").setValue(UserFullName);


    // Date
    var UserDOB = formContext.getAttribute("uitech_dob").getValue();
    formContext.getAttribute("uitech_dobcoyp").setValue(UserDOB);


     var UserTotalAge = formContext.getAttribute("uitech_totalage").getValue();
    formContext.getAttribute("uitech_totalagecopy").setValue(UserTotalAge);
    
    var UserContact = formContext.getAttribute("uitech_contactno").getValue();
    formContext.getAttribute("uitech_contactnocopy").setValue(UserContact);


    var UserEmail = formContext.getAttribute("uitech_email").getValue();
    formContext.getAttribute("uitech_emailcopy").setValue(UserEmail);


   

    var BusinessSatuss = formContext.getAttribute("uitech_businessstatus").getValue(true);
    formContext.getAttribute("uitech_copybusinessstatus").setValue(BusinessSatuss);

    var SelectGenders = formContext.getAttribute("uitech_gender").getValue(true);
    formContext.getAttribute("uitech_copygender").setValue(SelectGenders);


    debugger;
    var ReportingManag = formContext.getAttribute("uitech_reportingmanager").getValue(true);
    formContext.getAttribute("uitech_reportingmanagerscopy").setValue(ReportingManag );
  
   var LookupVar = formContext.getAttribute("uitech_country").getValue();
    var ID = LookupVar[0].id;
    var Name = LookupVar[0].name;
    var logicalName = LookupVar[0].entityType;


    formContext.getAttribute("uitech_countrycopy").setValue([{ id: ID, name: Name, entityType: logicalName }]);
    formContext.getAttribute("uitech_countrycopy").setValue(LookupVar);
};


function autoCalculate(executionContext) {
    var formContext = executionContext.getFormContext();

    var FirstValue = formContext.getAttribute("uitech_simplevalue1").getValue(); //Get Value
    var SecondValue = formContext.getAttribute("uitech_simplevalue2").getValue(); //Get Value

    var Addition = FirstValue + SecondValue // Addition
    var Subtraction = FirstValue - SecondValue //Subtraction
    var Multiplication = FirstValue * SecondValue // Multiplication
    var Divisoion = FirstValue / SecondValue // Divisoion


    formContext.getAttribute("uitech_resultvalue").setValue(Addition); //Addition Set Value 
    formContext.getAttribute("uitech_subtraction").setValue(Subtraction); //Subtraction Set Value
    formContext.getAttribute("uitech_multiplication").setValue(Multiplication); //Multiplication Set Value
    formContext.getAttribute("uitech_divisoion").setValue(Divisoion); //Divisoion Set Value
}*/








