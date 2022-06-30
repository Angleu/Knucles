import { Request, Response } from 'express'
import { createReadStream, createWriteStream } from 'fs';


export default class StreamControllers {
    async indexVideo(request: Request, response: Response) {
        const { fileName } = request.params;
        createReadStream('archives/Version 1-1656512342851.mov')
            .pipe(response)
            .on("finish", () => {
                createWriteStream("output.MOV")
            })

    }
}