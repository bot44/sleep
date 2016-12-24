interface Sleep {
    (ms?: number): Promise<void>;
}

declare const sleep: Sleep;

export = sleep;