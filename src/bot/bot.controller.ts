import { Controller, Get } from "@nestjs/common";
import { BotService } from "./bot.service";

@Controller("/bot")
export class BotController {
    constructor(
        private bot : BotService
    ) {

    }

    @Get("/test")
    async test() {
        return await this.bot.test()
    }
}