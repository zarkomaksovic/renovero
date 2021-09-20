export interface IcommonFormInterface {
  label: string;
  formFieldTitle: string;

}
export interface IdropdownFieldInterface extends IcommonFormInterface {
  placeholder: string;
  options: string[];
}
export interface ItextareaFieldInterface extends IcommonFormInterface {
  rows: string;
}
