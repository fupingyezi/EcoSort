import { QuestionParams } from "@/components/question/question/question"; 

const QuestionList1: QuestionParams[] = [
    {
        question: "可回收垃圾主要包括哪些？",
        options: [
            { sequenceWord: "A", optionContent: "废纸、塑料、玻璃、金属和布料" },
            { sequenceWord: "B", optionContent: "厨余垃圾、果皮、蔬菜残余" },
            { sequenceWord: "C", optionContent: "烟蒂、尘土、卫生间废纸" },
            { sequenceWord: "D", optionContent: "废电池、废荧光灯管、废油漆" }
        ],
        correctIndex: 0
    },
    {
        question: "有害垃圾应该投放到什么颜色的垃圾桶？",
        options: [
            { sequenceWord: "A", optionContent: "红色" },
            { sequenceWord: "B", optionContent: "蓝色" },
            { sequenceWord: "C", optionContent: "绿色" },
            { sequenceWord: "D", optionContent: "黑色" }
        ],
        correctIndex: 0
    },
    {
        question: "以下哪种垃圾属于厨余垃圾？",
        options: [
            { sequenceWord: "A", optionContent: "过期食品" },
            { sequenceWord: "B", optionContent: "纸巾" },
            { sequenceWord: "C", optionContent: "破碎的陶瓷" },
            { sequenceWord: "D", optionContent: "旧书本" }
        ],
        correctIndex: 0
    },
    {
        question: "在垃圾分类中，以下哪种垃圾需要特别注意避免污染其他垃圾？",
        options: [
            { sequenceWord: "A", optionContent: "可回收垃圾" },
            { sequenceWord: "B", optionContent: "厨余垃圾" },
            { sequenceWord: "C", optionContent: "有害垃圾" },
            { sequenceWord: "D", optionContent: "其他垃圾" }
        ],
        correctIndex: 2
    },
    {
        question: "以下哪种垃圾不属于可回收垃圾？",
        options: [
            { sequenceWord: "A", optionContent: "玻璃瓶" },
            { sequenceWord: "B", optionContent: "塑料瓶" },
            { sequenceWord: "C", optionContent: "餐巾纸" },
            { sequenceWord: "D", optionContent: "金属罐头" }
        ],
        correctIndex: 2
    },
    {
        question: "在垃圾分类中，以下哪种垃圾应该投放到‘其他垃圾’桶？",
        options: [
            { sequenceWord: "A", optionContent: "旧衣服" },
            { sequenceWord: "B", optionContent: "烟蒂" },
            { sequenceWord: "C", optionContent: "废电池" },
            { sequenceWord: "D", optionContent: "剩饭" }
        ],
        correctIndex: 1
    },
    {
        question: "所有的塑料制品都可以作为可回收垃圾回收。",
        options: [
            { sequenceWord: "A", optionContent: "正确" },
            { sequenceWord: "B", optionContent: "错误" }
        ],
        correctIndex: 1
    },
    {
        question: "厨余垃圾应该沥干水分后再投放到厨余垃圾桶。",
        options: [
            { sequenceWord: "A", optionContent: "正确" },
            { sequenceWord: "B", optionContent: "错误" }
        ],
        correctIndex: 0
    },
    {
        question: "废电池属于有害垃圾，应该单独投放。",
        options: [
            { sequenceWord: "A", optionContent: "正确" },
            { sequenceWord: "B", optionContent: "错误" }
        ],
        correctIndex: 0
    },
    {
        question: "垃圾分类主要是为了方便垃圾处理厂的工作，对个人影响不大。",
        options: [
            { sequenceWord: "A", optionContent: "正确" },
            { sequenceWord: "B", optionContent: "错误" }
        ],
        correctIndex: 1
    }
];

export { QuestionList1 };