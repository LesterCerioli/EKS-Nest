export interface Entity extends EntityBase {
    slug: string;
    name: string;
    entityId: number;
    entityTypeId: string;
    entityType: EntityType;
}