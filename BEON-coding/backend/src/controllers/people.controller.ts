import {
    JsonController,
    Get,
    HttpCode,
    NotFoundError,
    Param,
} from 'routing-controllers';
import { PeopleProcessing } from '../services/people_processing.service';

const peopleProcessing = new PeopleProcessing();

@JsonController('/people', { transformResponse: false })
export default class PeopleController {
    @HttpCode(200)
    @Get('/all/:pageId')
    getAllPeople(@Param('pageId') pageId: number) {
        const people = peopleProcessing.getAll(pageId);

        if (!people) {
            throw new NotFoundError('No people found');
        }

        return {
            data: people,
        };
    }

    @HttpCode(200)
    @Get('/:id')
    getPerson(@Param('id') id: number) {
        const person = peopleProcessing.getById(id);

        if (!person) {
            throw new NotFoundError('No person found');
        }

        return {
            data: person,
        };
    }
}
