import people_data from '../data/people_data.json';

export class PeopleProcessing {
    getById(id: number) {
        return people_data.find((p) => p.id === id);
    }

    getAll(pageId: number) {
        const PAGE_SIZE = 10;
        const start = (pageId - 1) * PAGE_SIZE;
        return people_data.slice(start, start + PAGE_SIZE);
    }
}
