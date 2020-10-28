import { getSpecie } from '../../client/getSpecie';

describe('getSpecie', () => {

    const specie = {
        name: "Sullustan",
        designation: "sentient",
        average_height: "180",
        language: "Sullutese",
        hair_colors: "none",
        skin_colors: "pale"
    }

    test('get specie when in sucess', async(done) => {

        const result = await getSpecie(10);
    
        expect(result).toStrictEqual(specie);
        done();
    
    });

});