export default class ClassificationError extends Error {
    constructor(
        public organismName: string,
        message: string,
        public ogError?: unknown
    ) {
        super(message);
        this.name = "ClassificationError";
    }

    public getDetails(): string {
        return `[${this.name}] ${this.message} (Organismo: ${this.organismName})`;
    }
}