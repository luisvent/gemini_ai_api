const {GoogleGenerativeAI} = require("@google/generative-ai");
const {aiConfig} = require("../helpers/gemini_config");
const config = require('config');

const textOnly = (prompt) => {
    return new Promise(async (resolve, reject) => {
        try {
            const model = getTextModel();
            const result = await model.generateContent(buildPrompt(prompt));
            const response = await result.response;
            const text = response.text();
            resolve(text);
        } catch (e) {
            console.log(e)
            reject(new Error('Error communicating with Gemini API'));
        }
    });
}

const buildPrompt = (prompt) => {
    const contextPrompt =  `Based in this information: "${config.get('context')}" Answer this questions: ${prompt}, and answer as a human in the same language the question is being asked.`;
    return contextPrompt;
}

const getTextModel = () => {
    const genAI = new GoogleGenerativeAI(aiConfig.gemini.apiKey);
    const model = genAI.getGenerativeModel({ model: aiConfig.gemini.textOnlyModel});
    return model;
}

module.exports = {
    textOnly
}
