window.riskFormObject = {
    userInfo: null,
    options: {
        businessName: null,
        choices: null,
        selectedChoiceCount: null,
        score: null,
        riskStatus: null
    },
    selectedServices: null
};

window.riskAnalysisQuestions = ['What is your Age Group?',
    'What is your occupation?',
    'Your Current Investment in trading',
    'Your Preferred Investment Type',
    'Total Annual Income',
    'Experience with Equity Investment',
    'Experience with Commodity Investment',
    'What is your experience with investment in past',
    'Investment Goal/Objective',
    'Total Experience in Market/Investment',
    'Total Experience in Market/Investment',
    'Experience in Market Segments',
    'Size of Emergency Funds',
    'Percentage of income allocated to payoff Debts',
    'Status of Accommodation',
    'No of financially Dependent on you',
    'Risk tolerance on Investment in terms of losses',
    'Practice on Saving money',
    'Experience with Forex Investment',
    'Are you any of the following, or directly or indirectly related to any of the following',
    'Name of Business/Firm/Company that you own or work'];


// HTML Content which show in #lowRiskWrapper
window.lowRiskWrapperContent =
    `<p class="fw-medium ">Low Risk</p>
    <div class="row row-cols-1 row-gap-2">
        <div class="col">
            <label for="lowRisk">
                <input type="radio" class="form-check-input" id="lowRisk" name="No_Service_can_be_offered" value="true">
                <span>No Service can be offered</span>
            </label>
        </div>
    </div>`;

// HTML Content which show in #moderateRiskWrapper
window.moderateRiskWrapperContent =
    `<p class="fw-medium ">Moderate Risk</p>
    <div class="row row-cols-1 row-gap-2">
        <div class="col">
            <label for="moderateRisk">
                <input type="radio" class="form-check-input" id="moderateRisk" name="Stock_Cash" value="true">
                <span>Stock Cash</span>
            </label>
        </div>
    </div>`;

// HTML Content which show in #highRiskWrapper
window.highRiskWrapperContent =
    `<p class="fw-medium ">High Risk Services-</p>
    <div class="row row-cols-1 row-gap-2">
        <div class="col">
            <label for="highRiskServices1">
                <input type="radio" class="form-check-input" id="highRiskServices1" name="Index_Option" value="true">
                <span>Index Option</span>
            </label>
        </div>
        <div class="col">
            <label for="highRiskServices2">
                <input type="radio" class="form-check-input" id="highRiskServices2" name="Stock_Option" value="true">
                <span>Stock Option</span>
            </label>
        </div>
        <div class="col">
            <label for="highRiskServices3">
                <input type="radio" class="form-check-input" id="highRiskServices3" name="Stock_Future" value="true">
                <span>Stock Future</span>
            </label>
        </div>
        <div class="col">
            <label for="highRiskServices4">
                <input type="radio" class="form-check-input" id="highRiskServices4" name="Bluechip_C-F-O" value="true">
                <span>Bluechip C/F/O</span>
            </label>
        </div>
        <div class="col">
            <label for="highRiskServices5">
                <input type="radio" class="form-check-input" id="highRiskServices5" name="Commodity_Service" value="true">
                <span>Commodity Service</span>
            </label>
        </div>
        <div class="col">
            <label for="highRiskServices6">
                <input type="radio" class="form-check-input" id="highRiskServices6" name="Wealth_Management_C-F-O-Commodity" value="true">
                <span>Wealth Management C/F/O/Commodity</span>
            </label>
        </div>
    </div>`;

let x = {
    "userInfo": {
        "name": "Divyanshu Shrivastava",
        "contact": "9111525164",
        "panNo": "JFYPS1602Q",
        "adharCardNo": "900866257575",
        "dob": "1999-11-14",
        "email": "divyanshu@gmail.com",
        "city": "Anuppur"
    },
    "options": {
        "businessName": "Dhjdisd",
        "choices": {
            "q1": "21 to 35 Year (4)",
            "q2": "Professional (2)",
            "q3": "5 to 10 Lac (3)",
            "q4": "Long term (1)",
            "q5": "2 to 5 Lac (1)",
            "q6": "Extensive Experience (4)",
            "q7": "Very Less Experience(1)",
            "q8": "Average(2)",
            "q9": "Regular Income(2)",
            "q10": "Less then 2 years(1)",
            "q11": "Less then 1 Lac(1)",
            "q12": "All(4)",
            "q13": "Less then 3 months(1)",
            "q14": "20 to 35%(2)",
            "q17": "40% and above(4)",
            "q18": "I want to but I fail to save(2)",
            "q20": "Connected to Media(0)"
        },
        "selectedChoiceCount": 17,
        "score": 35
    },
    "selectedServices": {
        "moderateRisk": "true",
        "highRiskServices": "true",
        "payableAmount": "2000"
    }
};