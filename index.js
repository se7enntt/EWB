let allcodesData = [
["id","KeyMap","type","valueEn","valueVi"],
["1","D1","DOMAIN","Skills","Xây dựng Kỹ năng"],
["2","D2","DOMAIN","Communication","Giao tiếp"],
["3","D3","DOMAIN","Stress","Căng thẳng"],
["4","D4","DOMAIN","Benifits","Phúc lợi"],
["5","D5","DOMAIN","Health and Safety","Sức khỏe và An toàn"],
["6","D6","DOMAIN","Social Connect","Kết nối xã hội"],
["7","D2&D1","DOMAIN","Communication & Skills","Giao tiếp, Xây dựng Kỹ năng"],
["8","D2&D3","DOMAIN","Communication & Stress","Giao tiếp, Căng thẳng"],
["9","D3&D5","DOMAIN","Stress & Health and Safety","Căng thẳng, Sức khỏe & An toàn"],
["10","D4&D3","DOMAIN","Benifits & Stress","Phúc lợi, Căng thẳng"],
["11","D2&D6","DOMAIN","Communication & Social Connect","Giao tiếp, Kết nối xã hội"],
["12","D2&D5","DOMAIN","Communication & Health and Safety","Giao tiếp, Sức khỏe & An toàn"],
["13","D4&D1","DOMAIN","Benifits & Skills","Phúc lợi, Xây dựng Kỹ năng"],
["14","D7","DOMAIN","Sexual harassment","Quấy rối tính dục"],
["15","QA","TOQ","Affirmation questions","Câu hỏi khẳng định"],
["16","QN","TOQ","Negative questions","Câu hỏi phủ định"],
["17","QUES","GENDER","Gender: ","Giới tính:"],
["18","M","GENDER","Male","Nam"],
["19","F","GENDER","Female","Nữ"],
["20","QUES","JOBROLE","Job role ","Vị trí công việc hiện tại"],
["21","TM","JOBROLE","Team Member","Thành viên"],
["22","TL","JOBROLE","Team Leader","Tổ trưởng"],
["23","GL","JOBROLE","Group Leader","Xưởng trưởng"],
["24","QUES","EXP","How long have you been working at this factory","Bạn đã làm việc ở nhà máy này được bao lâu rồi? "],
["25","LT6","EXP","Less than 6 months","Dưới 6 tháng"],
["26","MT6","EXP","6 months - 1 year","Từ 6 tháng đến dưới 1 năm"],
["27","MT1","EXP","More than 1 year to 3 years","Từ 1 năm đến dưới 3 năm"],
["28","MT3","EXP","More than 3 years to 10 years","Từ 3 năm đến dưới 10 năm"],
["29","MT10","EXP","More than 10 years","Trên 10 năm"],
["30","QUES","RS","What is your relationship status","Bạn vui lòng cho biết về tình trạng hôn nhân ?"],
["31","RSM","RS","Married","Đã kết hôn"],
["32","RSS","RS","Single","Độc thân"],
["33","RSW","RS","Widow","Góa"],
["34","QUES","FD","How many individuals are financially dependent on you?","Có bao nhiêu người phụ thuộc vào tài chính của bạn ?"],
["35","FD0","FD","0","0"],
["36","FD1","FD","44198","44198"],
["37","FD2","FD","More than 2","Hơn 2"],
["38","THANKYOU","EWB","Thank you for taking this survey. Your response is anonymous and confidential. ","Câu kết luận: Cảm ơn bạn đã tham gia khảo sát này. Phản hồi của bạn được ẩn danh và bí mật. "],
["39","INTRO","EWB","We would like you to participate in this survey. Your employer is interested in your opinions on your engagement and well-being. Your response is anonymous and confidential. Your honest and sincere feedback is valued and appreciated.","Giới thiệu: Chúng tôi mong muốn bạn tham gia khảo sát này. Ban giám đốc quan tâm đến ý kiến của bạn về mức độ gắn kết và chất lượng cuộc sống. Câu trả lời của bạn được ẩn danh và bảo mật. Sự phản hồi trung thực và thẳng thắn của bạn được tôn trọng và đánh giá cao."],
["40","EXPLAIN","EWB","All experience questions have the following 7 point Likert scale answer options unless otherwise noted.  1=Strongly disagree, 2=Disagree, 3=Somewhat Disagree, 4=Neither agree nor disagree, 5=Somewhat Agree, 6=Agree, 7=Strongly Agree.  All questions will also have a 'choose not to answer option.'","Tất cả các câu hỏi đều có các tùy chọn trả lời theo thang điểm từ 1 đến 7 (trừ khi có lưu ý khác). 1=Rất không đồng ý, 2=Không đồng ý, 3=Một vài chỗ không đồng ý,4=Không đồng ý cũng không phản đối, 5=Một vài chỗ đồng ý, 6=Đồng ý, 7=Rất đồng ý.  Tất cả các câu hỏi cũng đều có tùy chọn 'chọn không trả lời'."],
["41","QT1","QUESTIONTYPE","Question type 1","Câu hỏi lựa chọn loại 1"],
["42","QT2","QUESTIONTYPE","Question type 2","Câu hỏi lựa chọn loại 2"],
["43","AT1","ANSWERTYPE","Answer type 1","Câu trả lời lựa chọn loại 1"],
["44","AT2","ANSWERTYPE","Answer type 2","Câu trả lời lựa chọn loại 2"],
["45","S1","EWB","Part 1","Phần 1"],
["45","S2","EWB","Part 2","Phần 2"],
["46","TITLE","EWB","ENGAGEMENT and WELLBEING","Khảo sát mức độ hài lòng của nhân viên"],
["48","ST","EWB","This survey started on","Khảo sát bắt đầu từ"],
["49","EN","EWB","and is scheduled to continue until","và kế hoạch tiếp tục cho đến "],
]

let surveyorData = [
  ["Company code", "Company name"],
  ["NEW", "New Wide Enterprise Co., Ltd"],
  ["HBF", "Huge Bamboo Enterprise Co., Ltd"],
  ["DAL", "Da Luen Vietnam Co., Ltd"],
  ["HUE", "Hung Yen Knitting And Dyeing Co., Ltd"],
  ["", "REGA"],
];

let quizData = [
  [
    "1",
    "D1",
    "QA",
    "AT1",
    "I have learned skills in the past 12 months that will help me get a better job in the future.",
    "Trong 12 tháng vừa qua, tôi đã học được các kỹ năng giúp tôi có được công việc tốt hơn trong tương lai.",
  ],
  [
    "2",
    "D2&D1",
    "QA",
    "AT1",
    "Great effort is made to get the opinions of employees in this factory.",
    "Công ty có rất nhiều nỗ lực để nhận được ý kiến đóng góp của người lao động trong nhà máy.",
  ],
  [
    "3",
    "D2&D3",
    "QA",
    "AT1",
    "When I face a challenge at work my supervisor does not help me resolve it.",
    "Khi tôi gặp phải khó khăn trong công việc, cán bộ quản lý không hỗ trợ tôi giải quyết vấn đề.",
  ],
  [
    "4",
    "D3",
    "QA",
    "AT1",
    "The stress associated with my job is acceptable.",
    "Áp lực công việc của tôi hiện tại là chấp nhận được.",
  ],
  ["5", "D3&D5", "QA", "AT1", "I get sick often.", "Tôi thường xuyên bị ốm."],
  [
    "6",
    "D4&D3",
    "QA",
    "AT1",
    "I am able to meet my family's financial needs.",
    "Tôi có thể đáp ứng nhu cầu tài chính của gia đình mình",
  ],
  [
    "11",
    "D7",
    "QN",
    "AT2",
    "Is sexual harassment or sexual touching a concern for workers in your factory?*",
    "Theo bạn, việc quấy rối tình dục hoặc đụng chạm liên quan đến tình dục có đáng lo ngại đối với bạn khi ở công ty không ?",
  ],
];

let answerTypeData = [
  [
    "1",
    "AT18",
    "AT1",
    "8",
    "Choose not to answer",
    "Lựa chọn khác : 'Chọn không trả lời'.",
  ],
  ["2", "AT11", "AT1", "1", "Strongly disagree", "Rất không đồng ý"],
  ["3", "AT12", "AT1", "2", "Disagree", "Không đồng ý"],
  ["4", "AT13", "AT1", "3", "Somewhat Disagree", "Một vài chỗ không đồng ý"],
  [
    "5",
    "AT14",
    "AT1",
    "4",
    "Neither agree nor disagree",
    "Không đồng ý cũng không phản đối",
  ],
  ["6", "AT15", "AT1", "5", "Somewhat Agree", "Một vài chỗ đồng ý"],
  ["7", "AT16", "AT1", "6", "Agree", "Đồng ý"],
  ["8", "AT17", "AT1", "7", "Strongly Agree", "Rất đồng ý"],
  ["9", "AT21", "AT2", "1", "No, not a concern", "Không, không có lo ngại nào"],
  [
    "10",
    "AT22",
    "AT2",
    "2",
    "Yes, a concern but have not spoken about it with others",
    "Có, có lo ngại nhưng chưa nói với ai khác",
  ],
  [
    "11",
    "AT23",
    "AT2",
    "3",
    "Yes, discussed with co-workers",
    "Có, đã thảo luận với đồng nghiệp",
  ],
  [
    "12",
    "AT24",
    "AT2",
    "4",
    "Yes, discussed with supervisor or manager",
    "Có, đã thảo luận với người giám sát hoặc người quản lý",
  ],
  [
    "13",
    "AT25",
    "AT2",
    "5",
    "Yes, discussed with the trade union representative",
    "Có, đã thảo luận với đại diện công đoàn",
  ],
  [
    "14",
    "AT26",
    "AT2",
    "6",
    "Yes, considered quitting",
    "Có, đã xem xét thôi việc",
  ],
  [
    "15",
    "AT27",
    "AT2",
    "7",
    "Yes, threatened a strike",
    "Có, đã đe dọa đình công",
  ],
  ["16", "AT28", "AT2", "8", "Yes, caused a strike.", "Có, đã đình công."],
];

let sessionData = [
  [
    "id",
    "sessionName",
    "description",
    "AppId",
    "surveyorId",
    "startDate",
    "endDate",
  ],
  ["1", "S1", "EWB 2021", "EWB", "HBF", "44543", "44548"],
  ["2", "S1123", "EWB 2021", "EWB", "NEW", "34550", "34550"],
];

function handleSelectOnChange(item) {
  if (item.value != language) {
    language = item.value;
    AppInfoBuild(allcodesData,language);
    quizSelectLoad(allcodesData,language);
    quizload();
    progressBarUpdate(totalQues,answerNo);
  }
}


function ExcelDateToJSDate(serial) {
  var utc_days = Math.floor(serial - 25569);
  var utc_value = utc_days * 86400;
  var date_info = new Date(utc_value * 1000);

  var fractional_day = serial - Math.floor(serial) + 0.0000001;

  var total_seconds = Math.floor(86400 * fractional_day);

  var seconds = total_seconds % 60;

  total_seconds -= seconds;

  var hours = Math.floor(total_seconds / (60 * 60));
  var minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  );
}

// console.log("session Data: ", new Date(ExcelDateToJSDate(sessionData[2][5])));

let surveyorCode = "";
let currentDate = new Date();
let sessionCode = "";
let answerNo = 0;
let totalQues = "";
let answerPer = "";
let sessionstringStart = '';
let sessionstringEnd = '';
let answerData = [];
let answerSelectData = [];
buildAnswerData();

function buildAnswerData() {
  try {
    if (answerData[0]["answer"] !== undefined) {
      
    }
  } catch {
    answerData = quizData;
    answerData.forEach(function(e){
      if (typeof e === "object" ){
        e["answer"] = ""
      }
    });
  }
}


function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();

  var mmChars = mm.split("");
  var ddChars = dd.split("");
  return (
    yyyy +
    "-" +
    (mmChars[1] ? mm : "0" + mmChars[0]) +
    "-" +
    (ddChars[1] ? dd : "0" + ddChars[0])
  );
}

var languageSelector = document.getElementById("select-language");
var language = languageSelector.value;
document.getElementById("btn_submit").addEventListener("click", Submit);
document
  .getElementById("company--code")
  .addEventListener("input", handleCompanyInput);

//Find item in array
function CompanyChecking(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == obj) return [arr[i][0], arr[i][1]];
  }
}

function SessionChecking(startDate, endDate) {
    
  if (
    startDate && endDate) {
        
      if (startDate != "Invalid Date" && endDate != "Invalid Date") {
        if (currentDate >= startDate && currentDate <= endDate) {
            return [true, startDate, endDate];
        }
        else {
            console.log("Your session doesn't exist");
            return [false, startDate, endDate];
        }
    } else {
        console.log("Your date input is not datetime type");
        return false;
    }
  }
}
AppInfoBuild(allcodesData,language);

//Build on info on App
function AppInfoBuild(AllCodeList,lang) {
    let code = "EWB";
    let info = [];
    let InfoArr = AllCodeFiltered(AllCodeList,code);    

    InfoArr.map((item,index) => {
        if (item[1] === 'INTRO') {
            var introTitle = document.getElementsByClassName('intro_title');
            var introContent = document.getElementsByClassName('intro_text');
            var welcome = document.getElementsByClassName('welcome_text');
            var code = document.getElementsByClassName('companyCodeText');
            var btn_submit = document.getElementById('btn_submit');
            var btn_cancel = document.getElementById('btn_cancel');
            
            if (lang === 'Vi') {
                introTitle[0].innerHTML = "Giới thiệu";
                introContent[0].innerHTML = item[4];
                welcome[0].innerHTML = "Chào mừng";
                code[0].innerHTML = "Mã khảo sát";
                btn_submit.textContent ="Gửi đi";
                btn_cancel.textContent ="Hủy";
            }
            if (lang === 'En') {
                introTitle[0].innerHTML = "INTRODUCTION";
                introContent[0].innerHTML = item[3];
                welcome[0].innerHTML = "Welcome";
                code[0].innerHTML = "Company code";
                btn_submit.textContent ="Submit";
                btn_cancel.textContent ="Cancel";
            }
        }

        if (item[1] === 'EXPLAIN') {
            var explainTitle = document.getElementsByClassName('explain_title');
            var explainContent = document.getElementsByClassName('exlain_text');
            if (lang === 'Vi') {
                explainTitle[0].innerHTML = "Giải thích";
                explainContent[0].innerHTML = item[4];
            }
            if (lang === 'En') {
                explainTitle[0].innerHTML = "ANSWER EXPLAINATION";
                explainContent[0].innerHTML = item[3];
            }
        }

        if (item[1] === 'TITLE') {
            var titleText = document.getElementsByClassName('title_text');
            if (lang === 'Vi') {
                titleText[0].innerHTML = item[4];
            }
            if (lang === 'En') {
                titleText[0].innerHTML = item[3];
            }
        }

        if (item[1] === "THANKYOU") {
            var thankyoutitle = document.getElementsByClassName('thankyou_title');
            var thankyou_content = document.getElementsByClassName('thankyou_content');
            var thankyou_btn = document.getElementsByClassName('thankyou_btn');
            
            if (lang === 'Vi') {
                thankyou_content[0].innerHTML = item[4];
                thankyoutitle[0].innerHTML = "CÁM ƠN";
                thankyou_btn[0].innerHTML = "Quay lại";
            }
            if (lang === 'En') {
                thankyou_content[0].innerHTML = item[3];
                thankyoutitle[0].innerHTML = "THANK YOU";
                thankyou_btn[0].innerHTML = "Back to survey";
            }
        }

        
        if (item[1] === 'S1') {
            var part_1 = document.getElementsByClassName('part_1');
            if (lang === 'Vi') {
                part_1[0].innerHTML = item[4];
            }
            if (lang === 'En') {
                part_1[0].innerHTML = item[3];
            }
        }

        if (item[1] === 'S2') {
            var part_2 = document.getElementsByClassName('part_2');
            if (lang === 'Vi') {
                part_2[0].innerHTML = item[4];
            }
            if (lang === 'En') {
                part_2[0].innerHTML = item[3];
            }
        }
        if (item[1] === 'ST') {
          if (lang === 'Vi') {
              sessionstringStart = item[4];
          }
          if (lang === 'En') {
            sessionstringEnd = item[3];
          }
        }

        if (item[1] === 'EN') {
          if (lang === 'Vi') {
              sessionstringEnd = item[4];
          }
          if (lang === 'En') {
            sessionstringEnd = item[3];
          }
      }
    })
}

function AllCodeFiltered(AllCodeList,filterValue) {
    let result = [];
    AllCodeList.map ((item,index) => {
        if (item[2] === filterValue) {
            result.push(item);
        }
    });
    return result;
}

//Load data from database to App to find the session and surveyor
function InfoLoad(sessionList, surveyorList, surveyorInput) {
  var surveyinfo = CompanyChecking(surveyorList, surveyorInput.toUpperCase());
  if (surveyinfo) {
    for (var i = 1; i < sessionList.length; i++) {
      if (sessionData[i][4] === surveyinfo[0]) {
        var start = new Date(ExcelDateToJSDate(sessionList[i][5]));
        var end = new Date(ExcelDateToJSDate(sessionList[i][6]));
        var sessionValid = SessionChecking(start, end);
        if (sessionValid) {
            var sessionEle = document.getElementsByClassName('session');
            var companyNameEle = document.getElementsByClassName('companyName');
            var valid = document.getElementById('validate');
            if (sessionValid[0]) {
                sessionEle[0].innerHTML =`${sessionstringStart} ${convertDate(sessionValid[1])} ${sessionstringEnd} ${convertDate(sessionValid[2])}`;
                companyNameEle[0].innerHTML =surveyinfo[1];
                surveyorCode = surveyinfo[0];
                sessionCode = sessionData[i][1];
                valid.checked = true;
                quizload();
                
            }
            else {
                companyNameEle[0].innerHTML ='';
                surveyorCode = '';
                if(language === 'En') {
                  sessionEle[0].innerHTML =`The session doesn't exist`;
                }
                if(language === 'Vi') {
                  sessionEle[0].innerHTML =`Không tìm thấy khảo sát`;
                }
                valid.checked = false;
                quizload();
            }
        }
        }
        }
    }
}

function quizload() {
  var valid = document.getElementById('validate');
  var questionContainer = document.querySelectorAll('.container .section.survey-question');
  var action = document.querySelector('.action');
  var progressBar = document.querySelector('.progressBar');
  if (valid.checked === true) {
    buildQuiz(answerData, language);
    for (var i = 0; i < questionContainer.length; i ++) {
        questionContainer[i].classList.add('active');
    }
    action.classList.add('active');
    progressBar.classList.add('active');
  }
  else {
    for (var i = 0; i < questionContainer.length; i ++) {
      questionContainer[i].classList.remove('active');
  }
  action.classList.remove('active');
  progressBar.classList.remove('active');
  }
    
}



function handleCompanyInput() {
  var companyInput = document.getElementById("company--code").value;
  var length = companyInput.length;
  if (length == 3) {
    InfoLoad(sessionData, surveyorData, companyInput);
    return true;
  } else {
    return false;
  }
}
function progressBarUpdate(totalQues,totalAnswer) {
  let progressBar = document.getElementsByClassName("progress-bar");
  let progressAnswer = document.getElementsByClassName("progress__answer");
  let progressPercentage = document.getElementsByClassName("progress__percentage");
  
  if (totalQues > 0) {
    progress = Math.round((totalAnswer/totalQues) * 100);
    progressBar[0].style.width = `${progress}%`;
    progressPercentage[0].innerText =  `${progress}%`;
    if (language === 'Vi') {
      progressAnswer[0].innerText = `Trả lời: ${totalAnswer} / ${totalQues}`;
    }
    if (language === 'En') {
      progressAnswer[0].innerText = `Answered: ${totalAnswer} / ${totalQues}`;
    }
  }
  
}


function handleOnChangeInput(item) {
  var answerContainers = document.querySelectorAll('.rating');
  answerNo = 0;
  for (var i = 0; i< answerData.length; i++) {
    if (answerData[i][0] === item.name) {
      var answerContainer = answerContainers[i];
      const selector = `input[name="${item.name}"]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer) {
        answerData[i]["answer"] = userAnswer;
      }
    }
    if (answerData[i]["answer"]) {
      answerNo +=1;
    }
  // console.log(userAnswer);
  }
  progressBarUpdate(totalQues,answerNo);
}

function answerQuizValid() {
  var NoanswerQuizInValid = 0;
  var answerEle = document.querySelectorAll('.rating');
  if (answerEle && answerEle.length > 0) {
    for (var i=0;i < answerEle.length;i++) {
      var answerInput = answerEle[i].querySelector('input');
      var answerCont = answerEle[i].querySelector(`input[name="${answerInput.name}"]:checked`);
      var ques = document.getElementsByClassName(answerInput.name);
      if (!answerCont) {
        ques[0].classList.add('miss');
        NoanswerQuizInValid = NoanswerQuizInValid + 1;
        }
        else {
          ques[0].classList.remove('miss');
        }
      }
    }
    return NoanswerQuizInValid;
}

function answerSelectValid() {
  let NoanswerSelectInvalid = 0;
  var selectContainers = document.querySelectorAll('.selectBox');
  if (selectContainers && selectContainers.length > 0) {
    for (var i=0;i < selectContainers.length;i++) {
      var select = selectContainers[i].querySelector('select');
      // console.log("abc:", NoanswerSelectInvalid);
      if (select.value && select.value === 'None') {
        // select.style.color = "red";
        select.classList.add('miss');
        NoanswerSelectInvalid = NoanswerSelectInvalid + 1;
      }
      else {
        select.classList.remove('miss');
      }
    }
  }
  return NoanswerSelectInvalid;
}

//Test
function Submit() {
  
      console.log("answered valid: ", answerQuizValid());
      console.log("answered select valid: ", answerSelectValid());
  return;
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var footer = document.querySelector("footer");
  var popup = document.getElementById("popup");
  // document.getElementsByClassName('progress-bar')[0].style.width = "50%";
  var progressBar = document.getElementsByClassName("progress-bar")[0];
  header.style.filter = "blur(20px)";
  main.style.filter = "blur(20px)";
  footer.style.filter = "blur(20px)";
  mainEle.style.pointerEvents = 'none';
  popup.classList.add("active");
}

function refeshPage() {
  location.reload();
}

quizSelectLoad(allcodesData,language);

function quizSelectLoad(allcodelist,lang) {
  var output = [];
  let quizselectArr = buildQuizSelect(allcodelist);
  if (quizselectArr) {
    quizselectArr.map((item,index) => {
      let arr = item;
      let optionstring = '';
      let ques = '';
      arr.map((item1,index) => {
        let queshtml = '';
        let optionhtml = '';
        if (item1[1] === 'QUES') {
          if (lang === 'Vi') {
            ques = item1[4]
          }
          if (lang === 'En') {
            ques = item1[3];
          }
          queshtml = `
          <div class="selectdiv">
            <span>${ques}</span>
            <div class="selectBox">
                            <label>
                                <select>
                                  <option disabled="disabled" name="${item1[2]}" value="None" selected="selected" style="display:none;"> ${lang === 'Vi' ? 'Chọn ... ' : 'Choose ...'}</option>`;
        }
        else {
          if (lang === 'Vi') {
            optionhtml += `
            <option name="${item1[2]}" value="${item1[1]}">${item1[4]}</option>`;
          }
          if (lang === 'En') {
            optionhtml += `
            <option name="${item1[2]}" value="${item1[1]}">${item1[3]}</option>`
          }
        }
        optionstring += queshtml + optionhtml;
      });
      if (ques) {
        var optionstringfooter = `</select>
                                    </label>
                                      </div>
                                  </div>`
                                  optionstring +=optionstringfooter;

      } else {
        
      }
      // console.log("Option check: ", optionstring); 
      output.push(optionstring);
    });
    var demographic = document.querySelector(".demographic-questions");
    var combine = output.join("");
    demographic.innerHTML = combine;
  }
}

function buildQuizSelect(allcodelist) {
    let result = []
    if(allcodelist) {
        allcodelist.map((item,index) => {
            let quesType = '';
            let obj = {};
            if (item[1] === 'QUES') {
                quesType = item[2];
                let quesArr = AllCodeFiltered(allcodelist,quesType);
                result.push(quesArr);
            }
        })
      if (result) {
        result.sort(function (a, b) {
          return parseFloat(a.length) - parseFloat(b.length);
        });
      }
    }
    return result;
}


function buildQuiz(questionList, lang) {
  var output = [];
  if (questionList && questionList.length > 0) {
    questionList.map((item, index) => {
      var html = "";
      var htmltitle = "";
      var htmlfooter = "";
      var answerTypeList = buildAnswerType(answerTypeData, item[3]);
      console.log(item['answer']);
      //Build the single choice for the question
      if (answerTypeList && answerTypeList.length > 7) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[7].value
        }" value="${
          answerTypeList[7].value
        }" ${item['answer'] === answerTypeList[7].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[7].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/dead.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[7].valueEn
                        : answerTypeList[7].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 0) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[0].value
        }" value="${
          answerTypeList[0].value
        }" ${item['answer'] === answerTypeList[0].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[0].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/shocked.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[0].valueEn
                        : answerTypeList[0].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 1) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[1].value
        }" value="${
          answerTypeList[1].value
        }" ${item['answer'] === answerTypeList[1].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[1].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/happy.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[1].valueEn
                        : answerTypeList[1].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 2) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[2].value
        }" value="${
          answerTypeList[2].value
        }" ${item['answer'] === answerTypeList[2].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[2].value}">
                <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/wink.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[2].valueEn
                        : answerTypeList[2].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 3) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[3].value
        }" value="${
          answerTypeList[3].value
        }" ${item['answer'] === answerTypeList[3].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[3].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/nerd.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[3].valueEn
                        : answerTypeList[3].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 4) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[4].value
        }" value="${
          answerTypeList[4].value
        }" ${item['answer'] === answerTypeList[4].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[4].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/cool.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[4].valueEn
                        : answerTypeList[4].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 5) {
        html += `<input type="radio" key="${index}" name="${item[0]}" id="${
          index + answerTypeList[5].value
        }" value="${
          answerTypeList[5].value
        }" ${item['answer'] === answerTypeList[5].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[5].value}">
                <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/in-love.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[5].valueEn
                        : answerTypeList[5].valueVi
                    }</h4>
                </label>`;
      }
      if (answerTypeList && answerTypeList.length > 6) {
        html += `<input type="radio" key="${index}" 
        name="${item[0]}" id="${index + answerTypeList[6].value}" value="${
          answerTypeList[6].value
        }" ${item['answer'] === answerTypeList[6].value ? "checked" : ''}
            onchange="handleOnChangeInput(this);">
                <label for="${index + answerTypeList[6].value}">
                    <img src="https://raw.githubusercontent.com/se7enntt/EWB/master/image/sad.png" alt="">
                    <h4>${
                      lang === "En"
                        ? answerTypeList[6].valueEn
                        : answerTypeList[6].valueVi
                    }</h4>
                </label>`;
      }
      html+=`</div>`;
      //Build the question
      htmltitle = `
            <div class="quiz">
                    <div class="quiz__question">
                        <h2 class="text ${item[0]}">${index + 1}. ${
        lang === "En" ? item[4] : item[5]
      }</h2>
                    </div>
                    <div class="rating">
            `;
      htmlfooter = `</div>`;
      if (html) {
        html = htmltitle + html + htmlfooter;
      }
      output.push(html);
    });
    totalQues = output.length;
    var quizcontainer = document.querySelector(".quiz__content");
    var combine = output.join("");
    quizcontainer.innerHTML = combine;
  }
}

function buildAnswerType(answerTypeList, answerType) {
  let result = [];
  if (answerTypeList && answerType) {
    answerTypeList.map((item, index) => {
      let obj = {};
      if (item[2] === answerType) {
        obj.valueVi = item[5];
        obj.valueEn = item[4];
        obj.id = item[0];
        obj.key = item[1];
        obj.value = item[3];
        result.push(obj);
      }
    });
  }
  if (result) {
    result.sort(function (a, b) {
      return parseFloat(a.value) - parseFloat(b.value);
    });
  }
  return result;
}
