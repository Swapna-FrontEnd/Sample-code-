var skills = [""];
skills.push("Java Script");
skills[0] = "HTML";
console.log(skills);
var techSkills = ["Java Script", 15];
console.log(techSkills);
var Week;
(function (Week) {
    Week[Week["Sunday"] = 0] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
})(Week || (Week = {}));
function isITSunday(day) {
    var isSunday = false;
    switch (day) {
        case Week.Sunday:
            isSunday = true;
            break;
        case Week.Monday:
            isSunday = false;
            break;
        default:
            isSunday = false;
            break;
    }
    return isSunday;
}
console.log(isITSunday(Week.Sunday));
var value;
value = 55;
console.log(value);
value = "Rama";
console.log(value);
var applicationStatus;
(function (applicationStatus) {
    applicationStatus[applicationStatus["InProcess"] = 0] = "InProcess";
    applicationStatus[applicationStatus["Processed"] = 1] = "Processed";
    applicationStatus[applicationStatus["Rejected"] = 2] = "Rejected";
})(applicationStatus || (applicationStatus = {}));
console.log(applicationStatus.InProcess);
var checkStatus = {
    appId: 34242,
    appStatus: applicationStatus.Rejected,
    comments: "resubmit the aadhar card..."
};
function checkAppStatus() {
    if (checkStatus.appStatus === applicationStatus.Rejected) {
        console.log("send an email to the applicant to resubmit aadhar card...");
    }
}
checkAppStatus();
//# sourceMappingURL=fundamentalsofts.js.map