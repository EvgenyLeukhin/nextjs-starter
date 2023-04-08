export type FilterOrder = 'asc' | 'desc';

export type FilterName = 'none' | 'status' | 'author' | 'title';

export type TodoFilter = {
  name: FilterName;
  order: FilterOrder;
  searchText: string;
};
