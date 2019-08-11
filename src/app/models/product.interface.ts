
export enum TYPES {
    SMART = 'smart',
    WATCH = 'watch',
    TRACKER = 'tracker'
}

export interface IProduct {
    id: number | string;
    image?: string;
    category?: string;
    title: string;
    description?: string;
    qty?: number;
    price?: number;
    createdAt: Date;
}

export const IProductSchema = {
    "type": "object",
    "properties": {
        "id": { "type": ["string"] },
        "image": { "type": ["string", "null"] },
        "category": { enum: Object.values(TYPES) },
        "title": { "type": "string" },
        "description": { "type": ["string", "null"], maxLength: 50 },
        "qty": { "type": "integer" },
        "price": { "type": "number" },
        "createdAt": { "type": "string", "format": "date-time" } // date, date-time, uri, email, hostname, ipv4, ipv6, regex. 
    },
    "required": ["id", "title", "createdAt"],
    "additionalProperties": false
}