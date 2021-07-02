import  mockupDataNewest from '../../data/mockupDataNewest'
import  mockupDataBestSeller from '../../data/mockupDataBestSeller'
import  mockupDataHot from '../../data/mockupDataHot'
import  mockupDataDiscount from '../../data/mockupDataDiscount'

/* type State = Array<{
  id: number,
  name: string,
  address: string,
  phoneNumber: string,
}>
*/
type State = Array<{
  image: any;
  price: number;
  sale: number;
  title: string;
  status:{
    type: string,
    content: string
  }
}>;
type Action = {
  type: string,
  number: number,
  image: any;
  price: number;
  sale: number;
  title: string;
  status:{
    type: string,
    content: string
  }
} 





export const mockupDataCategory = (state: State = mockupDataNewest, action: Action)  => {
  switch (action.type) {
    
    default:
      return state
  }
}

export const mockupDataCategoryBestSeller = (state: State = mockupDataBestSeller, action: Action)  => {
  switch (action.type) {
    
    default:
      return state
  }
}
export const mockupDataCategoryDiscount = (state: State = mockupDataDiscount, action: Action)  => {
  switch (action.type) {
    
    default:
      return state
  }
}
export const mockupDataCategoryHot = (state: State = mockupDataHot, action: Action)  => {
  switch (action.type) {
    
    default:
      return state
  }
}
