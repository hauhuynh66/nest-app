import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as ai from 'openai'

@Injectable()
export class BotService {
    private openai : ai.OpenAI | null = null

    constructor(private config : ConfigService) {
        this.openai = new ai.OpenAI({
            apiKey: config.get<string>("openai.key")
        });
    }

    async test() {
        const completion = await this.openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
        });
        return completion;
    }
}