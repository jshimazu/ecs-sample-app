import { Controller, Get, InternalServerError } from "routing-controllers";
@Controller()
export class AppController {
    @Get("/")
    get() {
       return 'OK';
    }

    @Get('/error')
    error() {
        throw new InternalServerError('error');
    }
}