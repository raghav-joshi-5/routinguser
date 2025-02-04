export interface Iprod {
  pName: string;
  PId: string;
  pStatus: 'inprogress' | 'delivered' | 'dispatch';
  canReturn: number;
  pImg: string;
}
