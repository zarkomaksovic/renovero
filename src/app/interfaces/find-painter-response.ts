export interface IfindPainterResponse {
  accountUid: string;
  newAccount: boolean;
  task: Task;
}
declare interface WorkTypes {
  workTypeUids: any[];
}

declare interface Place {
  id: number;
  postalCode?: any;
  placeName: string;
  cantonName: string;
  country?: any;
}

declare interface Task {
  workTypes: WorkTypes;
  title: string;
  place: Place;
  taskUid: number;
}
