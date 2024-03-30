export type ArkGameData = {
    firstPlaythrough: boolean;
    allCompleted: boolean;
    gameStarted: boolean;
    fiumeUserAnswer: string;
    fiumeCompletionTime: number;
    fiumeCompleted: boolean;
    fiumeOpenedRefSheetCount: number;
    gelataUserAnswer: string;
    gelataCompletionTime: number;
    gelataCompleted: boolean;
    gelataOpenedRefSheetCount: number;
    nuvolaUserAnswer: string;
    nuvolaCompletionTime: number;
    nuvolaCompleted: boolean;
    nuvolaOpenedRefSheetCount: number;
    scoglioUserAnswer: string;
    scoglioCompletionTime: number;
    scoglioCompleted: boolean;
    scoglioOpenedRefSheetCount: number;
};

type NumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type ArkGameNumberDataKeys = NumericKeys<ArkGameData>;

type BooleanKeys<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

type ArkGameBooleanDataKeys = BooleanKeys<ArkGameData>;