
const genderArrary = ['Male', 'Female'];
const oLevelGradeArray = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'];
const facultyArray = ['Agriculture', 'Arts', 'College of Health Sciences', 'Communication and Information Science','Education', 'Engineering and Technology', 'Environmental Science', 'Law', 'Life Science', 'Management Science', 'Pharmaceutical Science', 'Physical Science', 'Social Science', 'Veterinary Medicine']
const stateArray = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'F.C.T Abuja']

window.addEventListener('load', () => {
    let gender = document.getElementById('gender');
    let options = "<option value = '0'> -- Select your Gender -- </option>";
    genderArrary.forEach((item, index) => {
        options += "<option value=" + (index + 1) + ">" + item + "</option>";
    });
    gender.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let faculty = document.getElementById('faculty');
    let options = "<option value = '0'> -- Select your Faculty -- </option>";
    facultyArray.forEach((item, index) => {
        options += "<option value=" + (index + 1) + ">" + item + "</option>";
    });
    faculty.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let state = document.getElementById('state');
    let options = "<option value = '0'> -- Select your State -- </option>";
    stateArray.forEach((item, index) => {
        options += "<option value=" + (index + 1) + ">" + item + "</option>";
    });
    state.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let wgrades1 = document.getElementById('sub1');
    let wgrades2 = document.getElementById('sub2');
    let wgrades3 = document.getElementById('sub3');
    let wgrades4 = document.getElementById('sub4');
    let wgrades5 = document.getElementById('sub5');
    let options = "<option value = '0'> -- Select your Grade -- </option>";
    oLevelGradeArray.forEach((item, index) => {
        options += "<option value=" + (11 - (index + 1)) + ">" + item + "</option>";
    });
    wgrades1.innerHTML = options;
    wgrades2.innerHTML = options;
    wgrades3.innerHTML = options;
    wgrades4.innerHTML = options;
    wgrades5.innerHTML = options;
    
});

let cand_info = {

    errormessage: '',

    personal_info: {
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        gender: '',
        mobilenumber: '',
        stateOfOrigin: '',
        isValid: function () {
            this.firstname = document.getElementById('fname').value;
            this.lastname = document.getElementById('lname').value;
            this.age = document.getElementById('age').value;
            this.email = document.getElementById('email').value;
            this.gender = document.getElementById('gender').value;
            this.mobilenumber = document.getElementById('mnumber').value;
            this.stateOfOrigin = document.getElementById('state').value;

            if (this.firstname === '' || this.firstname.length < 2) {

                cand_info.errormessage = "Kindly Input Your First Name.";
                return false;
            };
            if (this.lastname === '' || this.lastname.length < 2) {

                cand_info.errormessage = "Kindly Input Your Last Name.";
                return false;
            };
            if (this.age === '' || this.age <= 0) {

                cand_info.errormessage = "Kindly Input Your Age.";
                return false;
            };
            if (this.email === '' || this.email.length < 2 || !this.email.indexOf('@')) {

                cand_info.errormessage = "Kindly Input a valid email address.";
                return false;
            };
            if (this.gender === '0' ) {

                cand_info.errormessage = "Kindly select your gender.";
                return false;
            };
            if (this.mobilenumber === '' || this.mobilenumber.length != 11) {

                cand_info.errormessage = "Kindly Input a valid mobile number.";
                return false;
            };
            if (this.stateOfOrigin === '0') {

                cand_info.errormessage = "Kindly select your state of Origin.";
                return false;
            };
            return true;
        },
    },

    preversity: {
        utme: '',
        putme: '',
        faculty: '0',
        course: '',
        isvalid: function () {
            this.utme = document.getElementById('utme').value;
            this.putme = document.getElementById('putme').value;
            this.faculty = document.getElementById('faculty').value;
            this.course = document.getElementById('course').value;

            if (this.utme <= 0 || this.utme > 400) {
                cand_info.errormessage = "Kindly input a valid Jamb score.";
                return false;
            };
            if (this.putme <= 0 || this.putme > 20) {
                cand_info.errormessage = "Kindly input a valid Post Jamb score.";
                return false;
            };
            if (this.faculty === '0') {
                cand_info.errormessage = "Kindly select your faculty of study";
                return false;
            };
            if (this.course === '' || this.course.length < 2) {
                cand_info.errormessage = "Kindly Input a valid course of study";
                return false;
            };
            return true;
        }
    },

    oLevel : {
        sitting: '',
        mathematics: '0',
        english: '0',
        sub1id: '',
        sub1score: '0',
        sub2id: '',
        sub2score: '0',
        sub3id: '',
        sub3score: '0',
        
        isvalid: function () {
            this.sitting = document.getElementById('sitting').value;
            this.mathematics = Number(document.getElementById('sub1').value);
            this.english = Number(document.getElementById('sub2').value);
            this.sub1id = document.getElementById('s3').value;
            this.sub1score = Number(document.getElementById('sub3').value);
            this.sub2id = document.getElementById('s4').value;
            this.sub2score = Number(document.getElementById('sub4').value);
            this.sub3id = document.getElementById('s5').value;
            this.sub3score = Number(document.getElementById('sub5').value);
            this.waecsum = this.mathematics + this.english + this.sub1score + this.sub2score + this.sub3score;

            if(this.sitting <= 0 || this.sitting > 2) {
                cand_info.errormessage = "Kindly check that your value for number of sitting is inputed correctly and that it is not greater than 2";
                return false;
            }
            
            if (this.mathematics === '0') {
                cand_info.errormessage = "Kindly select your mathematics score";
                return false;
            };
            if (this.english === '0') {
                cand_info.errormessage = "Kindly select your english score";
                return false;
            };
            if (this.sub1score === '0' || this.sub1id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 3rd subject has been selected correctly.";
                return false;
            };
            if (this.sub2score === '0' || this.sub2id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 4th subject has been selected correctly.";
                return false;
            };
            if (this.sub3score === '0' || this.sub3id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 5th subject has been selected correctly.";
                return false;
            };
        },
    },

    evaluation : {
        utme_percent: 0,
        putme_percent: 0,
        oLevel_percent: 0,
        total_percent: 0,
        isvalid : function () {
            this.utme_percent = Math.round(cand_info.preversity.utme / 8);
            this.putme_percent = Number(cand_info.preversity.putme);
            this.oLevel_percent = Math.round((cand_info.oLevel.waecsum/50) * 30);
            this.total_percent = Number(this.utme_percent) + Number(this.putme_percent) + Number(this.oLevel_percent);

            if (cand_info.personal_info.age < 16) {
                cand_info.errormessage = "Unfortunately, your admission cannot be processed simply because you are below the required age of 16."
            }
            if (cand_info.preversity.utme < 180) {
                cand_info.errormessage = "Unfortunately, your admission cannot be processed simply because your Jamb score is below the cut off mark of 180.";
                return false;
            };
            if (cand_info.oLevel.waecsum < 25) {
                cand_info.errormessage = "Unfortunately, your admission cannot be processed simply because your WAEC grades are below the cut off.";
                return false;
            };
            if (this.total_percent >= 80 && this.total_percent <= 100) {
                cand_info.errormessage = "Congratulations! You are qualified for admission based on MERIT. Your overall percentage scare is " + this.total_percent + '%.';
                return false;
            };
            if (this.total_percent >= 75 && this.total_percent < 80) {
                cand_info.errormessage = "Congratulations! You are qualified for admission based on CONCESSION. Your overall percentage scare is " + this.total_percent + '%.';
                return false;
            };
            if (this.total_percent >= 65 && this.total_percent < 75) {
                cand_info.errormessage = "Congratulations! You are qualified for admission based on CATCHMENT. Your overall percentage scare is " + this.total_percent + '%.';
                return false;
            };
            if (this.total_percent >= 60 && this.total_percent < 65) {
                cand_info.errormessage = "Congratulations! You are qualified for admission based on VC's CONSIDERATION. Your overall percentage scare is " + this.total_percent + '%.';
                return false;
            };
            if (this.total_percent >= 59 && this.total_percent >= 0) {
                cand_info.errormessage = "Unfortunately, you are unable to meet the admission's cut off mark as your Overall Percentage Score falls below 60%";
                return false;
            };

        }
    }
};



let go = function submit(checker) {

    let stageId = 0;
    if (stageId === 0) {
        if (!cand_info.personal_info.isValid()) {
        document.getElementById("status").innerHTML = cand_info.errormessage;
        document.getElementById('con2').style.visibility = 'visible';
        document.getElementById('close_button').style.visibility = 'visible';
        };
        if (!cand_info.preversity.isvalid()) {
            document.getElementById("status").innerHTML = cand_info.errormessage;
            document.getElementById("con2").style.visibility = "visible";
            document.getElementById("close_button").style.visibility = 'visible';
        };
        if (!cand_info.oLevel.isvalid()) {
            document.getElementById("status").innerHTML = cand_info.errormessage;
            document.getElementById("con2").style.visibility = "visible";
            document.getElementById("close_button").style.visibility = 'visible';
        };
        if (!cand_info.evaluation.isvalid()) {
            document.getElementById("status").innerHTML = cand_info.errormessage;
            document.getElementById("con2").style.visibility = "visible";
            document.getElementById("close_button").style.visibility = 'visible';
        };
    }; 
    
};

document.getElementById('submit_button').onclick = go;


let close_tab = function close () {
    document.getElementById('con2').style.visibility = 'hidden';
    document.getElementById('close_button').style.visibility = 'hidden';
};

document.getElementById('close_button').onclick = close_tab;