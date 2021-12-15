let surveyorData = [[ 'Company code', 'Company name' ],
[ 'NEW', 'New Wide Enterprise Co., Ltd' ],
[ 'HBF', 'Huge Bamboo Enterprise Co., Ltd' ],
[ 'DAL', 'Da Luen Vietnam Co., Ltd' ],
[ 'HUE', 'Hung Yen Knitting And Dyeing Co., Ltd' ],
[ '', 'REGA' ]]

let quizData = [["1","D1","QA","AT1","I have learned skills in the past 12 months that will help me get a better job in the future.","Trong 12 tháng vừa qua, tôi đã học được các kỹ năng giúp tôi có được công việc tốt hơn trong tương lai."],
["2","D2&D1","QA","AT1","Great effort is made to get the opinions of employees in this factory.","Công ty có rất nhiều nỗ lực để nhận được ý kiến đóng góp của người lao động trong nhà máy."],
["3","D2&D3","QA","AT1","When I face a challenge at work my supervisor does not help me resolve it.","Khi tôi gặp phải khó khăn trong công việc, cán bộ quản lý không hỗ trợ tôi giải quyết vấn đề."],
["4","D3","QA","AT1","The stress associated with my job is acceptable.","Áp lực công việc của tôi hiện tại là chấp nhận được."],
["5","D3&D5","QA","AT1","I get sick often.","Tôi thường xuyên bị ốm."],
["6","D4&D3","QA","AT1","I am able to meet my family's financial needs.","Tôi có thể đáp ứng nhu cầu tài chính của gia đình mình"],
["11","D7","QN","AT2","Is sexual harassment or sexual touching a concern for workers in your factory?*","Theo bạn, việc quấy rối tình dục hoặc đụng chạm liên quan đến tình dục có đáng lo ngại đối với bạn khi ở công ty không ?"],
]

let answerTypeData = [
    ["1","AT18","AT1","8","Choose not to answer","Lựa chọn khác : 'Chọn không trả lời'."],
    ["2","AT11","AT1","1","Strongly disagree","Rất không đồng ý"],
    ["3","AT12","AT1","2","Disagree","Không đồng ý"],
    ["4","AT13","AT1","3","Somewhat Disagree","Một vài chỗ không đồng ý"],
    ["5","AT14","AT1","4","Neither agree nor disagree","Không đồng ý cũng không phản đối"],
    ["6","AT15","AT1","5","Somewhat Agree","Một vài chỗ đồng ý"],
    ["7","AT16","AT1","6","Agree","Đồng ý"],
    ["8","AT17","AT1","7","Strongly Agree","Rất đồng ý"],
    ["9","AT21","AT2","1","No, not a concern","Không, không có lo ngại nào"],
    ["10","AT22","AT2","2","Yes, a concern but have not spoken about it with others","Có, có lo ngại nhưng chưa nói với ai khác"],
    ["11","AT23","AT2","3","Yes, discussed with co-workers","Có, đã thảo luận với đồng nghiệp"],
    ["12","AT24","AT2","4","Yes, discussed with supervisor or manager","Có, đã thảo luận với người giám sát hoặc người quản lý"],
    ["13","AT25","AT2","5","Yes, discussed with the trade union representative","Có, đã thảo luận với đại diện công đoàn"],
    ["14","AT26","AT2","6","Yes, considered quitting","Có, đã xem xét thôi việc"],
    ["15","AT27","AT2","7","Yes, threatened a strike","Có, đã đe dọa đình công"],
    ["16","AT28","AT2","8","Yes, caused a strike.","Có, đã đình công."]
]



buildQuiz(quizData,'Vi');

let surveyorCode = '';
let currentDate = new Date();
let surveyStartDate = new Date('12/16/2021');
let surveyEndDate = new Date('12/18/2021');
let answerNo = 0;
let totalQues = '';
let answerPer = '';
SessionChecking(surveyStartDate,surveyEndDate)

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}


document.getElementById("btn_submit").addEventListener('click',test);
document.getElementById("company--code").addEventListener("input",handleCompanyInput);

//Find item in array
function CompanyChecking(arr, obj) {
    for (var i = 0; i < arr.length; i++) {  
      if (arr[i][0] == obj) return arr[i][1];
    }
}

function SessionChecking(startDate,endDate) {
    if (startDate && endDate) {
        if (currentDate >= startDate && currentDate <= endDate) {
            return true;
        }
        else {
            return false;
        }
    }
}

function handleCompanyInput() {
    var companyInput = document.getElementById("company--code").value;
    var length = companyInput.length;
    if (length == 3) {
        var companyName = CompanyChecking(surveyorData,companyInput.toUpperCase());
        if (companyName) {
            var animation = "Test 1s linear";
            var companyNameEle = document.getElementsByClassName('companyName');
            companyNameEle[0].innerHTML =companyName;
            surveyorCode = companyName;
            var questionContainer = document.querySelectorAll('.container .section.survey-question');
            var action = document.querySelector('.action');
            var progressBar = document.querySelector('.progressBar');
            for (var i = 0; i < questionContainer.length; i ++) {
                questionContainer[i].style.display ='flex';
                questionContainer[i].style.opacity =1;
                questionContainer[i].style.animation = animation;
            }
            action.style.display ='flex';
            action.style.opacity =1;
            action.style.animation = animation;

            //Find session
            var sessionEle = document.getElementsByClassName('session');
            SessionChecking(surveyStartDate,surveyEndDate) === true ?             
                sessionEle[0].innerHTML =`This survey started on ${convertDate(surveyStartDate)} and is scheduled to continue until ${convertDate(surveyEndDate)}`
                :
                sessionEle[0].innerHTML =`The session doesn't exist`;
                
            }

        }
    }






//Test
function test() {
    questionNumber =1;
    const quizContainers = document.querySelectorAll('.quiz');
    const answerContainers = document.querySelectorAll('.rating');
    const inputNo = answerContainers[0].querySelectorAll('input');
    console.log("Rating: ", answerContainers[0],inputNo[1].checked);
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var footer = document.querySelector('footer');
    var popup = document.getElementById('popup');
    // document.getElementsByClassName('progress-bar')[0].style.width = "50%";
    var progressBar = document.getElementsByClassName('progress-bar')[0];
    header.style.filter= "blur(20px)";
    main.style.filter= "blur(20px)";
    footer.style.filter= "blur(20px)";
    progressBar.style.width ="125%";
    popup.classList.add('active');

}

function refeshPage() {
    location.reload();
}

function buildQuiz(questionList,lang) {
    var output = [];
    if (questionList && questionList.length > 0) {
        questionList.map((item,index) => {
            var html = '';
            var answerTypeList = buildAnswerType(answerTypeData,item[3]);
            if (answerTypeList && answerTypeList.length > 7) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[7].value}" value="${answerTypeList[7].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[7].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/dead.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[7].valueEn: answerTypeList[7].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 0) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[0].value}" value="${answerTypeList[0].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[0].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/in-love.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[0].valueEn: answerTypeList[0].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 1) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[1].value}" value="${answerTypeList[1].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[1].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/happy.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[1].valueEn: answerTypeList[1].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 2) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[2].value}" value="${answerTypeList[2].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[2].value}">
                <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/wink.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[2].valueEn: answerTypeList[2].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 3) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[3].value}" value="${answerTypeList[3].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[3].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/nerd.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[3].valueEn: answerTypeList[3].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 4) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[4].value}" value="${answerTypeList[4].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[4].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/nerd.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[4].valueEn: answerTypeList[4].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 5) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[5].value}" value="${answerTypeList[5].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[5].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/nerd.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[5].valueEn: answerTypeList[5].valueVi}</h4>
                </label>`
            }
            if (answerTypeList && answerTypeList.length > 6) {
                html += 
                `<input type="radio" name="" id="${index&answerTypeList[6].value}" value="${answerTypeList[6].value}" onchange="handleOnChangeInput(this);">
                <label for="${index&answerTypeList[6].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/nerd.png" alt="">
                    <h4>${lang === 'En' ? answerTypeList[6].valueEn: answerTypeList[6].valueVi}</h4>
                </label>`
            }
            
        output.push(html);
        console.log("HTML:" ,output);
        })
    }
}


function buildAnswerType(answerTypeList, answerType) {
    let result = [];
    if (answerTypeList && answerType) {
        answerTypeList.map((item,index) => {
            let obj = {};
            if (item[2] === answerType) {
                obj.valueVi = item[5];
                obj.valueEn = item[4];
                obj.id = item[0];
                obj.key = item[1];
                obj.value = item[3];
                result.push(obj);
            } 
        })
    }
    if (result) {
        result.sort(function(a, b) {
            return parseFloat(a.value) - parseFloat(b.value);
        });
    }
    return result;
}