const questions = [
  {
    question: "当你面对不公平的事情时，你会：",
    options: [
      { text: "立即站出来维护正义", score: 3 },
      { text: "冷静分析，寻找最佳解决方案", score: 2 },
      { text: "尽量避免冲突，保持和谐", score: 1 },
      { text: "寻求他人帮助", score: 1 },
    ],
  },
  {
    question: "你如何看待规则和法律？",
    options: [
      { text: "规则是社会的基石，必须严格遵守", score: 3 },
      { text: "规则很重要，但有时需要灵活处理", score: 2 },
      { text: "规则是为弱者制定的，强者可以超越规则", score: 1 },
      { text: "规则是人为制定的，可以被改变", score: 2 },
    ],
  },
  {
    question: "你在团队中通常扮演什么角色？",
    options: [
      { text: "领导者，负责决策", score: 3 },
      { text: "协调者，确保团队和谐", score: 2 },
      { text: "执行者，专注于完成任务", score: 1 },
      { text: "创新者，提出新想法", score: 2 },
    ],
  },
  {
    question: "你如何处理压力？",
    options: [
      { text: "冷静分析，制定计划", score: 3 },
      { text: "寻求他人帮助", score: 2 },
      { text: "暂时逃避，稍后处理", score: 1 },
      { text: "通过运动或娱乐放松", score: 1 },
    ],
  },
  {
    question: "你如何看待辩论？",
    options: [
      { text: "喜欢辩论，享受思维碰撞", score: 3 },
      { text: "辩论有意义，但不喜欢冲突", score: 2 },
      { text: "辩论浪费时间，不如直接行动", score: 1 },
      { text: "辩论是展示自己观点的好机会", score: 2 },
    ],
  },
  {
    question: "你如何看待成功？",
    options: [
      { text: "成功意味着实现个人目标", score: 3 },
      { text: "成功意味着帮助他人", score: 2 },
      { text: "成功意味着获得权力和地位", score: 1 },
      { text: "成功意味着自由和创造力", score: 2 },
    ],
  },
  {
    question: "你如何看待失败？",
    options: [
      { text: "失败是学习的机会", score: 3 },
      { text: "失败是不可避免的，不必太在意", score: 2 },
      { text: "失败是耻辱，必须避免", score: 1 },
      { text: "失败是成功的垫脚石", score: 2 },
    ],
  },
  {
    question: "你如何看待道德和伦理？",
    options: [
      { text: "道德和伦理是行为的准则", score: 3 },
      { text: "道德和伦理是相对的，取决于情境", score: 2 },
      { text: "道德和伦理是束缚，应该突破", score: 1 },
      { text: "道德和伦理是社会的产物，可以被改变", score: 2 },
    ],
  },
  {
    question: "你如何表达自己的观点？",
    options: [
      { text: "直接表达，不拐弯抹角", score: 3 },
      { text: "委婉表达，考虑他人感受", score: 2 },
      { text: "通过行动表达，少说话", score: 1 },
      { text: "通过写作或艺术表达", score: 2 },
    ],
  },
  {
    question: "你如何处理他人的批评？",
    options: [
      { text: "冷静接受，反思改进", score: 3 },
      { text: "感到受伤，但会尝试理解", score: 2 },
      { text: "立即反驳，维护自己的立场", score: 1 },
      { text: "忽略批评，坚持自己的方式", score: 2 },
    ],
  },
  {
    question: "你如何看待团队合作？",
    options: [
      { text: "团队合作是成功的关键", score: 3 },
      { text: "团队合作很重要，但有时会拖慢进度", score: 2 },
      { text: "更喜欢独立工作，团队合作是次要的", score: 1 },
      { text: "团队合作是必要的，但需要明确分工", score: 2 },
    ],
  },
  {
    question: "你如何看待风险？",
    options: [
      { text: "风险是机会，值得尝试", score: 3 },
      { text: "风险需要谨慎评估", score: 2 },
      { text: "风险是危险的，应该避免", score: 1 },
      { text: "风险是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待学习新知识？",
    options: [
      { text: "非常喜欢，总是主动学习", score: 3 },
      { text: "有兴趣，但需要动力", score: 2 },
      { text: "不太感兴趣，除非必要", score: 1 },
      { text: "学习是为了应付考试或工作", score: 2 },
    ],
  },
  {
    question: "你如何看待时间管理？",
    options: [
      { text: "非常重视，严格按照计划执行", score: 3 },
      { text: "有计划，但有时会灵活调整", score: 2 },
      { text: "不太在意，随性而为", score: 1 },
      { text: "时间管理是束缚，更喜欢自由", score: 2 },
    ],
  },
  {
    question: "你如何看待创新？",
    options: [
      { text: "创新是成功的关键", score: 3 },
      { text: "创新很重要，但需要结合实际", score: 2 },
      { text: "创新是冒险，不如按部就班", score: 1 },
      { text: "创新是少数人的事，与我无关", score: 2 },
    ],
  },
  {
    question: "你如何看待竞争？",
    options: [
      { text: "竞争是进步的动力", score: 3 },
      { text: "竞争有必要，但不应过度", score: 2 },
      { text: "竞争是压力，尽量避免", score: 1 },
      { text: "竞争是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待责任？",
    options: [
      { text: "责任是必须承担的", score: 3 },
      { text: "责任很重要，但有时需要分担", score: 2 },
      { text: "责任是负担，尽量避免", score: 1 },
      { text: "责任是相对的，取决于情境", score: 2 },
    ],
  },
  {
    question: "你如何看待人际关系？",
    options: [
      { text: "人际关系是成功的关键", score: 3 },
      { text: "人际关系很重要，但需要维护", score: 2 },
      { text: "人际关系是负担，尽量避免", score: 1 },
      { text: "人际关系是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待金钱？",
    options: [
      { text: "金钱是实现目标的工具", score: 3 },
      { text: "金钱很重要，但不是最重要的", score: 2 },
      { text: "金钱是万能的", score: 1 },
      { text: "金钱是束缚，不如自由", score: 2 },
    ],
  },
  {
    question: "你如何看待健康？",
    options: [
      { text: "健康是成功的基础", score: 3 },
      { text: "健康很重要，但有时会被忽视", score: 2 },
      { text: "健康是次要的，工作更重要", score: 1 },
      { text: "健康是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待家庭？",
    options: [
      { text: "家庭是生活的核心", score: 3 },
      { text: "家庭很重要，但需要平衡", score: 2 },
      { text: "家庭是负担，尽量避免", score: 1 },
      { text: "家庭是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待朋友？",
    options: [
      { text: "朋友是生活中不可或缺的", score: 3 },
      { text: "朋友很重要，但需要选择", score: 2 },
      { text: "朋友是负担，尽量避免", score: 1 },
      { text: "朋友是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待爱情？",
    options: [
      { text: "爱情是生活中最重要的", score: 3 },
      { text: "爱情很重要，但需要理性", score: 2 },
      { text: "爱情是负担，尽量避免", score: 1 },
      { text: "爱情是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待工作？",
    options: [
      { text: "工作是实现自我价值的途径", score: 3 },
      { text: "工作很重要，但需要平衡", score: 2 },
      { text: "工作是负担，尽量避免", score: 1 },
      { text: "工作是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待生活？",
    options: [
      { text: "生活是充满机会的", score: 3 },
      { text: "生活需要努力，但也要享受", score: 2 },
      { text: "生活是负担，尽量避免", score: 1 },
      { text: "生活是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待未来？",
    options: [
      { text: "未来是充满希望的", score: 3 },
      { text: "未来需要规划，但也要灵活", score: 2 },
      { text: "未来是未知的，尽量避免", score: 1 },
      { text: "未来是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待过去？",
    options: [
      { text: "过去是经验的积累", score: 3 },
      { text: "过去需要反思，但不要沉迷", score: 2 },
      { text: "过去是负担，尽量避免", score: 1 },
      { text: "过去是不可避免的，顺其自然", score: 2 },
    ],
  },
  {
    question: "你如何看待现在？",
    options: [
      { text: "现在是最重要的", score: 3 },
      { text: "现在需要珍惜，但也要规划未来", score: 2 },
      { text: "现在是负担，尽量避免", score: 1 },
      { text: "现在是不可避免的，顺其自然", score: 2 },
    ],
  },
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("progress-text");
const testPage = document.getElementById("test-page");
const resultPage = document.getElementById("result-page");
const resultText = document.getElementById("result-text");
const resultReason = document.getElementById("result-reason");
const resultSuggestion = document.getElementById("result-suggestion");

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(option.score));
    optionsElement.appendChild(button);
  });
  progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  nextButton.disabled = true;
}

function selectOption(score) {
  totalScore += score;
  nextButton.disabled = false;
}

function showResult() {
  testPage.classList.add("hidden");
  resultPage.classList.remove("hidden");

  if (totalScore >= 80) {
    resultText.textContent = "天生律师！";
    resultReason.textContent = "你在逻辑思维、辩论能力和正义感方面表现出色，具备成为律师的核心特质。";
    resultSuggestion.textContent = "建议：继续提升法律知识和沟通技巧，考虑报考法学院或实习机会。";
  } else if (totalScore >= 50) {
    resultText.textContent = "潜力律师！";
    resultReason.textContent = "你有成为律师的潜力，但在某些方面（如抗压能力或团队合作）需要进一步提升。";
    resultSuggestion.textContent = "建议：多参与辩论活动，学习法律基础知识，培养抗压能力。";
  } else {
    resultText.textContent = "不适合律师。";
    resultReason.textContent = "你的性格更适合创意类或服务类工作，律师职业可能无法充分发挥你的优势。";
    resultSuggestion.textContent = "建议：考虑从事艺术、设计、教育等领域，寻找更适合你的职业方向。";
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("retry-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  totalScore = 0;
  testPage.classList.remove("hidden");
  resultPage.classList.add("hidden");
  showQuestion();
});

// 初始化
showQuestion();
