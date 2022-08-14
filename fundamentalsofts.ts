let skills = [""];

skills.push("Java Script");
skills[0] = "HTML";

console.log(skills);

//tuples in ts

const techSkills = ["Java Script",15];

console.log(techSkills);

//Enums in ts


enum Week {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isITSunday(day:Week){
    let isSunday:boolean = false;
    switch(day){
        case Week.Sunday:
            isSunday = true;
            break;
        case Week.Monday:
            isSunday= false;
            break;
        default:
            isSunday= false;
            break;
    }

    return isSunday;
}

console.log(isITSunday(Week.Sunday));


let value:any;
value = 55;
console.log(value);
value = "Rama";
console.log(value);

enum applicationStatus {
    InProcess,
    Processed,
    Rejected
}

console.log(applicationStatus.InProcess)

const checkStatus ={
    appId: 34242,
    appStatus : applicationStatus.Rejected,
    comments : "resubmit the aadhar card..."
}

function checkAppStatus(){
if(checkStatus.appStatus === applicationStatus.Rejected ){
    console.log("send an email to the applicant to resubmit aadhar card...")
}
}

checkAppStatus();