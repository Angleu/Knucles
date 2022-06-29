export default class FileServices {
    async saveOne(typeFile: string, name: string, extention: string): Promise<Object> {
        return {
            typeFile,
            name,
            extention
        }
    }
}