import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller("/stripe")
export class StripeController {
    constructor(private stripe : StripeService) {
    }

    @Get("/create")
    async createPayingIntent() : Promise<any>{ 
        const payingIntent = await this.stripe.client.paymentIntents.create({
            amount: 1,
            currency: 'usd',
            payment_method: 'card'
        })

        return payingIntent.client_secret
    }

}
