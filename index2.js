
const genderArrary = ['Male', 'Female'];
const oLevelGradeArray = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'];
const facultyArray = ['Agriculture', 'Arts', 'College of Health Sciences', 'Communication and Information Science','Education', 'Engineering and Technology', 'Environmental Science', 'Law', 'Life Science', 'Management Science', 'Pharmaceutical Science', 'Physical Science', 'Social Science', 'Veterinary Medicine']
const stateArray = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'F.C.T Abuja']


let cand_info = {

    errormessage: '',

    personal_info: {
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        gender: 0,
        mobilenumber: '',
        stateOfOrigin: '',
        isValid: function () {
            this.firstname = document.getElementById('fname').value;
            this.lastname = document.getElementById('lname').value;
            this.age = Number(documet.getElementById('age')).value;
            this.email = document.getElementById('email').value;
            this.gender = document.getElementById('gender').value;
            this.mobilenumber = Number(document.getElementById('mnumber')).value;
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
            if (this.email === '' || this.email.length < 2 || this.email.indexOf('@') < 0) {

                cand_info.errormessage = "Kindly Input a valid email address.";
                return false;
            };
            if (this.gender === '' ) {

                cand_info.errormessage = "Kindly select your gender.";
                return false;
            };
            if (this.mobilenumber === '' || this.mobilenumber.length < 11) {

                cand_info.errormessage = "Kindly Input a valid mobile number.";
                return false;
            };
            if (this.stateOfOrigin === '') {

                cand_info.errormessage = "Kindly select your state of Origin.";
                return false;
            };
        }
    },

    preversity: {
        utme: '',
        putme: '',
        faculty: '',
        course: '',
        isvalid: function () {
            this.utme = Number(document.getElementById('utme').value);
            this.putme = Number(document.getElementById('putme').value);
            this.faculty = document.getElementById('faculty').value;
            this.course = document.getElementById('course').value;

            if (this.utme < 0 || this.utme > 400) {
                cand_info.errormessage = "Kindly input a valid Jamb score.";
                return false;
            };
            if (this.putme < 0 || this.putme > 20) {
                cand_info.errormessage = "Kindly input a valid Post Jamb score.";
                return false;
            };
            if (this.faculty === '') {
                cand_info.errormessage = "Kindly select your faculty of study";
                return false;
            };
            if (this.course === '' || this.course.length < 2) {
                cand_info.errormessage = "Kindly Input a valid course of study";
                return false;
            }
        }
    },

    oLevel : {
        mathematics: '',
        english: '',
        sub1id: '',
        sub1score: '',
        sub2id: '',
        sub2score: '',
        sub3id: '',
        sub3score: '',
        waec_score: oLevelGradeArray.map((grade) => {
            switch (grade) {
                case 'A1':
                    return 10;
                case 'B2':
                    return 9;
                case 'B3':
                    return 8;
                case 'C4':
                    return 7;
                case 'C5':
                    return 6;
                case 'C6':
                    return 5;
                case 'D7':
                    return 0;
                case 'E8':
                    return 0;
                case 'F9':
                    return 0;
            };
        }),
        isvalid: function () {
            this.mathematics = document.getElementById('sub1').value;
            this.english = document.getElementById('sub2').value;
            this.sub1id = document.getElementById('s3').value;
            this.sub1score = document.getElementById('sub3').value;
            this.sub2id = document.getElementById('s4').value;
            this.sub2score = document.getElementById('sub4').value;
            this.sub3id = document.getElementById('s5').value;
            this.sub3score = document.getElementById('sub5').value;
            
            if (this.mathematics === '') {
                cand_info.errormessage = "Kindly select your mathematics score";
                return false;
            };
            if (this.english === '') {
                cand_info.errormessage = "Kindly select your english score";
                return false;
            };
            if (this.sub1score === '' || this.sub1id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 3rd subject has been selected correctly.";
                return false;
            };
            if (this.sub2score === '' || this.sub2id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 4th subject has been selected correctly.";
                return false;
            };
            if (this.sub3score === '' || this.sub3id === '') {
                cand_info.errormessage = "Kindly check to see that the details of your 5th subject has been selected correctly.";
                return false;
            };
        }
    },

    evaluation : {
        utme_percent: '',
        putme_percent: '',
        oLevel_percent: '',
        total_percent: '',
        isvalid : function () {
            this.utme_percent = Math.round(cand_info.preversity.utme / 8);
            this.putme_percent = cand_info.preversity.putme;

        }
    }
};

function submit(checker) {
    let error_handle = document.getElementById('status');
    if (checker === 1) {
        if(!cand_info.personal_info.isValid()) {
            error_handle.innerHTML = cand_info.errormessage;
            
        }
    }
}

window.addEventListener('load', () => {
    let gender = document.getElementById('gender');
    let options = "<option value = '0'> -- Select your Gender -- </option>";
    genderArrary.forEach((item, index) => {
        options += "<option value=" + index + 1 + ">" + item + "</option>";
    });
    gender.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let faculty = document.getElementById('faculty');
    let options = "<option value = '0'> -- Select your Faculty -- </option>";
    facultyArray.forEach((item, index) => {
        options += "<option value=" + index + 1 + ">" + item + "</option>";
    });
    faculty.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let state = document.getElementById('state');
    let options = "<option value = '0'> -- Select your State -- </option>";
    stateArray.forEach((item, index) => {
        options += "<option value=" + index + 1 + ">" + item + "</option>";
    });
    state.innerHTML = options;
    
});

window.addEventListener('load', () => {
    let wgrades1 = document.getElementById('sub1');
    let wgrades2 = document.getElementById('sub2');
    let wgrades3 = document.getElementById('sub3');
    let wgrades4 = document.getElementById('sub4');
    let wgrades5 = document.getElementById('sub5');
    let options = "<option value = '0'> -- Select your State -- </option>";
    oLevelGradeArray.forEach((item, index) => {
        options += "<option value=" + index + 1 + ">" + item + "</option>";
    });
    wgrades1.innerHTML = options;
    wgrades2.innerHTML = options;
    wgrades3.innerHTML = options;
    wgrades4.innerHTML = options;
    wgrades5.innerHTML = options;
    
});



