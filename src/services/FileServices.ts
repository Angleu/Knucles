export default class FileServices {
    async saveOne(typeFile: string, name: string, extention: string) {

        return {
            file: (name + extention).toString(),
            extention
        }
    }
}