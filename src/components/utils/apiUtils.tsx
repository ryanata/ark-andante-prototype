export async function countGamePlayed(): Promise<any> {
    const url = 'https://fxkigzqkipgzromubglz.supabase.co/functions/v1/updateCounter';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}

export async function recordGameStats({ fiumeCompletionTime, fiumeOpenedRefSheetCount, gelataCompletionTime, gelataOpenedRefSheetCount, nuvolaCompletionTime, nuvolaOpenedRefSheetCount, scoglioCompletionTime, scoglioOpenedRefSheetCount }: {
    fiumeCompletionTime: number,
    fiumeOpenedRefSheetCount: number,
    gelataCompletionTime: number,
    gelataOpenedRefSheetCount: number,
    nuvolaCompletionTime: number,
    nuvolaOpenedRefSheetCount: number,
    scoglioCompletionTime: number,
    scoglioOpenedRefSheetCount: number
}): Promise<any> {
    const url = 'https://fxkigzqkipgzromubglz.supabase.co/functions/v1/addGame';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fiumeCompletionTime,
                fiumeOpenedRefSheetCount,
                gelataCompletionTime,
                gelataOpenedRefSheetCount,
                nuvolaCompletionTime,
                nuvolaOpenedRefSheetCount,
                scoglioCompletionTime,
                scoglioOpenedRefSheetCount
            })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
}

export function once(fn: (...args: any[]) => any) {
    let result: any;
    let hasRun = false;
    return function(...args: any[]) {
        if (!hasRun) {
            // @ts-ignore
            result = fn.apply(this, args);
            hasRun = true;
        }
        return result;
    };
}