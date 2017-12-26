/* PARTICIPANT JUDGEMENTS */
var judgments = Object.freeze({
    questions: [
        'How curious are you about the answer to this question?',
        'How confident are you that you know the correct answer to this question?',
        'To what extent would knowing the answer to this question be useful to you in the future?',
        'How popular do you think this question is in this social forum?',
        'How well-written do you think this question is?'
    ],
    choices: [
        ['not curious at all', '', '', '', '', '', 'very curious'],
        ['not confident at all', '', '', '', '', '', 'very confident'],
        ['not useful at all', '', '', '', '', '', 'very useful'],
        ['not at all', '', '', '', '', '', 'very popular'],
        ['not at all', '', '', '', '', '',  'very well-written']
    ]
});

/* SURVEY QUESTIONS */
var questions = {
    groupA: [
        "Why do you feel sick and not hungry when you haven't eaten?",
        "How does sleep restore the body's energy?",
        'Why waves? All energy transfer in nature from one point to another happens in waves. Light, sound, even ' +
            'gravity travels in waves. Which fundamental property of nature is responsible for wave-like nature? ' +
            'Are there other non-wave-like ways to transfer energy from one point to another?',
        'How do activated carbon filters work?',
        'Why must a country "declare war" before attacking?'
    ],
    groupB: [
        'Why are bubbles round?',
        'How is research carried out in order to constantly develop and improve CPUs and GPUs?',
        'What are the biological advantages and disadvantages of trees shedding their leaves vs keeping them ' +
            'all year round (deciduous vs coniferous)?',
        'How do such small doses of things like cocaine and heroin kill you? How do these small powders have such ' +
            'a big effect on your body?',
        'Why does the eastern half of the United States have colder winters than the western half?',
    ]
};
