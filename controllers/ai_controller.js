const {error, success} = require("node-http-response-wrapper");
const aiService = require("../services/ai_service");

const prompt = async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if(!prompt) {
            return error(res, 'Prompt is required');
        }

        const response = await aiService.textOnly(prompt);
        return success(res, 'AI Response', {
            prompt,
            response
        });
    } catch (e) {
        console.log(e);
        return error(res, 'Gemini AI Error');
    }
}

module.exports = {
    prompt
}

