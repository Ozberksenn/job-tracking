export type ReservationType = {
    Id: number;
    Name: string;
    Mail?: string;
    Count: number;
    Date: string;
    Status: 'Scheduled' | 'Arrived' | 'Completed' | 'Cancalled' | 'No_Show';
    Note?: string;
    Phone?: string;
    UserName: string;
    TableName: string;
    TableCapacity: number;
}