import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    getResulItem(id: string): Promise<import("../typeorm").Results[]>;
    getResultList(id: string): Promise<import("../typeorm").Results[]>;
    createResult(createResultDto: CreateResultDto, req: any): Promise<{
        id: string;
    }>;
}
