const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const config = require('config');

const aiConfig = {
    gemini: {
        textOnlyModel: "gemini-pro",
        textAndImageModel: "gemini-pro-vision",
        apiKey: config.get('gemini_private_key'),

        // Gemini Safety Settings
        // Explore all Harm categories here -> https://ai.google.dev/api/rest/v1beta/HarmCategory
        // Explore all threshold categories -> https://ai.google.dev/docs/safety_setting_gemini
        safetySettings: [
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ],
    },
};

module.exports = {
    aiConfig
}
