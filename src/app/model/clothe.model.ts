import { MoreInfo } from './moreInfo.model';

export interface Clothe{
  id: number;
  name: string;
  price: number;
  size: number;
  imgUrl?: string;
  moreInfo: MoreInfo;
}
