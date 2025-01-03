import { IQuestion } from "../hooks/useQuestions";

export const localQuestions: IQuestion[] = [
   {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "What is the name of NASA&rsquo;s most famous space telescope?",
      correct_answer: "Hubble Space Telescope",
      incorrect_answers: ["Big Eye", "Death Star", "Millenium Falcon"],
   },
   {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question:
         "Virtual reality company Oculus VR lost which of it&#039;s co-founders in a freak car accident in 2013?",
      correct_answer: "Andrew Scott Reisse",
      incorrect_answers: ["Nate Mitchell", "Jack McCauley", "Palmer Luckey"],
   },
   {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Which of the following chemicals are found in eggplant seeds?",
      correct_answer: "Nicotine",
      incorrect_answers: ["Mescaline", "Cyanide", "Psilocybin"],
   },
   {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "What company developed the vocaloid Hatsune Miku?",
      correct_answer: "Crypton Future Media",
      incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"],
   },
   {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question:
         "What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
      correct_answer: "Helicopter",
      incorrect_answers: ["Stealth Blimp", "Jet", "Space Capsule"],
   },
   {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Which of the following is not another name for the eggplant?",
      correct_answer: "Potimarron",
      incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"],
   },
   {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question:
         "In flight systems, what does the initialism &quot;TCAS&quot; stand for?",
      correct_answer: "Traffic Collision Avoidance System",
      incorrect_answers: [
         "Traffic Communication Alert System",
         "Traffic Configuration Alignment System",
         "Traffic Call-sign Abbreviation System",
      ],
   },
   {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What is the Italian word for &quot;tomato&quot;?",
      correct_answer: "Pomodoro",
      incorrect_answers: ["Aglio", "Cipolla", "Peperoncino"],
   },
   {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What is a &quot;dakimakura&quot;?",
      correct_answer: "A body pillow",
      incorrect_answers: [
         "A Chinese meal, essentially composed of fish",
         "A yoga posture",
         "A word used to describe two people who truly love each other",
      ],
   },
   {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question:
         "What was the original name of the search engine &quot;Google&quot;?",
      correct_answer: "BackRub",
      incorrect_answers: ["CatMassage", "SearchPro", "Netscape Navigator"],
   },
];
