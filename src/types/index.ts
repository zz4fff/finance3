export interface Account {
    id: number;
    label: string;
    value: number;
    date: string;
    type: number; // 0 = despesa, 1 = receita
}